import { Component, OnInit, ViewChild } from "@angular/core";
import * as platform from 'platform';

import { CameraPreviewComponent } from '../camera-preview-component/camera-preview.component';

@Component({
    selector: "ns-main-page",
    moduleId: module.id,
    templateUrl: "./main-page.component.html",
    styleUrls: ['main-page.css']
})
export class MainPageComponent implements OnInit {
    @ViewChild(CameraPreviewComponent) public cameraPreview: CameraPreviewComponent;

    private ready: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.startRequest();
        console.log(this.ready);
    }

    private startRequest(): void {
        if (platform.isIOS) {
            this.ready = true;
        } else {
            if (!CameraPreviewComponent.hasPermissions()) {
                CameraPreviewComponent.requestPermissions();
                setTimeout(() => { this.startRequest() }, 10000);
            } else {
                this.ready = true;
            }
        }
    }

    private capture(): void {
        console.log('capture');
        this.cameraPreview.takePhoto();
    }

    private isIos(): boolean {
        return platform.device.os === platform.platformNames.ios;
    }
}
