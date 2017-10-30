"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("./core");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
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
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFFL0UsK0JBQThCO0FBQzlCLCtCQUErQztBQVEvQztJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBaEJEO1FBREMsZ0JBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQztrQ0FDdEMsdUJBQWdCO21EQUFDO0lBRm5CLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FNMkIsV0FBSSxFQUFhLGlCQUFVLEVBQWEsZ0JBQVM7T0FKakUsWUFBWSxDQW1CeEI7SUFBRCxtQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgndmlld0NoaWxkJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICAgIHZpZXdDaGlsZDogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3JlOiBDb3JlLCBwdWJsaWMgREE6IERhdGFBY2Nlc3MsIHB1YmxpYyBETDogRGF0YUxheWVyKSB7IH1cblxuICAgIHB1YmxpYyBPbmxpbmUoKSB7XG4gICAgICAgIHRoaXMuREwuTG9hZENvbXBvbmVudChcInJlY2lwZS1saXN0XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2FkVGVzdCgpIHtcbiAgICAgICAgdGhpcy5ETC5Mb2FkQ29tcG9uZW50KFwidGVzdFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5EQS5Mb2FkKCk7XG4gICAgICAgIHRoaXMuY29yZS52aWV3Q2hpbGQgPSB0aGlzLnZpZXdDaGlsZDtcbiAgICAgICAgdGhpcy5ETC5USVRMRSA9IFwiSG9tZVwiO1xuICAgIH1cbn0iXX0=