"use strict";
var core_1 = require("@angular/core");
var output;
var IosCameraPreviewComponent = (function () {
    function IosCameraPreviewComponent() {
        console.log('constructor');
    }
    IosCameraPreviewComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    return IosCameraPreviewComponent;
}());
IosCameraPreviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ios-camera-preview',
        templateUrl: 'ios-camera-preview.component.html',
        styleUrls: ['ios-camera-preview.css']
    }),
    __metadata("design:paramtypes", [])
], IosCameraPreviewComponent);
exports.IosCameraPreviewComponent = IosCameraPreviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLWNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlvcy1jYW1lcmEtcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQU1sRCxJQUFJLE1BQVcsQ0FBQztBQVFoQixJQUFhLHlCQUF5QjtJQUVyQztRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFxQ0YsZ0NBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLHlCQUF5QjtJQU5yQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsV0FBVyxFQUFFLG1DQUFtQztRQUNoRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUNyQyxDQUFDOztHQUNXLHlCQUF5QixDQTZDckM7QUE3Q1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgcGFnZSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIHV0aWxzTW9kdWxlIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5sZXQgb3V0cHV0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2lvcy1jYW1lcmEtcHJldmlldycsXG5cdHRlbXBsYXRlVXJsOiAnaW9zLWNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2lvcy1jYW1lcmEtcHJldmlldy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJb3NDYW1lcmFQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdvbiBpbml0Jyk7XG5cdH1cblxuXHQvLyBwdWJsaWMgdGFrZVNob3QoKTogdm9pZCB7XG5cdC8vIFx0dmFyIHZpZGVvQ29ubmVjdGlvbiA9IG91dHB1dC5jb25uZWN0aW9uc1swXTtcbiAgICAvLyAgICAgb3V0cHV0LmNhcHR1cmVTdGlsbEltYWdlQXN5bmNocm9ub3VzbHlGcm9tQ29ubmVjdGlvbkNvbXBsZXRpb25IYW5kbGVyKHZpZGVvQ29ubmVjdGlvbiwgZnVuY3Rpb24gKGJ1ZmZlciwgZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIHZhciBpbWFnZURhdGEgPSBBVkNhcHR1cmVTdGlsbEltYWdlT3V0cHV0LmpwZWdTdGlsbEltYWdlTlNEYXRhUmVwcmVzZW50YXRpb24oYnVmZmVyKTtcbiAgICAvLyAgICAgICAgIHZhciBpbWFnZSA9IFVJSW1hZ2UuaW1hZ2VXaXRoRGF0YShpbWFnZURhdGEpO1xuICAgIC8vICAgICAgICAgVUlJbWFnZVdyaXRlVG9TYXZlZFBob3Rvc0FsYnVtKGltYWdlLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICAvLyAgICAgICAgIEF1ZGlvU2VydmljZXNQbGF5U3lzdGVtU291bmQoMTQ0KTtcbiAgICAvLyAgICAgfSk7XG5cdC8vIH1cblxuXHQvLyBwcml2YXRlIG9uQ3JlYXRpbmdWaWV3KGFyZ3MpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygnb24gY3JlYXRpbmcgdmlldycpO1xuICAgIC8vICAgICB2YXIgc2Vzc2lvbiA9IG5ldyBBVkNhcHR1cmVTZXNzaW9uKCk7XG4gICAgLy8gICAgIHNlc3Npb24uc2Vzc2lvblByZXNldCA9IEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQxMjgweDcyMDtcblxuICAgIC8vICAgICAvLyBBZGRpbmcgY2FwdHVyZSBkZXZpY2VcbiAgICAvLyAgICAgdmFyIGRldmljZSA9IEFWQ2FwdHVyZURldmljZS5kZWZhdWx0RGV2aWNlV2l0aE1lZGlhVHlwZShBVk1lZGlhVHlwZVZpZGVvKTtcbiAgICAvLyAgICAgdmFyIGlucHV0ID0gQVZDYXB0dXJlRGV2aWNlSW5wdXQuZGV2aWNlSW5wdXRXaXRoRGV2aWNlRXJyb3IoZGV2aWNlKTtcbiAgICAvLyAgICAgaWYgKCFpbnB1dCkge1xuICAgIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgdHJ5aW5nIHRvIG9wZW4gY2FtZXJhLlwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXNzaW9uLmFkZElucHV0KGlucHV0KTtcblxuICAgIC8vICAgICBvdXRwdXQgPSBuZXcgQVZDYXB0dXJlU3RpbGxJbWFnZU91dHB1dCgpO1xuICAgIC8vICAgICBzZXNzaW9uLmFkZE91dHB1dChvdXRwdXQpO1xuXG4gICAgLy8gICAgIHNlc3Npb24uc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgdmlkZW9MYXllciA9IEFWQ2FwdHVyZVZpZGVvUHJldmlld0xheWVyLmxheWVyV2l0aFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgdmlldyA9IFVJVmlldy5hbGxvYygpLmluaXRXaXRoRnJhbWUoeyBvcmlnaW46IHsgeDogMCwgeTogMCB9LCBzaXplOiB7IHdpZHRoOiA0MDAsIGhlaWdodDogNjAwIH0gfSk7XG4gICAgLy8gICAgIHZpZGVvTGF5ZXIuZnJhbWUgPSB2aWV3LmJvdW5kcztcbiAgICAvLyAgICAgdmlldy5sYXllci5hZGRTdWJsYXllcih2aWRlb0xheWVyKTtcbiAgICAvLyAgICAgYXJncy52aWV3ID0gdmlldztcblx0Ly8gfVxufSJdfQ==