import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { MainPageComponent } from "./main-page/main-page.component";
import { AndroidCameraPreviewComponent } from './android-camera-preview-component/android-camera-preview.component';
import { IosCameraPreviewComponent } from './ios-camera-preview-component/ios-camera-preview.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MainPageComponent,
        AndroidCameraPreviewComponent,
        IosCameraPreviewComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
