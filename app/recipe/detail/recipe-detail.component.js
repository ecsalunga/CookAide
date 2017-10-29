"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var data_1 = require("../../data");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        this.isEditing = false;
        if (this.DL.Recipe == null) {
            this.DL.Recipe = new data_1.RecipeInfo(DL.NO_IMAGE_URL);
        }
        if (!this.DL.Recipe.ImageURL)
            this.DL.Recipe.ImageURL = DL.NO_IMAGE_URL;
        this.imageURL = this.DL.Recipe.ImageURL;
    }
    RecipeDetailComponent.prototype.StartEdit = function (args) {
        this.editingTextView = args.object;
        this.isEditing = true;
    };
    RecipeDetailComponent.prototype.StopEdit = function () {
        this.isEditing = false;
        this.editingTextView.dismissSoftInput();
    };
    RecipeDetailComponent.prototype.SelectImage = function () {
        this.DL.SelectImage(this.DL.Recipe.Name);
    };
    RecipeDetailComponent.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    RecipeDetailComponent.prototype.Save = function () {
        this.DA.RecipeSave();
        this.loadList();
    };
    RecipeDetailComponent.prototype.Cancel = function () {
        this.loadList();
    };
    RecipeDetailComponent.prototype.loadList = function () {
        this.DL.LoadComponent("recipe-list");
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DL.TITLE = "Recipe Details";
        this.DA.ImageUploaded.subscribe(function (url) {
            _this.imageURL = url;
            _this.DL.Recipe.ImageURL = url;
            _this.DL.IsUploading = false;
        });
        this.DL.ImageSelected.subscribe(function (source) {
            _this.DL.IsUploading = true;
            _this.DA.UploadImage(source, 'images/recipes/' + _this.DL.Recipe.Name + '.png');
        });
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-detail',
            templateUrl: './recipe-detail.component.html',
            styleUrls: ['./recipe-detail.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxtQ0FBa0M7QUFDbEMsbUNBQStEO0FBUS9EO0lBS0UsK0JBQW1CLElBQVUsRUFBVSxFQUFjLEVBQVUsRUFBYTtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFINUUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUl6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBRTVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFTSx5Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sd0NBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMkNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLG9DQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sc0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sd0NBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixLQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDcEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBM0RVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FNeUIsV0FBSSxFQUFjLGlCQUFVLEVBQWMsZ0JBQVM7T0FMakUscUJBQXFCLENBNERqQztJQUFELDRCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1hZ2VVUkw6IHN0cmluZztcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRpbmdUZXh0VmlldzogVGV4dFZpZXc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHByaXZhdGUgREE6IERhdGFBY2Nlc3MsIHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpIHtcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gbmV3IFJlY2lwZUluZm8oREwuTk9fSU1BR0VfVVJMKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwpXG4gICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IERMLk5PX0lNQUdFX1VSTDtcblxuICAgIHRoaXMuaW1hZ2VVUkwgPSB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTDtcbiAgfVxuXG4gIHB1YmxpYyBTdGFydEVkaXQoYXJncykge1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3ID0gPFRleHRWaWV3PmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBTdG9wRWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3RJbWFnZSgpIHtcbiAgICB0aGlzLkRMLlNlbGVjdEltYWdlKHRoaXMuREwuUmVjaXBlLk5hbWUpO1xuICB9XG5cbiAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KHNlbGVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBTYXZlKCkge1xuICAgIHRoaXMuREEuUmVjaXBlU2F2ZSgpO1xuICAgIHRoaXMubG9hZExpc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBDYW5jZWwoKSB7XG4gICAgdGhpcy5sb2FkTGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTGlzdCgpIHtcbiAgICB0aGlzLkRMLkxvYWRDb21wb25lbnQoXCJyZWNpcGUtbGlzdFwiKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuREwuVElUTEUgPSBcIlJlY2lwZSBEZXRhaWxzXCI7XG4gICAgdGhpcy5EQS5JbWFnZVVwbG9hZGVkLnN1YnNjcmliZSh1cmwgPT4ge1xuICAgICAgdGhpcy5pbWFnZVVSTCA9IHVybDtcbiAgICAgIHRoaXMuREwuUmVjaXBlLkltYWdlVVJMID0gdXJsO1xuICAgICAgdGhpcy5ETC5Jc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ETC5JbWFnZVNlbGVjdGVkLnN1YnNjcmliZShzb3VyY2UgPT4ge1xuICAgICAgdGhpcy5ETC5Jc1VwbG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLkRBLlVwbG9hZEltYWdlKHNvdXJjZSwgJ2ltYWdlcy9yZWNpcGVzLycgKyB0aGlzLkRMLlJlY2lwZS5OYW1lICsgJy5wbmcnKTtcbiAgICB9KVxuICB9XG59XG4iXX0=