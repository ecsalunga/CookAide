"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var core_2 = require("./core");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent(core, DA, DL, fonticon) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        this.fonticon = fonticon;
    }
    AppComponent.prototype.Online = function () {
        this.DL.LoadComponent("recipe-list");
    };
    AppComponent.prototype.LoadTest = function () {
        this.DL.LoadComponent("test");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.DA.Load();
        this.core.viewChild = this.viewChild;
        this.DL.TITLE = "Home";
    };
    __decorate([
        core_1.ViewChild('viewChild', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AppComponent.prototype, "viewChild", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ['app.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsdUVBQStEO0FBRS9ELCtCQUE4QjtBQUM5QiwrQkFBK0M7QUFRL0M7SUFJSSxzQkFBbUIsSUFBVSxFQUFTLEVBQWMsRUFBUyxFQUFhLEVBQVUsUUFBNEI7UUFBN0YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBSSxDQUFDO0lBRTlHLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFoQkQ7UUFEQyxnQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSx1QkFBZ0IsRUFBQyxDQUFDO2tDQUN0Qyx1QkFBZ0I7bURBQUM7SUFGbkIsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQU0yQixXQUFJLEVBQWEsaUJBQVUsRUFBYSxnQkFBUyxFQUFvQiw4Q0FBa0I7T0FKdkcsWUFBWSxDQW1CeEI7SUFBRCxtQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcyB9IGZyb20gXCIuL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCd2aWV3Q2hpbGQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gICAgdmlld0NoaWxkOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHB1YmxpYyBEQTogRGF0YUFjY2VzcywgcHVibGljIERMOiBEYXRhTGF5ZXIsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgT25saW5lKCkge1xuICAgICAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9hZFRlc3QoKSB7XG4gICAgICAgIHRoaXMuREwuTG9hZENvbXBvbmVudChcInRlc3RcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuREEuTG9hZCgpO1xuICAgICAgICB0aGlzLmNvcmUudmlld0NoaWxkID0gdGhpcy52aWV3Q2hpbGQ7XG4gICAgICAgIHRoaXMuREwuVElUTEUgPSBcIkhvbWVcIjtcbiAgICB9XG59Il19