"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var fs = require("file-system");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
        this.NO_IMAGE_URL = "res://images/noimage";
        this.DATA_FS_PATH = fs.knownFolders.documents().path;
        this.IsUploading = false;
    }
    DataLayer.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    DataLayer.prototype.GetPath = function (fileName) {
        return fs.path.join(this.DATA_FS_PATH, fileName);
    };
    DataLayer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Core, core_1.NgZone])
    ], DataLayer);
    return DataLayer;
}());
exports.DataLayer = DataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsZ0NBQStCO0FBQy9CLGdDQUFtQztBQU9uQztJQVlJLG1CQUFvQixJQUFVLEVBQVMsTUFBYztRQUFqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJyRCxpQkFBWSxHQUFXLHNCQUFzQixDQUFDO1FBRTlDLGlCQUFZLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFLMkIsQ0FBQztJQUVsRCxpQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFwQlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQWFpQixXQUFJLEVBQWlCLGFBQU07T0FaNUMsU0FBUyxDQXFCckI7SUFBRCxnQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCBmcyA9IHJlcXVpcmUoJ2ZpbGUtc3lzdGVtJyk7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXIge1xuICAgIFRJVExFOiBzdHJpbmc7XG4gICAgVXNlcjogZmlyZWJhc2UuVXNlcjtcblxuICAgIE5PX0lNQUdFX1VSTDogc3RyaW5nID0gXCJyZXM6Ly9pbWFnZXMvbm9pbWFnZVwiO1xuICAgIERBVEFfVXBsb2FkU3RhdHVzOiBOdW1iZXI7XG4gICAgREFUQV9GU19QQVRIOiBzdHJpbmcgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aDtcbiAgICBJc1VwbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgUmVjaXBlOiBSZWNpcGVJbmZvO1xuICAgIFJlY2lwZXM6IEFycmF5PFJlY2lwZUluZm8+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlOiBDb3JlLCBwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgICBwdWJsaWMgTG9hZENvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29yZS5Mb2FkQ29tcG9uZW50KHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0UGF0aChmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZzLnBhdGguam9pbih0aGlzLkRBVEFfRlNfUEFUSCwgZmlsZU5hbWUpO1xuICAgIH1cbn0iXX0=