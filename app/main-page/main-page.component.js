"use strict";
var core_1 = require("@angular/core");
var platform = require("platform");
var android_camera_preview_component_1 = require("../android-camera-preview-component/android-camera-preview.component");
var ios_camera_preview_component_1 = require("../ios-camera-preview-component/ios-camera-preview.component");
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
        if (this.isIos()) {
            this.ready = true;
        }
        else {
            if (!android_camera_preview_component_1.AndroidCameraPreviewComponent.hasPermissions()) {
                android_camera_preview_component_1.AndroidCameraPreviewComponent.requestPermissions();
                setTimeout(function () { _this.startRequest(); }, 10000);
            }
            else {
                this.ready = true;
            }
        }
    };
    MainPageComponent.prototype.capture = function () {
        console.log('capture');
        if (this.isIos()) {
            this.iosCamera.takePhoto();
        }
        else {
            this.androidCamera.takePhoto();
        }
    };
    MainPageComponent.prototype.isIos = function () {
        return platform.device.os === platform.platformNames.ios;
    };
    return MainPageComponent;
}());
__decorate([
    core_1.ViewChild(android_camera_preview_component_1.AndroidCameraPreviewComponent),
    __metadata("design:type", android_camera_preview_component_1.AndroidCameraPreviewComponent)
], MainPageComponent.prototype, "androidCamera", void 0);
__decorate([
    core_1.ViewChild(ios_camera_preview_component_1.IosCameraPreviewComponent),
    __metadata("design:type", ios_camera_preview_component_1.IosCameraPreviewComponent)
], MainPageComponent.prototype, "iosCamera", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE2RDtBQUM3RCxtQ0FBcUM7QUFFckMseUhBQXFIO0FBQ3JILDZHQUF5RztBQVF6RyxJQUFhLGlCQUFpQjtJQU8xQjtRQUZRLFVBQUssR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDO0lBRWpCLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLHdDQUFZLEdBQXBCO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsQ0FBQyxnRUFBNkIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELGdFQUE2QixDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ25ELFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQU8sR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlDQUFLLEdBQWI7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDN0QsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXJDNkM7SUFBekMsZ0JBQVMsQ0FBQyxnRUFBNkIsQ0FBQzs4QkFBdUIsZ0VBQTZCO3dEQUFDO0FBQ3hEO0lBQXJDLGdCQUFTLENBQUMsd0RBQXlCLENBQUM7OEJBQW1CLHdEQUF5QjtvREFBQztBQUh6RSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUMvQixDQUFDOztHQUNXLGlCQUFpQixDQXVDN0I7QUF2Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCB7IEFuZHJvaWRDYW1lcmFQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vYW5kcm9pZC1jYW1lcmEtcHJldmlldy1jb21wb25lbnQvYW5kcm9pZC1jYW1lcmEtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9zQ2FtZXJhUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2lvcy1jYW1lcmEtcHJldmlldy1jb21wb25lbnQvaW9zLWNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1haW4tcGFnZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLXBhZ2UuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnbWFpbi1wYWdlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW5QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoQW5kcm9pZENhbWVyYVByZXZpZXdDb21wb25lbnQpIHB1YmxpYyBhbmRyb2lkQ2FtZXJhOiBBbmRyb2lkQ2FtZXJhUHJldmlld0NvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKElvc0NhbWVyYVByZXZpZXdDb21wb25lbnQpIHB1YmxpYyBpb3NDYW1lcmE6IElvc0NhbWVyYVByZXZpZXdDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIHJlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnRSZXF1ZXN0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVhZHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0lvcygpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghQW5kcm9pZENhbWVyYVByZXZpZXdDb21wb25lbnQuaGFzUGVybWlzc2lvbnMoKSkge1xuICAgICAgICAgICAgICAgIEFuZHJvaWRDYW1lcmFQcmV2aWV3Q29tcG9uZW50LnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnN0YXJ0UmVxdWVzdCgpIH0sIDEwMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhcHR1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXB0dXJlJyk7XG4gICAgICAgIGlmICh0aGlzLmlzSW9zKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW9zQ2FtZXJhLnRha2VQaG90bygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkQ2FtZXJhLnRha2VQaG90bygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0lvcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtLmRldmljZS5vcyA9PT0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lcy5pb3M7XG4gICAgfVxufVxuIl19