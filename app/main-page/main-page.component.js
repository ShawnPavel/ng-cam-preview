"use strict";
var core_1 = require("@angular/core");
var android_camera_preview_component_1 = require("../android-camera-preview-component/android-camera-preview.component");
var MainPageComponent = (function () {
    function MainPageComponent() {
        this.ready = false;
        this.checked = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.startRequest();
        console.log(this.ready);
    };
    MainPageComponent.prototype.startRequest = function () {
        var _this = this;
        if (!android_camera_preview_component_1.AndroidCameraPreviewComponent.hasPermissions() && (!this.checked || android_camera_preview_component_1.AndroidCameraPreviewComponent.hasDeniedPermissions())) {
            android_camera_preview_component_1.AndroidCameraPreviewComponent.requestPermissions();
            this.checked = true;
            setTimeout(function () { _this.startRequest(); }, 10000);
        }
        else {
            this.ready = true;
        }
    };
    MainPageComponent.prototype.capture = function () {
        console.log('capture');
        this.androidCamera.takePhoto();
    };
    return MainPageComponent;
}());
__decorate([
    core_1.ViewChild(android_camera_preview_component_1.AndroidCameraPreviewComponent),
    __metadata("design:type", android_camera_preview_component_1.AndroidCameraPreviewComponent)
], MainPageComponent.prototype, "androidCamera", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE2RDtBQUU3RCx5SEFBcUg7QUFRckgsSUFBYSxpQkFBaUI7SUFPMUI7UUFIUSxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUVqQixvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyx3Q0FBWSxHQUFwQjtRQUFBLGlCQVFDO1FBUEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxnRUFBNkIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxnRUFBNkIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdILGdFQUE2QixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsVUFBVSxDQUFDLGNBQVEsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQU8sR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBMUI2QztJQUF6QyxnQkFBUyxDQUFDLGdFQUE2QixDQUFDOzhCQUF1QixnRUFBNkI7d0RBQUM7QUFGckYsaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7S0FDL0IsQ0FBQzs7R0FDVyxpQkFBaUIsQ0E0QjdCO0FBNUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBbmRyb2lkQ2FtZXJhUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2FuZHJvaWQtY2FtZXJhLXByZXZpZXctY29tcG9uZW50L2FuZHJvaWQtY2FtZXJhLXByZXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtbWFpbi1wYWdlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21haW4tcGFnZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydtYWluLXBhZ2UuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpblBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChBbmRyb2lkQ2FtZXJhUHJldmlld0NvbXBvbmVudCkgcHVibGljIGFuZHJvaWRDYW1lcmE6IEFuZHJvaWRDYW1lcmFQcmV2aWV3Q29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJ0UmVxdWVzdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlYWR5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0UmVxdWVzdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFBbmRyb2lkQ2FtZXJhUHJldmlld0NvbXBvbmVudC5oYXNQZXJtaXNzaW9ucygpICYmICghdGhpcy5jaGVja2VkIHx8IEFuZHJvaWRDYW1lcmFQcmV2aWV3Q29tcG9uZW50Lmhhc0RlbmllZFBlcm1pc3Npb25zKCkpKSB7XG4gICAgICAgICAgICBBbmRyb2lkQ2FtZXJhUHJldmlld0NvbXBvbmVudC5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zdGFydFJlcXVlc3QoKSB9LCAxMDAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FwdHVyZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhcHR1cmUnKTtcbiAgICAgICAgdGhpcy5hbmRyb2lkQ2FtZXJhLnRha2VQaG90bygpO1xuICAgIH1cbn1cbiJdfQ==