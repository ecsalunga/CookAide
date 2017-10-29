"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var fs = require("file-system");
var imagepicker = require("nativescript-imagepicker");
var platform_1 = require("platform");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
        this.ImageSelected = new core_1.EventEmitter();
        this.NO_IMAGE_URL = "res://images/noimage";
        this.DATA_UploadProgress = 0;
        this.DATA_FS_PATH = fs.knownFolders.documents().path;
        this.IsUploading = false;
    }
    DataLayer.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    DataLayer.prototype.SelectImage = function (importName) {
        var _this = this;
        var context = imagepicker.create({
            mode: "single"
        });
        context.authorize().then(function () {
            return context.present();
        }).then(function (images) {
            images.forEach(function (image) {
                var source = image.fileUri;
                if (platform_1.isIOS) {
                    image.getImage().then(function (imagesource) {
                        source = _this.GetPath(importName + '.png');
                        imagesource.saveToFile(source, "png");
                        _this.ImageSelected.emit(source);
                    });
                }
                else
                    _this.ImageSelected.emit(source);
            });
        }, function (error) {
            console.log("SelectImage: " + error);
        });
    };
    DataLayer.prototype.GetPath = function (fileName) {
        return fs.path.join(this.DATA_FS_PATH, fileName);
    };
    DataLayer.prototype.GetKey = function () {
        return this.core.DateToNumber(new Date());
    };
    DataLayer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Core, core_1.NgZone])
    ], DataLayer);
    return DataLayer;
}());
exports.DataLayer = DataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsZ0NBQStCO0FBQy9CLGdDQUFtQztBQUduQyxzREFBd0Q7QUFDeEQscUNBQWlDO0FBSWpDO0lBY0ksbUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYnJELGtCQUFhLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBS3pELGlCQUFZLEdBQVcsc0JBQXNCLENBQUM7UUFDOUMsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFLMkIsQ0FBQztJQUVsRCxpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsVUFBa0I7UUFBckMsaUJBd0JDO1FBdkJHLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDaEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7d0JBQzdCLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3RDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELElBQUk7b0JBQ0EsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBcERRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FlaUIsV0FBSSxFQUFpQixhQUFNO09BZDVDLFNBQVMsQ0FxRHJCO0lBQUQsZ0JBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCBmcyA9IHJlcXVpcmUoJ2ZpbGUtc3lzdGVtJyk7XG5pbXBvcnQgaXMgPSByZXF1aXJlKCdpbWFnZS1zb3VyY2UnKTtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFJlY2lwZUluZm8gfSBmcm9tIFwiLi9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFMYXllciB7XG4gICAgSW1hZ2VTZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBUSVRMRTogc3RyaW5nO1xuICAgIFVzZXI6IGZpcmViYXNlLlVzZXI7XG5cbiAgICBOT19JTUFHRV9VUkw6IHN0cmluZyA9IFwicmVzOi8vaW1hZ2VzL25vaW1hZ2VcIjtcbiAgICBEQVRBX1VwbG9hZFByb2dyZXNzOiBOdW1iZXIgPSAwO1xuICAgIERBVEFfRlNfUEFUSDogc3RyaW5nID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGg7XG4gICAgSXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIFJlY2lwZTogUmVjaXBlSW5mbztcbiAgICBSZWNpcGVzOiBBcnJheTxSZWNpcGVJbmZvPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZTogQ29yZSwgcHVibGljIG5nWm9uZTogTmdab25lKSB7fVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcmUuTG9hZENvbXBvbmVudChzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcHVibGljIFNlbGVjdEltYWdlKGltcG9ydE5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIGNvbnRleHQuYXV0aG9yaXplKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG4gICAgICAgIH0pLnRoZW4oaW1hZ2VzID0+IHtcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gaW1hZ2UuZmlsZVVyaTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UuZ2V0SW1hZ2UoKS50aGVuKGltYWdlc291cmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IHRoaXMuR2V0UGF0aChpbXBvcnROYW1lICsgJy5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlc291cmNlLnNhdmVUb0ZpbGUoc291cmNlLCBcInBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW1hZ2VTZWxlY3RlZC5lbWl0KHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW1hZ2VTZWxlY3RlZC5lbWl0KHNvdXJjZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdEltYWdlOiBcIiArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFBhdGgoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmcy5wYXRoLmpvaW4odGhpcy5EQVRBX0ZTX1BBVEgsIGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0S2V5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuRGF0ZVRvTnVtYmVyKG5ldyBEYXRlKCkpO1xuICAgIH1cbn0iXX0=