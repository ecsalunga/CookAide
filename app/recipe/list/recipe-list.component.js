"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeListComponent = (function () {
    function RecipeListComponent(core, DL) {
        this.core = core;
        this.DL = DL;
    }
    RecipeListComponent.prototype.onItemTap = function (args) {
        this.DL.Recipe = Object.assign({}, this.DL.Recipes[args.index]);
        this.LoadDetail();
    };
    RecipeListComponent.prototype.Add = function () {
        this.DL.Recipe = null;
        this.LoadDetail();
    };
    RecipeListComponent.prototype.LoadDetail = function () {
        this.DL.LoadComponent("recipe-detail");
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Recipe List";
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataLayer])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFrQztBQUNsQyxtQ0FBbUQ7QUFRbkQ7SUFFRSw2QkFBb0IsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRWxELHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxpQ0FBRyxHQUFWO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sd0NBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBcEJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzt5Q0FHMEIsV0FBSSxFQUFjLGdCQUFTO09BRjFDLG1CQUFtQixDQXFCL0I7SUFBRCwwQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgUmVjaXBlSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY2lwZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmU6IENvcmUsIHByaXZhdGUgREw6IERhdGFMYXllcikge31cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICB0aGlzLkRMLlJlY2lwZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuREwuUmVjaXBlc1thcmdzLmluZGV4XSk7XG4gICAgdGhpcy5Mb2FkRGV0YWlsKCk7XG4gIH1cblxuICBwdWJsaWMgQWRkKCkge1xuICAgIHRoaXMuREwuUmVjaXBlID0gbnVsbDtcbiAgICB0aGlzLkxvYWREZXRhaWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgTG9hZERldGFpbCgpIHtcbiAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtZGV0YWlsXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBMaXN0XCI7XG4gIH1cbn1cbiJdfQ==