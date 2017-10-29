"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var DataLayer = (function () {
    function DataLayer(core, ngZone) {
        this.core = core;
        this.ngZone = ngZone;
        this.UserID = "n/a";
        this.NO_IMAGE_URL = "res://images/noimage";
    }
    DataLayer.prototype.LoadComponent = function (selector) {
        this.core.LoadComponent(selector);
    };
    DataLayer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Core, core_1.NgZone])
    ], DataLayer);
    return DataLayer;
}());
exports.DataLayer = DataLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEubGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsZ0NBQStCO0FBSS9CO0lBV0ksbUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnJELFdBQU0sR0FBVyxLQUFLLENBQUM7UUFFdkIsaUJBQVksR0FBVyxzQkFBc0IsQ0FBQztJQU1VLENBQUM7SUFFbEQsaUNBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWZRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FZaUIsV0FBSSxFQUFpQixhQUFNO09BWDVDLFNBQVMsQ0FnQnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBSZWNpcGVJbmZvIH0gZnJvbSBcIi4vXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXIge1xuICAgIFRJVExFOiBzdHJpbmc7XG4gICAgVXNlcjogYW55O1xuICAgIFVzZXJJRDogc3RyaW5nID0gXCJuL2FcIjtcblxuICAgIE5PX0lNQUdFX1VSTDogc3RyaW5nID0gXCJyZXM6Ly9pbWFnZXMvbm9pbWFnZVwiO1xuICAgIERBVEFfVXBsb2FkU3RhdHVzOiBOdW1iZXI7XG5cbiAgICBSZWNpcGU6IFJlY2lwZUluZm87XG4gICAgUmVjaXBlczogQXJyYXk8UmVjaXBlSW5mbz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmU6IENvcmUsIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cblxuICAgIHB1YmxpYyBMb2FkQ29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3JlLkxvYWRDb21wb25lbnQoc2VsZWN0b3IpO1xuICAgIH1cbn0iXX0=