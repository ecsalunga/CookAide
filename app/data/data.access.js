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
    DataAccess.prototype.RecipeLocalSave = function () {
        this.RecipeDAL.SaveLocal(this.DL.Recipe);
    };
    DataAccess.prototype.UploadImage = function (source, path) {
        var _this = this;
        this.DL.DATA_UploadProgress = 0;
        firebase.uploadFile({
            remoteFullPath: path,
            localFullPath: source,
            onProgress: function (status) {
                _this.DL.ngZone.run(function () {
                    _this.DL.DATA_UploadProgress = status.percentageCompleted;
                });
            }
        })
            .then(function (uploadedFile) {
            var uploaded = JSON.parse(JSON.stringify(uploadedFile));
            _this.ImageUploaded.emit(uploaded.url);
        }, function (error) {
            console.log("UploadImage: " + error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCx1REFBMEQ7QUFFMUQsdUJBQStCO0FBQy9CLHVCQUEyQztBQUczQztJQUlJLG9CQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUZqQyxrQkFBYSxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUdyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQUEsaUJBVUc7UUFUQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQ0QsVUFBQyxZQUFZO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFSSwrQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLElBQVk7UUFBL0MsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLE1BQU07WUFDckIsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDZixLQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsS0FBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxZQUFZO1lBQ1YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxRQUFRLEdBQUc7WUFDWCxrQkFBa0IsRUFBRSxVQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNoQixLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUM7WUFDRCxPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDO1FBRUYsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFqRVEsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUtlLFlBQVM7T0FKeEIsVUFBVSxDQWtFdEI7SUFBRCxpQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgRGF0YUxheWVyIH0gZnJvbSBcIi4vXCI7XG5pbXBvcnQgeyBSZWNpcGVEQUwsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFBY2Nlc3Mge1xuICAgIFJlY2lwZURBTDogUmVjaXBlREFMO1xuICAgIEltYWdlVXBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMID0gbmV3IFJlY2lwZURBTCh0aGlzLkRMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9hZCgpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuTG9hZCgpO1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIExvZ2luKCkge1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LXG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICB0aGlzLkRMLlVzZXIgPSB1c2VyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWNlYm9vayBsb2dpbiBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIHB1YmxpYyBSZWNpcGVTYXZlKCkge1xuICAgICAgICB0aGlzLlJlY2lwZURBTC5TYXZlKHRoaXMuREwuUmVjaXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVjaXBlTG9jYWxTYXZlKCl7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMLlNhdmVMb2NhbCh0aGlzLkRMLlJlY2lwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFVwbG9hZEltYWdlKHNvdXJjZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ETC5EQVRBX1VwbG9hZFByb2dyZXNzID0gMDtcbiAgICAgICAgZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICByZW1vdGVGdWxsUGF0aDogcGF0aCxcbiAgICAgICAgICAgIGxvY2FsRnVsbFBhdGg6IHNvdXJjZSxcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRMLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkRMLkRBVEFfVXBsb2FkUHJvZ3Jlc3MgPSBzdGF0dXMucGVyY2VudGFnZUNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4odXBsb2FkZWRGaWxlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXBsb2FkZWQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuSW1hZ2VVcGxvYWRlZC5lbWl0KHVwbG9hZGVkLnVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRJbWFnZTogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1c2VyQ2hhbmdlZCgpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0ge1xuICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbilcbiAgICAgICAgICAgICAgICB0aGlzLkRMLlVzZXIgPSBkYXRhLnVzZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc0FyZzogdGhpc1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmlyZWJhc2UuYWRkQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cbn0iXX0=