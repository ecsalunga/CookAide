"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var core_2 = require("../../core");
var data_1 = require("../../data");
var imagepicker = require("nativescript-imagepicker");
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
        var _this = this;
        var context = imagepicker.create({
            mode: "single"
        });
        context.authorize()
            .then(function () {
            return context.present();
        })
            .then(function (images) {
            images.forEach(function (image) {
                var selected = image.fileUri;
                var source = selected;
                image.getImage().then(function (imagesource) {
                    if (platform_1.isIOS) {
                        source = selected.substr(7, selected.length);
                        var path = _this.DL.GetPath(_this.DL.Recipe.Name + '.png');
                        var saved = imagesource.saveToFile(path, "jpeg");
                        if (saved)
                            console.log("saved image " + path);
                        else
                            console.log("Did NOT save image on iOS: " + path);
                        source = path;
                    }
                    _this.DL.IsUploading = true;
                    _this.DA.SaveImage(source, 'images/recipes/' + _this.DL.Recipe.Name + '.png');
                });
            });
        });
    };
    RecipeDetailComponent.prototype.Login = function () {
        this.DA.Login();
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
        this.LoadComponent("recipe-list");
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DL.TITLE = "Recipe Details";
        this.DA.ImageUploaded.subscribe(function (url) {
            _this.imageURL = url;
            _this.DL.Recipe.ImageURL = url;
            _this.DL.IsUploading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxxQ0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLG1DQUErRDtBQUMvRCxzREFBd0Q7QUFReEQ7SUFLRSwrQkFBbUIsSUFBVSxFQUFVLEVBQWMsRUFBVSxFQUFhO1FBQXpELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUg1RSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSXpCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx3Q0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUs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QUNMLENBQUM7SUF2RlUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQU15QixXQUFJLEVBQWMsaUJBQVUsRUFBYyxnQkFBUztPQUxqRSxxQkFBcUIsQ0F3RmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhTGF5ZXIsIERhdGFBY2Nlc3MsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YVwiO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1hZ2VVUkw6IHN0cmluZztcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRpbmdUZXh0VmlldzogVGV4dFZpZXc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHByaXZhdGUgREE6IERhdGFBY2Nlc3MsIHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpIHtcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gbmV3IFJlY2lwZUluZm8oREwuTk9fSU1BR0VfVVJMKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwpXG4gICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IERMLk5PX0lNQUdFX1VSTDtcblxuICAgIHRoaXMuaW1hZ2VVUkwgPSB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTDtcbiAgfVxuXG4gIHB1YmxpYyBTdGFydEVkaXQoYXJncykge1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3ID0gPFRleHRWaWV3PmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBTdG9wRWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3RJbWFnZSgpIHtcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmF1dGhvcml6ZSgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG4gICAgfSlcbiAgICAudGhlbihpbWFnZXMgPT4ge1xuICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBpbWFnZS5maWxlVXJpO1xuICAgICAgICBsZXQgc291cmNlID0gc2VsZWN0ZWQ7XG4gICAgICAgIGltYWdlLmdldEltYWdlKCkudGhlbihpbWFnZXNvdXJjZSA9PiB7XG4gICAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSAgc2VsZWN0ZWQuc3Vic3RyKDcsIHNlbGVjdGVkLmxlbmd0aClcbiAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5ETC5HZXRQYXRoKHRoaXMuREwuUmVjaXBlLk5hbWUgKyAnLnBuZycpO1xuICAgICAgICAgICAgbGV0IHNhdmVkID0gaW1hZ2Vzb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcImpwZWdcIik7XG4gICAgICAgICAgICBpZihzYXZlZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZCBpbWFnZSBcIitwYXRoKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpZCBOT1Qgc2F2ZSBpbWFnZSBvbiBpT1M6IFwiK3BhdGgpXG5cbiAgICAgICAgICAgIHNvdXJjZSA9IHBhdGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5ETC5Jc1VwbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5EQS5TYXZlSW1hZ2Uoc291cmNlLCAnaW1hZ2VzL3JlY2lwZXMvJyArIHRoaXMuREwuUmVjaXBlLk5hbWUgKyAnLnBuZycpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIExvZ2luKCkge1xuICAgIHRoaXMuREEuTG9naW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgU2F2ZSgpIHtcbiAgICB0aGlzLkRBLlJlY2lwZVNhdmUoKTtcbiAgICB0aGlzLmxvYWRMaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgQ2FuY2VsKCkge1xuICAgIHRoaXMubG9hZExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZExpc3QoKSB7XG4gICAgdGhpcy5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxpc3RcIik7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xuICAgIHRoaXMuREEuSW1hZ2VVcGxvYWRlZC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VVUkwgPSB1cmw7XG4gICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IHVybDtcbiAgICAgIHRoaXMuREwuSXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl19