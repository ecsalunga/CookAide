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
    AppComponent.prototype.Local = function () {
        this.DL.LoadComponent("recipe-local-list");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFFL0UsK0JBQThCO0FBQzlCLCtCQUErQztBQVEvQztJQUlJLHNCQUFtQixJQUFVLEVBQVMsRUFBYyxFQUFTLEVBQWE7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQztJQUV4RSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQXBCRDtRQURDLGdCQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7a0NBQ3RDLHVCQUFnQjttREFBQztJQUZuQixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTTJCLFdBQUksRUFBYSxpQkFBVSxFQUFhLGdCQUFTO09BSmpFLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUxheWVyLCBEYXRhQWNjZXNzIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ3ZpZXdDaGlsZCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgICB2aWV3Q2hpbGQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHVibGljIERBOiBEYXRhQWNjZXNzLCBwdWJsaWMgREw6IERhdGFMYXllcikgeyB9XG5cbiAgICBwdWJsaWMgT25saW5lKCkge1xuICAgICAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9jYWwoKSB7XG4gICAgICAgIHRoaXMuREwuTG9hZENvbXBvbmVudChcInJlY2lwZS1sb2NhbC1saXN0XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2FkVGVzdCgpIHtcbiAgICAgICAgdGhpcy5ETC5Mb2FkQ29tcG9uZW50KFwidGVzdFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5EQS5Mb2FkKCk7XG4gICAgICAgIHRoaXMuY29yZS52aWV3Q2hpbGQgPSB0aGlzLnZpZXdDaGlsZDtcbiAgICAgICAgdGhpcy5ETC5USVRMRSA9IFwiSG9tZVwiO1xuICAgIH1cbn0iXX0=