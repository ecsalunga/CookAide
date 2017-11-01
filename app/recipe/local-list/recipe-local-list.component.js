"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeLocalListComponent = (function () {
    function RecipeLocalListComponent(core, DL) {
        this.core = core;
        this.DL = DL;
    }
    RecipeLocalListComponent.prototype.onItemTap = function (args) {
        this.DL.Recipe = Object.assign({}, this.DL.RecipesLocal[args.index]);
        this.LoadDetail();
    };
    RecipeLocalListComponent.prototype.Add = function () {
        this.DL.Recipe = null;
        this.LoadDetail();
    };
    RecipeLocalListComponent.prototype.LoadDetail = function () {
        this.DL.LoadComponent("recipe-local-detail");
    };
    RecipeLocalListComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Local Recipe List";
    };
    RecipeLocalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-local-list',
            templateUrl: './recipe-local-list.component.html',
            styleUrls: ['./recipe-local-list.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataLayer])
    ], RecipeLocalListComponent);
    return RecipeLocalListComponent;
}());
exports.RecipeLocalListComponent = RecipeLocalListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxvY2FsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjaXBlLWxvY2FsLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFrQztBQUNsQyxtQ0FBbUQ7QUFRbkQ7SUFFRSxrQ0FBb0IsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBRWhELDRDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxzQ0FBRyxHQUFWO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sNkNBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7SUFDdEMsQ0FBQztJQXBCUSx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDbEQsQ0FBQzt5Q0FHMEIsV0FBSSxFQUFjLGdCQUFTO09BRjFDLHdCQUF3QixDQXFCbEM7SUFBRCwrQkFBQztDQUFBLEFBckJILElBcUJHO0FBckJVLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgUmVjaXBlSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY2lwZS1sb2NhbC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1sb2NhbC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVjaXBlLWxvY2FsLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVMb2NhbExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZTogQ29yZSwgcHJpdmF0ZSBETDogRGF0YUxheWVyKSB7fVxuICBcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5ETC5SZWNpcGVzTG9jYWxbYXJncy5pbmRleF0pO1xuICAgICAgdGhpcy5Mb2FkRGV0YWlsKCk7XG4gICAgfVxuICBcbiAgICBwdWJsaWMgQWRkKCkge1xuICAgICAgdGhpcy5ETC5SZWNpcGUgPSBudWxsO1xuICAgICAgdGhpcy5Mb2FkRGV0YWlsKCk7XG4gICAgfVxuICBcbiAgICBwcml2YXRlIExvYWREZXRhaWwoKSB7XG4gICAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbG9jYWwtZGV0YWlsXCIpO1xuICAgIH1cbiAgXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgdGhpcy5ETC5USVRMRSA9IFwiTG9jYWwgUmVjaXBlIExpc3RcIjtcbiAgICB9XG4gIH0iXX0=