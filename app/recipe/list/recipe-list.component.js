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
        this.core.LoadComponent("recipe-detail");
    };
    RecipeListComponent.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    RecipeListComponent.prototype.Add = function () {
        this.DL.Recipe = null;
        this.LoadComponent("recipe-detail");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFrQztBQUNsQyxtQ0FBbUQ7QUFRbkQ7SUFFRSw2QkFBb0IsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRWxELHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxpQ0FBRyxHQUFWO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQXBCVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBRzBCLFdBQUksRUFBYyxnQkFBUztPQUYxQyxtQkFBbUIsQ0FxQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2lwZS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlOiBDb3JlLCBwcml2YXRlIERMOiBEYXRhTGF5ZXIpIHt9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgdGhpcy5ETC5SZWNpcGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLkRMLlJlY2lwZXNbYXJncy5pbmRleF0pO1xuICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWRldGFpbFwiKTtcbiAgfVxuXG4gIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgQWRkKCkge1xuICAgIHRoaXMuREwuUmVjaXBlID0gbnVsbDtcbiAgICB0aGlzLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtZGV0YWlsXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBMaXN0XCI7XG4gIH1cbn1cbiJdfQ==