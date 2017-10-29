"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var _1 = require("./");
var _2 = require("./");
var DataAccess = (function () {
    function DataAccess(DL) {
        this.DL = DL;
        this.ImageUploaded = new core_1.EventEmitter();
        this.RecipeDAL = new _2.RecipeDAL(this.DL);
    }
    DataAccess.prototype.Load = function () {
        this.RecipeDAL.Load();
        this.userChanged();
    };
    DataAccess.prototype.Login = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.FACEBOOK
        }).then(function (user) {
            _this.DL.User = user;
        }, function (errorMessage) {
            console.log("facebook login error: " + errorMessage);
        });
    };
    DataAccess.prototype.RecipeSave = function () {
        this.RecipeDAL.Save(this.DL.Recipe);
    };
    DataAccess.prototype.SaveImage = function (source, path) {
        var _this = this;
        firebase.uploadFile({
            remoteFullPath: path,
            localFullPath: source,
            onProgress: function (status) {
                _this.DL.DATA_UploadStatus = status.percentageCompleted;
            }
        })
            .then(function (uploadedFile) {
            var uploaded = JSON.parse(JSON.stringify(uploadedFile));
            _this.ImageUploaded.emit(uploaded.url);
        }, function (error) {
            console.log("File upload error: " + error);
        });
    };
    DataAccess.prototype.userChanged = function () {
        var _this = this;
        var listener = {
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn)
                    _this.DL.User = data.user;
            },
            thisArg: this
        };
        firebase.addAuthStateListener(listener);
    };
    DataAccess = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.DataLayer])
    ], DataAccess);
    return DataAccess;
}());
exports.DataAccess = DataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCx1REFBMEQ7QUFFMUQsdUJBQStCO0FBQy9CLHVCQUEyQztBQUczQztJQUlJLG9CQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUZqQyxrQkFBYSxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUdyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQUEsaUJBVUc7UUFUQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQ0QsVUFBQyxZQUFZO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFSSwrQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxJQUFZO1FBQTdDLGlCQWdCQztRQWZHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLE1BQU07WUFDckIsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDZixLQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUMzRCxDQUFDO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLFlBQVk7WUFDVixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRU8sZ0NBQVcsR0FBbkI7UUFBQSxpQkFXQztRQVZHLElBQUksUUFBUSxHQUFHO1lBQ1gsa0JBQWtCLEVBQUUsVUFBQyxJQUFJO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUMsQ0FBQztnQkFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQztRQUVGLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBMURRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FLZSxZQUFTO09BSnhCLFVBQVUsQ0EyRHRCO0lBQUQsaUJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmltcG9ydCB7IERhdGFMYXllciB9IGZyb20gXCIuL1wiO1xuaW1wb3J0IHsgUmVjaXBlREFMLCBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhQWNjZXNzIHtcbiAgICBSZWNpcGVEQUw6IFJlY2lwZURBTDtcbiAgICBJbWFnZVVwbG9hZGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgREw6IERhdGFMYXllcikge1xuICAgICAgICB0aGlzLlJlY2lwZURBTCA9IG5ldyBSZWNpcGVEQUwodGhpcy5ETCk7XG4gICAgfVxuXG4gICAgcHVibGljIExvYWQoKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMLkxvYWQoKTtcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2dpbigpIHtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PS1xuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5ETC5Vc2VyID0gdXNlcjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFjZWJvb2sgbG9naW4gZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICBwdWJsaWMgUmVjaXBlU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuU2F2ZSh0aGlzLkRMLlJlY2lwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNhdmVJbWFnZShzb3VyY2U6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGZpcmViYXNlLnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHBhdGgsXG4gICAgICAgICAgICBsb2NhbEZ1bGxQYXRoOiBzb3VyY2UsXG4gICAgICAgICAgICBvblByb2dyZXNzOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ETC5EQVRBX1VwbG9hZFN0YXR1cyA9IHN0YXR1cy5wZXJjZW50YWdlQ29tcGxldGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbih1cGxvYWRlZEZpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1cGxvYWRlZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRGaWxlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5JbWFnZVVwbG9hZGVkLmVtaXQodXBsb2FkZWQudXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdXBsb2FkIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVzZXJDaGFuZ2VkKCkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSB7XG4gICAgICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKVxuICAgICAgICAgICAgICAgIHRoaXMuREwuVXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzQXJnOiB0aGlzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5hZGRBdXRoU3RhdGVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxufSJdfQ==