"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeLocalDetailComponent = (function () {
    function RecipeLocalDetailComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        this.isEditing = false;
        if (this.DL.Recipe == null) {
            this.DL.Recipe = new data_1.RecipeInfo(DL.NO_IMAGE_URL);
            this.DL.Recipe.id = this.DL.GetKey().toString();
        }
        if (!this.DL.Recipe.ImageURL)
            this.DL.Recipe.ImageURL = DL.NO_IMAGE_URL;
        this.imageURL = this.DL.Recipe.ImageURL;
    }
    RecipeLocalDetailComponent.prototype.StartEdit = function (args) {
        this.editingTextView = args.object;
        this.isEditing = true;
    };
    RecipeLocalDetailComponent.prototype.StopEdit = function () {
        this.isEditing = false;
        this.editingTextView.dismissSoftInput();
    };
    RecipeLocalDetailComponent.prototype.SelectImage = function () {
        this.DL.SelectImage(this.DL.Recipe.Name);
    };
    RecipeLocalDetailComponent.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    RecipeLocalDetailComponent.prototype.Save = function () {
        this.DA.RecipeLocalSave();
        this.loadList();
    };
    RecipeLocalDetailComponent.prototype.Cancel = function () {
        this.loadList();
    };
    RecipeLocalDetailComponent.prototype.loadList = function () {
        this.DL.LoadComponent("recipe-local-list");
    };
    RecipeLocalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DL.TITLE = "Local Recipe Details";
        this.DL.ImageSelected.subscribe(function (url) {
            if (_this.DL.TITLE == "Local Recipe Details") {
                _this.imageURL = url;
                _this.DL.Recipe.ImageURL = url;
            }
        });
    };
    RecipeLocalDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-local-detail',
            templateUrl: './recipe-local-detail.component.html',
            styleUrls: ['./recipe-local-detail.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], RecipeLocalDetailComponent);
    return RecipeLocalDetailComponent;
}());
exports.RecipeLocalDetailComponent = RecipeLocalDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWxvY2FsLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtbG9jYWwtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBS0Usb0NBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFINUUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUl6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBRTVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFTSw4Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sNkNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sZ0RBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sa0RBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHlDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sMkNBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sNkNBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUV2QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLHNCQUFzQixDQUFDLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDaEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXpEVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7U0FDcEQsQ0FBQzt5Q0FNeUIsV0FBSSxFQUFjLGlCQUFVLEVBQWMsZ0JBQVM7T0FMakUsMEJBQTBCLENBMER0QztJQUFELGlDQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtbG9jYWwtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1sb2NhbC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtbG9jYWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlTG9jYWxEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbWFnZVVSTDogc3RyaW5nO1xuICBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZWRpdGluZ1RleHRWaWV3OiBUZXh0VmlldztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHJpdmF0ZSBEQTogRGF0YUFjY2VzcywgcHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XG4gICAgaWYodGhpcy5ETC5SZWNpcGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5ETC5SZWNpcGUgPSBuZXcgUmVjaXBlSW5mbyhETC5OT19JTUFHRV9VUkwpO1xuICAgICAgdGhpcy5ETC5SZWNpcGUuaWQgPSB0aGlzLkRMLkdldEtleSgpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuREwuUmVjaXBlLkltYWdlVVJMKVxuICAgICAgdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwgPSBETC5OT19JTUFHRV9VUkw7XG5cbiAgICB0aGlzLmltYWdlVVJMID0gdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkw7XG4gIH1cblxuICBwdWJsaWMgU3RhcnRFZGl0KGFyZ3MpIHtcbiAgICB0aGlzLmVkaXRpbmdUZXh0VmlldyA9IDxUZXh0Vmlldz5hcmdzLm9iamVjdDtcbiAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgU3RvcEVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRpbmdUZXh0Vmlldy5kaXNtaXNzU29mdElucHV0KCk7XG4gIH1cblxuICBwdWJsaWMgU2VsZWN0SW1hZ2UoKSB7XG4gICAgdGhpcy5ETC5TZWxlY3RJbWFnZSh0aGlzLkRMLlJlY2lwZS5OYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgU2F2ZSgpIHtcbiAgICB0aGlzLkRBLlJlY2lwZUxvY2FsU2F2ZSgpO1xuICAgIHRoaXMubG9hZExpc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBDYW5jZWwoKSB7XG4gICAgdGhpcy5sb2FkTGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTGlzdCgpIHtcbiAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbG9jYWwtbGlzdFwiKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIkxvY2FsIFJlY2lwZSBEZXRhaWxzXCI7XG5cbiAgICB0aGlzLkRMLkltYWdlU2VsZWN0ZWQuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICBpZih0aGlzLkRMLlRJVExFID09IFwiTG9jYWwgUmVjaXBlIERldGFpbHNcIikge1xuICAgICAgICB0aGlzLmltYWdlVVJMID0gdXJsO1xuICAgICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IHVybDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=