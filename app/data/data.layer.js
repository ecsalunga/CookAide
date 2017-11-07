"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var fs = require("file-system");
var is = require("image-source");
var imagepicker = require("nativescript-imagepicker");
var platform_1 = require("platform");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
        this.ImageSelected = new core_1.EventEmitter();
        this.ImageDownloaded = new core_1.EventEmitter();
        this.NO_IMAGE_URL = "res://images/noimage";
        this.DATA_UploadProgress = 0;
        this.DATA_FS_PATH = fs.knownFolders.documents().path;
        this.DATA_FS_DOCUMENT = fs.knownFolders.documents();
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
    DataLayer.prototype.DownloadImage = function (path, url) {
        var _this = this;
        is.fromUrl(url)
            .then(function (imagesource) {
            imagesource.saveToFile(path, "png");
            _this.ImageDownloaded.emit(path);
        }, function (error) {
            //console.log("Error loading image: " + error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsZ0NBQStCO0FBQy9CLGdDQUFtQztBQUNuQyxpQ0FBb0M7QUFFcEMsc0RBQXdEO0FBQ3hELHFDQUFpQztBQUlqQztJQWlCSSxtQkFBb0IsSUFBVSxFQUFTLE1BQWM7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFoQnJELGtCQUFhLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pELG9CQUFlLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBSzNELGlCQUFZLEdBQVcsc0JBQXNCLENBQUM7UUFDOUMsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEQscUJBQWdCLEdBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxRCxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQU0yQixDQUFDO0lBRWxELGlDQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixVQUFrQjtRQUFyQyxpQkF3QkM7UUF2QkcsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUNoQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztvQkFDUixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVzt3QkFDN0IsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO3dCQUMzQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsSUFBSTtvQkFDQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBYSxHQUFwQixVQUFxQixJQUFZLEVBQUUsR0FBVztRQUE5QyxpQkFRQztRQVBHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2QsSUFBSSxDQUFDLFVBQUEsV0FBVztZQUNiLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCwrQ0FBK0M7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBakVRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FrQmlCLFdBQUksRUFBaUIsYUFBTTtPQWpCNUMsU0FBUyxDQWtFckI7SUFBRCxnQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IGZzID0gcmVxdWlyZSgnZmlsZS1zeXN0ZW0nKTtcbmltcG9ydCBpcyA9IHJlcXVpcmUoJ2ltYWdlLXNvdXJjZScpO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUxheWVyIHtcbiAgICBJbWFnZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBJbWFnZURvd25sb2FkZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgVElUTEU6IHN0cmluZztcbiAgICBVc2VyOiBmaXJlYmFzZS5Vc2VyO1xuXG4gICAgTk9fSU1BR0VfVVJMOiBzdHJpbmcgPSBcInJlczovL2ltYWdlcy9ub2ltYWdlXCI7XG4gICAgREFUQV9VcGxvYWRQcm9ncmVzczogTnVtYmVyID0gMDtcbiAgICBEQVRBX0ZTX1BBVEg6IHN0cmluZyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuICAgIERBVEFfRlNfRE9DVU1FTlQ6IGZzLkZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICBJc1VwbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgUmVjaXBlOiBSZWNpcGVJbmZvO1xuICAgIFJlY2lwZXM6IEFycmF5PFJlY2lwZUluZm8+O1xuICAgIFJlY2lwZXNMb2NhbDogQXJyYXk8UmVjaXBlSW5mbz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmU6IENvcmUsIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cblxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3JlLkxvYWRDb21wb25lbnQoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZWxlY3RJbWFnZShpbXBvcnROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICBjb250ZXh0LmF1dGhvcml6ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KS50aGVuKGltYWdlcyA9PiB7XG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGltYWdlLmZpbGVVcmk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLmdldEltYWdlKCkudGhlbihpbWFnZXNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSB0aGlzLkdldFBhdGgoaW1wb3J0TmFtZSArICcucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNvdXJjZS5zYXZlVG9GaWxlKHNvdXJjZSwgXCJwbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkltYWdlU2VsZWN0ZWQuZW1pdChzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkltYWdlU2VsZWN0ZWQuZW1pdChzb3VyY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RJbWFnZTogXCIgKyBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBEb3dubG9hZEltYWdlKHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaXMuZnJvbVVybCh1cmwpXG4gICAgICAgIC50aGVuKGltYWdlc291cmNlID0+IHtcbiAgICAgICAgICAgIGltYWdlc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJwbmdcIik7XG4gICAgICAgICAgICB0aGlzLkltYWdlRG93bmxvYWRlZC5lbWl0KHBhdGgpO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFcnJvciBsb2FkaW5nIGltYWdlOiBcIiArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFBhdGgoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmcy5wYXRoLmpvaW4odGhpcy5EQVRBX0ZTX1BBVEgsIGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0S2V5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuRGF0ZVRvTnVtYmVyKG5ldyBEYXRlKCkpO1xuICAgIH1cbn0iXX0=