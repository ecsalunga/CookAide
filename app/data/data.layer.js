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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsZ0NBQStCO0FBQy9CLGdDQUFtQztBQUduQyxzREFBd0Q7QUFDeEQscUNBQWlDO0FBSWpDO0lBZ0JJLG1CQUFvQixJQUFVLEVBQVMsTUFBYztRQUFqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZyRCxrQkFBYSxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUt6RCxpQkFBWSxHQUFXLHNCQUFzQixDQUFDO1FBQzlDLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUNoQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3hELHFCQUFnQixHQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFNMkIsQ0FBQztJQUVsRCxpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsVUFBa0I7UUFBckMsaUJBd0JDO1FBdkJHLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDaEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7d0JBQzdCLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3RDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELElBQUk7b0JBQ0EsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdERRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FpQmlCLFdBQUksRUFBaUIsYUFBTTtPQWhCNUMsU0FBUyxDQXVEckI7SUFBRCxnQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IGZzID0gcmVxdWlyZSgnZmlsZS1zeXN0ZW0nKTtcbmltcG9ydCBpcyA9IHJlcXVpcmUoJ2ltYWdlLXNvdXJjZScpO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUmVjaXBlSW5mbyB9IGZyb20gXCIuL1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YUxheWVyIHtcbiAgICBJbWFnZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIFRJVExFOiBzdHJpbmc7XG4gICAgVXNlcjogZmlyZWJhc2UuVXNlcjtcblxuICAgIE5PX0lNQUdFX1VSTDogc3RyaW5nID0gXCJyZXM6Ly9pbWFnZXMvbm9pbWFnZVwiO1xuICAgIERBVEFfVXBsb2FkUHJvZ3Jlc3M6IE51bWJlciA9IDA7XG4gICAgREFUQV9GU19QQVRIOiBzdHJpbmcgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcbiAgICBEQVRBX0ZTX0RPQ1VNRU5UOiBmcy5Gb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgSXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIFJlY2lwZTogUmVjaXBlSW5mbztcbiAgICBSZWNpcGVzOiBBcnJheTxSZWNpcGVJbmZvPjtcbiAgICBSZWNpcGVzTG9jYWw6IEFycmF5PFJlY2lwZUluZm8+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlOiBDb3JlLCBwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgICBwdWJsaWMgTG9hZENvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2VsZWN0SW1hZ2UoaW1wb3J0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29udGV4dC5hdXRob3JpemUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSkudGhlbihpbWFnZXMgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBpbWFnZS5maWxlVXJpO1xuICAgICAgICAgICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5nZXRJbWFnZSgpLnRoZW4oaW1hZ2Vzb3VyY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gdGhpcy5HZXRQYXRoKGltcG9ydE5hbWUgKyAnLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Vzb3VyY2Uuc2F2ZVRvRmlsZShzb3VyY2UsIFwicG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbWFnZVNlbGVjdGVkLmVtaXQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbWFnZVNlbGVjdGVkLmVtaXQoc291cmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0SW1hZ2U6IFwiICsgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0UGF0aChmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZzLnBhdGguam9pbih0aGlzLkRBVEFfRlNfUEFUSCwgZmlsZU5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRLZXkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5EYXRlVG9OdW1iZXIobmV3IERhdGUoKSk7XG4gICAgfVxufSJdfQ==