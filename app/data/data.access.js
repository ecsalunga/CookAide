"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var _1 = require("./");
var _2 = require("./");
var DataAccess = (function () {
    function DataAccess(DL) {
        this.DL = DL;
        this.RecipeDAL = new _2.RecipeDAL(this.DL);
    }
    DataAccess.prototype.Load = function () {
        this.RecipeDAL.Load();
        this.userChanged();
    };
    DataAccess.prototype.RecipeSave = function () {
        this.RecipeDAL.Save(this.DL.Recipe);
    };
    DataAccess.prototype.userChanged = function () {
        var _this = this;
        var listener = {
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    console.log("User info", data.user.uid);
                    _this.DL.User = data.user;
                    _this.DL.UserID = data.user.uid;
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLmFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFFMUQsdUJBQStCO0FBQy9CLHVCQUEyQztBQUczQztJQUdJLG9CQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiRyxJQUFJLFFBQVEsR0FBRztZQUNYLGtCQUFrQixFQUFFLFVBQUMsSUFBSTtnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDLENBQUM7Z0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDakMsQ0FBQztZQUNILENBQUM7WUFDRCxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFFSixRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQTlCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBSWUsWUFBUztPQUh4QixVQUFVLENBK0J0QjtJQUFELGlCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgRGF0YUxheWVyIH0gZnJvbSBcIi4vXCI7XG5pbXBvcnQgeyBSZWNpcGVEQUwsIFJlY2lwZUluZm8gfSBmcm9tIFwiLi9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFBY2Nlc3Mge1xuICAgIFJlY2lwZURBTDogUmVjaXBlREFMO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBETDogRGF0YUxheWVyKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMID0gbmV3IFJlY2lwZURBTCh0aGlzLkRMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9hZCgpIHtcbiAgICAgICAgdGhpcy5SZWNpcGVEQUwuTG9hZCgpO1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIFJlY2lwZVNhdmUoKSB7XG4gICAgICAgIHRoaXMuUmVjaXBlREFMLlNhdmUodGhpcy5ETC5SZWNpcGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXNlckNoYW5nZWQoKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaW5mb1wiLCBkYXRhLnVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLkRMLlVzZXIgPSBkYXRhLnVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5ETC5Vc2VySUQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc0FyZzogdGhpc1xuICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5hZGRBdXRoU3RhdGVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxufSJdfQ==