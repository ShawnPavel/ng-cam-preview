import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as platform from 'platform';
import { AbsoluteLayout } from 'ui/layouts/absolute-layout'
import { Size } from 'ui/core/view';

import { CameraPreviewComponent } from '../camera-preview-component/camera-preview.component';

import * as accelerometer from 'nativescript-accelerometer';

@Component({
    selector: "ns-main-page",
    moduleId: module.id,
    templateUrl: "./main-page.component.html",
    styleUrls: ['main-page.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
    @ViewChild(CameraPreviewComponent) public cameraPreview: CameraPreviewComponent;
    @ViewChild('absLayout') public absLayout: ElementRef
    @ViewChild('bubble') public bubbleImage: ElementRef

    private ready: boolean = false;

    private x: number = 0;
    private y: number = 0;
    private z: number = 0;

    constructor() { }

    ngOnInit(): void {
        this.startRequest();
        console.log(this.ready);

        accelerometer.startAccelerometerUpdates((data) => {
            // console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
            this.x = this.round(data.x, 4);
            this.y = this.round(data.y, 4);
            this.z = this.round(data.z, 4);

            this.updateCircle();
        })
    }

    ngOnDestroy() {
        accelerometer.stopAccelerometerUpdates();
    }

    private dotLeft = 0;
    private dotTop = 0;
    private updateCircle(): void {
        if (this.absLayout) {
            let layout: AbsoluteLayout = this.absLayout.nativeElement;
            let bubble = this.bubbleImage.nativeElement;

            let size = layout.getActualSize();
            let bubbleSize = bubble.getActualSize();

            this.dotLeft = (size.width / 2) + ((size.width / 2) * (+this.x * -1)) - (bubble.width / 2);
            this.dotTop = (size.height / 2) + ((size.height / 2) * +this.y) - (bubble.height / 2);
        } else {

        }
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

    private isValidTilt(val): boolean {
        return Math.abs(val) <= .05;
    }

    private isValidOrientation(): boolean {
        return this.isValidTilt(this.x) && this.isValidTilt(this.y) && +this.z <= -.5;
    }

    private round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}
