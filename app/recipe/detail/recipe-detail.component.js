"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var core_2 = require("../../core");
var data_1 = require("../../data");
var imagepicker = require("nativescript-imagepicker");
var firebase = require("nativescript-plugin-firebase");
var fs = require("file-system");
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
                        var folder = fs.knownFolders.documents();
                        var path = fs.path.join(folder.path, _this.DL.Recipe.Name + '.png');
                        var saved = imagesource.saveToFile(path, "jpeg");
                        if (saved)
                            console.log("saved image " + path);
                        else
                            console.log("Did NOT save image on iOS: " + path);
                        source = path;
                    }
                    firebase.uploadFile({
                        remoteFullPath: 'images/recipes/' + _this.DL.Recipe.Name + '.png',
                        localFullPath: source,
                        onProgress: function (status) {
                            _this.DL.DATA_UploadStatus = status.percentageCompleted;
                        }
                    }).then(function (uploadedFile) {
                        var uploaded = JSON.parse(JSON.stringify(uploadedFile));
                        _this.imageURL = uploaded.url;
                        _this.DL.Recipe.ImageURL = uploaded.url;
                    }, function (error) {
                        console.log("File upload error: " + error);
                    });
                });
            });
        });
    };
    RecipeDetailComponent.prototype.Login = function () {
        firebase.login({
            type: firebase.LoginType.FACEBOOK
        }).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (errorMessage) {
            console.log("error: " + errorMessage);
        });
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
        this.DL.TITLE = "Recipe Details";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxxQ0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLG1DQUErRDtBQUMvRCxzREFBd0Q7QUFDeEQsdURBQTBEO0FBQzFELGdDQUFrQztBQVFsQztJQUtFLCtCQUFtQixJQUFVLEVBQVUsRUFBYyxFQUFVLEVBQWE7UUFBekQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBSDVFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFJekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUU1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRU0seUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUss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QyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFDLFlBQVk7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSw2Q0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sb0NBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyx3Q0FBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxDQUFDO0lBeEdVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FNeUIsV0FBSSxFQUFjLGlCQUFVLEVBQWMsZ0JBQVM7T0FMakUscUJBQXFCLENBeUdqQztJQUFELDRCQUFDO0NBQUEsQUF6R0QsSUF5R0M7QUF6R1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUxheWVyLCBEYXRhQWNjZXNzLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4uLy4uL2RhdGFcIjtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IGZzID0gcmVxdWlyZSgnZmlsZS1zeXN0ZW0nKVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZWNpcGUtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1hZ2VVUkw6IHN0cmluZztcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRpbmdUZXh0VmlldzogVGV4dFZpZXc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUsIHByaXZhdGUgREE6IERhdGFBY2Nlc3MsIHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgIGlmKHRoaXMuREwuUmVjaXBlID09IG51bGwpIHtcbiAgICAgIHRoaXMuREwuUmVjaXBlID0gbmV3IFJlY2lwZUluZm8oREwuTk9fSU1BR0VfVVJMKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5ETC5SZWNpcGUuSW1hZ2VVUkwpXG4gICAgICB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTCA9IERMLk5PX0lNQUdFX1VSTDtcblxuICAgIHRoaXMuaW1hZ2VVUkwgPSB0aGlzLkRMLlJlY2lwZS5JbWFnZVVSTDtcbiAgfVxuXG4gIHB1YmxpYyBTdGFydEVkaXQoYXJncykge1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3ID0gPFRleHRWaWV3PmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBTdG9wRWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdGluZ1RleHRWaWV3LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZWxlY3RJbWFnZSgpIHtcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmF1dGhvcml6ZSgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG4gICAgfSlcbiAgICAudGhlbihpbWFnZXMgPT4ge1xuICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBpbWFnZS5maWxlVXJpO1xuICAgICAgICBsZXQgc291cmNlID0gc2VsZWN0ZWQ7XG4gICAgICAgIGltYWdlLmdldEltYWdlKCkudGhlbihpbWFnZXNvdXJjZSA9PiB7XG4gICAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSAgc2VsZWN0ZWQuc3Vic3RyKDcsIHNlbGVjdGVkLmxlbmd0aClcbiAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgdGhpcy5ETC5SZWNpcGUuTmFtZSArICcucG5nJyk7XG4gICAgICAgICAgICBsZXQgc2F2ZWQgPSBpbWFnZXNvdXJjZS5zYXZlVG9GaWxlKHBhdGgsIFwianBlZ1wiKTtcbiAgICAgICAgICAgIGlmKHNhdmVkKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkIGltYWdlIFwiK3BhdGgpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlkIE5PVCBzYXZlIGltYWdlIG9uIGlPUzogXCIrcGF0aClcblxuICAgICAgICAgICAgc291cmNlID0gcGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoOiAnaW1hZ2VzL3JlY2lwZXMvJyArIHRoaXMuREwuUmVjaXBlLk5hbWUgKyAnLnBuZycsXG4gICAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IHNvdXJjZSxcbiAgICAgICAgICAgICAgb25Qcm9ncmVzczogKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ETC5EQVRBX1VwbG9hZFN0YXR1cyA9IHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAodXBsb2FkZWRGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVwbG9hZGVkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVVJMID0gdXBsb2FkZWQudXJsO1xuICAgICAgICAgICAgICAgIHRoaXMuREwuUmVjaXBlLkltYWdlVVJMID0gdXBsb2FkZWQudXJsO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBMb2dpbigpIHtcbiAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0tcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgU2F2ZSgpIHtcbiAgICB0aGlzLkRBLlJlY2lwZVNhdmUoKTtcbiAgICB0aGlzLmxvYWRMaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgQ2FuY2VsKCkge1xuICAgIHRoaXMubG9hZExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZExpc3QoKSB7XG4gICAgdGhpcy5Mb2FkQ29tcG9uZW50KFwicmVjaXBlLWxpc3RcIik7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLkRMLlRJVExFID0gXCJSZWNpcGUgRGV0YWlsc1wiO1xuICB9XG59XG4iXX0=