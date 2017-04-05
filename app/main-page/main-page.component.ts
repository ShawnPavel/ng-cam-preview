import { Component, OnInit, ViewChild } from "@angular/core";

import { AndroidCameraPreviewComponent } from '../android-camera-preview-component/android-camera-preview.component';

@Component({
    selector: "ns-main-page",
    moduleId: module.id,
    templateUrl: "./main-page.component.html",
    styleUrls: ['main-page.css']
})
export class MainPageComponent implements OnInit {

    @ViewChild(AndroidCameraPreviewComponent) public androidCamera: AndroidCameraPreviewComponent;

    private ready: boolean = false;
    private checked: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.startRequest();
        console.log(this.ready);
    }

    private startRequest(): void {
        if (!AndroidCameraPreviewComponent.hasPermissions() && (!this.checked || AndroidCameraPreviewComponent.hasDeniedPermissions())) {
            AndroidCameraPreviewComponent.requestPermissions();
            this.checked = true;
            setTimeout(() => { this.startRequest() }, 10000);
        } else {
            this.ready = true;
        }
    }

    private capture(): void {
        console.log('capture');
        this.androidCamera.takePhoto();
    }
}
