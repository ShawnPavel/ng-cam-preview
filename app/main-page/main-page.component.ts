import { Component, OnInit, ViewChild } from "@angular/core";
import * as platform from 'platform';

import { AndroidCameraPreviewComponent } from '../android-camera-preview-component/android-camera-preview.component';
import { IosCameraPreviewComponent } from '../ios-camera-preview-component/ios-camera-preview.component';

@Component({
    selector: "ns-main-page",
    moduleId: module.id,
    templateUrl: "./main-page.component.html",
    styleUrls: ['main-page.css']
})
export class MainPageComponent implements OnInit {

    @ViewChild(AndroidCameraPreviewComponent) public androidCamera: AndroidCameraPreviewComponent;
    @ViewChild(IosCameraPreviewComponent) public iosCamera: IosCameraPreviewComponent;

    private ready: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.startRequest();
        console.log(this.ready);
    }

    private startRequest(): void {
        if (this.isIos()) {
            this.ready = true;
        } else {
            if (!AndroidCameraPreviewComponent.hasPermissions()) {
                AndroidCameraPreviewComponent.requestPermissions();
                setTimeout(() => { this.startRequest() }, 10000);
            } else {
                this.ready = true;
            }
        }
    }

    private capture(): void {
        console.log('capture');
        if (this.isIos()) {
            this.iosCamera.takePhoto();
        } else {
            this.androidCamera.takePhoto();
        }
    }

    private isIos(): boolean {
        return platform.device.os === platform.platformNames.ios;
    }
}
