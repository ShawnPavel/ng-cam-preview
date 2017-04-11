"use strict";
var core_1 = require("@angular/core");
var platform = require("platform");
var camera_preview_component_1 = require("../camera-preview-component/camera-preview.component");
var MainPageComponent = (function () {
    function MainPageComponent() {
        this.ready = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.startRequest();
        console.log(this.ready);
    };
    MainPageComponent.prototype.startRequest = function () {
        var _this = this;
        if (platform.isIOS) {
            this.ready = true;
        }
        else {
            if (!camera_preview_component_1.CameraPreviewComponent.hasPermissions()) {
                camera_preview_component_1.CameraPreviewComponent.requestPermissions();
                setTimeout(function () { _this.startRequest(); }, 10000);
            }
            else {
                this.ready = true;
            }
        }
    };
    MainPageComponent.prototype.capture = function () {
        console.log('capture');
        this.cameraPreview.takePhoto();
    };
    MainPageComponent.prototype.isIos = function () {
        return platform.device.os === platform.platformNames.ios;
    };
    return MainPageComponent;
}());
__decorate([
    core_1.ViewChild(camera_preview_component_1.CameraPreviewComponent),
    __metadata("design:type", camera_preview_component_1.CameraPreviewComponent)
], MainPageComponent.prototype, "cameraPreview", void 0);
MainPageComponent = __decorate([
    core_1.Component({
        selector: "ns-main-page",
        moduleId: module.id,
        templateUrl: "./main-page.component.html",
        styleUrls: ['main-page.css']
    }),
    __metadata("design:paramtypes", [])
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE2RDtBQUM3RCxtQ0FBcUM7QUFFckMsaUdBQThGO0FBUTlGLElBQWEsaUJBQWlCO0lBSzFCO1FBRlEsVUFBSyxHQUFZLEtBQUssQ0FBQztJQUVmLENBQUM7SUFFakIsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sd0NBQVksR0FBcEI7UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsaURBQXNCLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxpREFBc0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1QyxVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1DQUFPLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLGlDQUFLLEdBQWI7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDN0QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWhDc0M7SUFBbEMsZ0JBQVMsQ0FBQyxpREFBc0IsQ0FBQzs4QkFBdUIsaURBQXNCO3dEQUFDO0FBRHZFLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQy9CLENBQUM7O0dBQ1csaUJBQWlCLENBaUM3QjtBQWpDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcblxuaW1wb3J0IHsgQ2FtZXJhUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2NhbWVyYS1wcmV2aWV3LWNvbXBvbmVudC9jYW1lcmEtcHJldmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1tYWluLXBhZ2VcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi1wYWdlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ21haW4tcGFnZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChDYW1lcmFQcmV2aWV3Q29tcG9uZW50KSBwdWJsaWMgY2FtZXJhUHJldmlldzogQ2FtZXJhUHJldmlld0NvbXBvbmVudDtcblxuICAgIHByaXZhdGUgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydFJlcXVlc3QoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWFkeSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFJlcXVlc3QoKTogdm9pZCB7XG4gICAgICAgIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIUNhbWVyYVByZXZpZXdDb21wb25lbnQuaGFzUGVybWlzc2lvbnMoKSkge1xuICAgICAgICAgICAgICAgIENhbWVyYVByZXZpZXdDb21wb25lbnQucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc3RhcnRSZXF1ZXN0KCkgfSwgMTAwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FwdHVyZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhcHR1cmUnKTtcbiAgICAgICAgdGhpcy5jYW1lcmFQcmV2aWV3LnRha2VQaG90bygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNJb3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwbGF0Zm9ybS5kZXZpY2Uub3MgPT09IHBsYXRmb3JtLnBsYXRmb3JtTmFtZXMuaW9zO1xuICAgIH1cbn1cbiJdfQ==