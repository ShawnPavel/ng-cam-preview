import { Component, OnInit } from '@angular/core';

import * as application from 'application';
import * as page from 'ui/page';
import * as utilsModule from "utils/utils";

declare var android: any;
declare var java: any;

var STATE_PREVIEW = 0;
var STATE_WAITING_LOCK = 1;
var STATE_WAITING_PRECAPTURE = 2;
var STATE_WAITING_NON_PRECAPTURE = 3;
var STATE_PICTURE_TAKEN = 4;
var mState = STATE_PREVIEW;

var mTextureView: any;
var mPreviewSize: any = null;
var mCameraDevice: any = null;
var mPreviewBuilder: any = null;
var mPreviewSession: any = null;

var mStateCallback: any = null;
var mPreviewStateCallback: any = null;

@Component({
	moduleId: module.id,
	selector: 'android-camera-preview',
	templateUrl: 'android-camera-preview.component.html',
	styleUrls: ['android-camera-preview.css']
})
export class AndroidCameraPreviewComponent implements OnInit {

	private static TAG = 'NNGCameraPreview';

	constructor() {
	}

	ngOnInit(): void {
		AndroidCameraPreviewComponent.requestPermissions();
	}

	public takePhoto() {
		captureImage();
	}

	// Init
	private onCreatingView(args): void {
		mTextureView = new android.view.TextureView(application.android.context);
		mTextureView.setSurfaceTextureListener(mSurfaceTextureListener);
		args.view = mTextureView;
	}

	/* Static Methods */
	public static isAvailable() {
		var utils: typeof utilsModule = require("utils/utils");

		return utils.ad.getApplicationContext().getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA)
	}

	public static requestPermissions() {
		let REQUEST_REQUIRED_PERMISSIONS = 1234;
		if (!AndroidCameraPreviewComponent.hasPermissions()) {
			(<any>android.support.v4.app.ActivityCompat).requestPermissions(application.android.currentContext, [(<any>android).Manifest.permission.CAMERA, (<any>android).Manifest.permission.WRITE_EXTERNAL_STORAGE], REQUEST_REQUIRED_PERMISSIONS);
		}
	}

	public static hasPermissions() {
		console.log("checking permissions ....");
		return (<any>android.support.v4.content.ContextCompat).checkSelfPermission(application.android.currentContext, (<any>android).Manifest.permission.WRITE_EXTERNAL_STORAGE) === android.content.pm.PackageManager.PERMISSION_GRANTED
			&& (<any>android.support.v4.content.ContextCompat).checkSelfPermission(application.android.currentContext, (<any>android).Manifest.permission.CAMERA) === android.content.pm.PackageManager.PERMISSION_GRANTED;
	}

	public static hasDeniedPermissions() {
		console.log("checking permissions ....");
		return (<any>android.support.v4.content.ContextCompat).checkSelfPermission(application.android.currentContext, (<any>android).Manifest.permission.WRITE_EXTERNAL_STORAGE) === android.content.pm.PackageManager.PERMISSION_DENIED
			&& (<any>android.support.v4.content.ContextCompat).checkSelfPermission(application.android.currentContext, (<any>android).Manifest.permission.CAMERA) === android.content.pm.PackageManager.PERMISSION_DENIED;
	}
}

function startPreview() {

	let texture = mTextureView.getSurfaceTexture();
	if (texture == null) {
		return;
	}

	texture.setDefaultBufferSize(mPreviewSize.getWidth(), mPreviewSize.getHeight());
	let surface = new android.view.Surface(texture);

	try {
		mPreviewBuilder = mCameraDevice.createCaptureRequest(android.hardware.camera2.CameraDevice.TEMPLATE_PREVIEW);
	} catch (err) {
		console.error(err);
	}

	mPreviewBuilder.addTarget(surface);
	try {
		if (mPreviewStateCallback == null) {
			mPreviewStateCallback = new MyPreviewStateCallback();
		}
		let surfaceList = new java.util.ArrayList();
		surfaceList.add(surface);

		mCameraDevice.createCaptureSession(surfaceList, mPreviewStateCallback, null);
	} catch (err) {
		console.error(err);
	}
}

/* Listeners */
let mSurfaceTextureListener = new android.view.TextureView.SurfaceTextureListener({
	onSurfaceTextureAvailable(surface, width, height) {
		console.log('SurfaceTextureListener onSurfaceTextureAvailable');
		let appContext = application.android.foregroundActivity;
		let manager = appContext.getSystemService(android.content.Context.CAMERA_SERVICE);
		try {
			let cameraId = manager.getCameraIdList()[0]; // TODO: find the back facing camera
			let characteristics = manager.getCameraCharacteristics(cameraId);
			let map = characteristics.get(android.hardware.camera2.CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
			mPreviewSize = map.getOutputSizes(android.graphics.SurfaceTexture.class)[0];

			if (mStateCallback == null) {
				mStateCallback = new MyStateCallback();
			}

			manager.openCamera(cameraId, mStateCallback, null);
		} catch (err) {
			console.error(err);
		}
	},
	onSurfaceTextureUpdated(surface) {
		// console.log('SurfaceTextureListener onSurfaceTextureUpdated');
	},
	onSurfaceTextureSizeChanged(surface, width, height) {
		console.log('SurfaceTextureListener onSurfaceTextureSizeChanged');
	},
	onSurfaceTextureDestroyed(surface) {
		console.log('SurfaceTextureListener onSurfaceTextureDestroyed');
		return false;
	}
});


/* Callbacks */
let MyStateCallback = android.hardware.camera2.CameraDevice.StateCallback.extend({
	onOpened(camera) {
		console.log('CameraDevice.StateCallback onOpened');
		mCameraDevice = camera;
		startPreview();
	},
	onError(camera, error) {
		console.error('CameraDevice.StateCallbackError: ' + error);
	},
	onDisconnected(camera) {
		console.log('CameraDevice.StateCallback onDisconnected');
	}
});

let MyPreviewStateCallback = android.hardware.camera2.CameraCaptureSession.StateCallback.extend({
	onConfigured(session) {
		console.log('CameraCaptureSession.StateCallback onConfigured');
		let appContext = application.android.foregroundActivity;
		mPreviewSession = session;

		mPreviewBuilder.set(android.hardware.camera2.CaptureRequest.CONTROL_MODE,
			java.lang.Integer.valueOf(android.hardware.camera2.CameraMetadata.CONTROL_MODE_AUTO));

		let backgroundThread = new android.os.HandlerThread('NNGCameraPreview');
		backgroundThread.start();
		let backgroundHandler = new android.os.Handler(backgroundThread.getLooper());

		try {
			mPreviewSession.setRepeatingRequest(mPreviewBuilder.build(), null, backgroundHandler);
		} catch (err) {
			console.error(err);
		}
	},
	onConfigureFailed(session) {
		console.log('CameraCaptureSession Configure failed');
	}
});




/* IMAGE CAPTURE */
function captureImage() {
	if (null == mCameraDevice) {
		return;
	}
	let appContext = application.android.foregroundActivity;
	let manager = appContext.getSystemService(android.content.Context.CAMERA_SERVICE);
	try {
		let characteristics = manager.getCameraCharacteristics(mCameraDevice.getId());

		let jpegSizes: any = null;
		if (characteristics != null) {
			jpegSizes = characteristics
				.get(android.hardware.camera2.CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP)
				.getOutputSizes(android.graphics.ImageFormat.JPEG);
		}
		let width = 640; // default
		let height = 480; // default
		if (jpegSizes != null && jpegSizes.length > 0) {
			width = jpegSizes[0].getWidth();
			height = jpegSizes[0].getHeight();
		}

		let reader = android.media.ImageReader.newInstance(width, height, android.graphics.ImageFormat.JPEG, 1);
		let outputSurfaces = new java.util.ArrayList();
		outputSurfaces.add(reader.getSurface());
		outputSurfaces.add(new android.view.Surface(mTextureView.getSurfaceTexture()));

		let captureBuilder = mCameraDevice.createCaptureRequest(android.hardware.camera2.CameraDevice.TEMPLATE_STILL_CAPTURE);
		captureBuilder.addTarget(reader.getSurface());
		captureBuilder.set(android.hardware.camera2.CaptureRequest.CONTROL_MODE,
			java.lang.Integer.valueOf(android.hardware.camera2.CameraMetadata.CONTROL_MODE_AUTO));

		// TODO: rotation
		let rotation = appContext.getWindowManager().getDefaultDisplay().getRotation();
		captureBuilder.set(android.hardware.camera2.CaptureRequest.JPEG_ORIENTATION, java.lang.Integer.valueOf(getRotation(rotation)));

		let file = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/DCIM", "pic.jpg");
		let readerListener = new android.media.ImageReader.OnImageAvailableListener({
			save(bytes) {
				console.log('Saving Bytes');
				let output = null;
				try {
					output = new java.io.FileOutputStream(file);
					output.write(bytes);
				} finally {
					if (output != null) {
						output.close();
					}
				}
			},
			onImageAvailable(reader) {
				let image = null;
				try {
					image = reader.acquireLatestImage();
					let buffer = image.getPlanes()[0].getBuffer();
					// const bytes = new java.lang.Byte[buffer.capacity()];
					let bytes = Array.create('byte', buffer.capacity());
					buffer.get(bytes);
					this.save(bytes);
				} catch (err) {
					console.error(err);
				} finally {
					if (image != null) {
						image.close();
					}
				}
			}
		});

		let thread = new android.os.HandlerThread('NNGCameraPreview');
		thread.start();
		let backgroundHandler = new android.os.Handler(thread.getLooper());
		reader.setOnImageAvailableListener(readerListener, backgroundHandler);

		let captureListener = android.hardware.camera2.CameraCaptureSession.CaptureCallback.extend({
			onCaptureCompleted(session, request, result) {
				startPreview();
				console.log('Capture Complete');
			}
		});

		let captureStateCallback = android.hardware.camera2.CameraCaptureSession.StateCallback.extend({
			onConfigured(session) {
				try {
					session.capture(captureBuilder.build(), new captureListener(), backgroundHandler);
				} catch (err) {
					console.error(err);
				}
			},
			onConfigureFailed(session) {

			}
		});

		mCameraDevice.createCaptureSession(outputSurfaces, new captureStateCallback(), backgroundHandler);
	} catch (err) {
		console.error(err);
	}
}

function getRotation(rotation) {
	if (rotation === android.view.Surface.ROTATION_0) {
		return 90;
	} else if (rotation === android.view.Surface.ROTATION_90) {
		return 0;
	} else if (rotation === android.view.Surface.ROTATION_180) {
		return 270;
	} else {
		return 180;
	}
}