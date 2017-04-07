import { Component, OnInit } from '@angular/core';

import * as application from 'application';
import * as platform from 'platform';
import * as page from 'ui/page';

// for iOS output
// var output;
declare var AVCaptureStillImageOutput;
declare var UIImage;
declare var UIImageWriteToSavedPhotosAlbum;
declare var AudioServicesPlaySystemSound;
declare var AVCaptureDevice;
declare var AVCaptureDeviceInput;
declare var AVCaptureSession;
declare var AVCaptureSessionPreset1280x720;
declare var AVCaptureSessionPresetPhoto;
declare var AVCaptureStillImageOutput;
declare var AVCaptureVideoPreviewLayer;
declare var UIView;
declare var AVMediaTypeVideo;
declare var UIViewContentMode;
declare var AVLayerVideoGravityResizeAspect;
declare var UIColor;
declare var CGRectMake;
declare var UIViewAutoresizingFlexibleWidth;
declare var UIViewAutoresizingFlexibleHeight;
declare var CGRectZero;

@Component({
	moduleId: module.id,
	selector: 'ios-camera-preview',
	templateUrl: 'ios-camera-preview.component.html',
	styleUrls: ['ios-camera-preview.css']
})
export class IosCameraPreviewComponent implements OnInit {
	private previewView: any;
	private previewLayer: any;
	private captureDevice: any;
	private deviceInput: any;
	private deviceOutput: any;

	private session = new AVCaptureSession();

	constructor() {
	}

	ngOnInit(): void {

	}

	public takePhoto(): void {
        var videoConnection = this.deviceOutput.connections[0];
        this.deviceOutput.captureStillImageAsynchronouslyFromConnectionCompletionHandler(videoConnection, function (buffer, error) {
            var imageData = AVCaptureStillImageOutput.jpegStillImageNSDataRepresentation(buffer);
            var image = UIImage.imageWithData(imageData);
            UIImageWriteToSavedPhotosAlbum(image, null, null, null);
            AudioServicesPlaySystemSound(144);
        });
	}

	// Init
	private onCreatingView(args): void {
		this.setupAvCapture();
		this.beginSession();


		this.previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this.session);

		this.previewView = new UIView(CGRectMake(0, 0, platform.screen.mainScreen.widthDIPs, platform.screen.mainScreen.heightDIPs))
		this.previewLayer.frame = this.previewView.bounds;
		this.previewView.layer.addSublayer(this.previewLayer);

        args.view = this.previewView;
	}

	private setupAvCapture(): void {
		this.captureDevice = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
		this.deviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.captureDevice, null);

		this.deviceOutput = new AVCaptureStillImageOutput();
	}

	private beginSession(): void {
		this.session = new AVCaptureSession();
		this.session.sessionPreset = AVCaptureSessionPreset1280x720;

		this.session.addInput(this.deviceInput);
		this.session.addOutput(this.deviceOutput);

		this.session.startRunning();
	}
}