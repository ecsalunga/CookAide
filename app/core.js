"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Core = (function () {
    function Core(resolver) {
        this.resolver = resolver;
        this.components = new Array();
    }
    Core.prototype.LoadComponent = function (selector) {
        var factories = Array.from(this.resolver['_factories'].values());
        var component = factories.find(function (item) { return item.selector === selector; });
        if (component) {
            this.clearComponent();
            this.selector = selector;
            var factory = this.resolver.resolveComponentFactory(component.componentType);
            var created = this.viewChild.createComponent(factory);
            this.components.push(created);
        }
    };
    Core.prototype.LoadComponents = function (selectors) {
        var _this = this;
        this.selector = "Multiple";
        selectors.forEach(function (selector) {
            var factories = Array.from(_this.resolver['_factories'].values());
            var component = factories.find(function (item) { return item.selector === selector; });
            if (component) {
                var factory = _this.resolver.resolveComponentFactory(component.componentType);
                var created = _this.viewChild.createComponent(factory);
                _this.components.push(created);
            }
        });
    };
    Core.prototype.clearComponent = function () {
        this.selector = "";
        this.components.forEach(function (component) {
            component.destroy();
        });
    };
    Core.prototype.DateToNumber = function (date) {
        var dt = new Date();
        var strDate = date.getFullYear() + this.az(date.getMonth() + 1) + this.az(date.getDate()) + this.az(dt.getHours()) + this.az(dt.getMinutes()) + this.az(dt.getSeconds());
        return parseInt(strDate);
    };
    Core.prototype.DateToKeyDay = function (date) {
        var strDate = date.getFullYear() + this.az(date.getMonth() + 1) + this.az(date.getDate());
        return parseInt(strDate);
    };
    Core.prototype.DateToKeyMonth = function (date) {
        var strDate = date.getFullYear() + this.az(date.getMonth() + 1);
        return parseInt(strDate);
    };
    Core.prototype.NumberToDate = function (num) {
        var val = num.toString();
        var year = parseInt(val.substring(0, 4));
        var month = parseInt(val.substring(4, 6));
        var day = parseInt(val.substring(6, 8));
        var hour = parseInt(val.substring(8, 10));
        var minute = parseInt(val.substring(10, 12));
        var second = parseInt(val.substring(12, 14));
        return new Date(year, month - 1, day, hour, minute, second);
    };
    Core.prototype.KeyDayToDate = function (keyDay) {
        return this.NumberToDate(parseInt(keyDay + '000000'));
    };
    Core.prototype.az = function (val) {
        var num = val.toString();
        if (num.length < 2)
            num = "0" + num;
        return num;
    };
    Core = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], Core);
    return Core;
}());
exports.Core = Core;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFHekc7SUFLSSxjQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUh0RCxlQUFVLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztJQUdnQixDQUFDO0lBRXBELDRCQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ2pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksU0FBUyxHQUEyQixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBMkIsSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDcEgsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFjLEdBQXJCLFVBQXNCLFNBQXdCO1FBQTlDLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDdEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxD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R0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLDJCQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxpQkFBRSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVwQixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQWxGUSxJQUFJO1FBRGhCLGlCQUFVLEVBQUU7eUNBTXFCLCtCQUF3QjtPQUw3QyxJQUFJLENBbUZoQjtJQUFELFdBQUM7Q0FBQSxBQW5GRCxJQW1GQztBQW5GWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZSB7XG4gICAgdmlld0NoaWxkOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIGNvbXBvbmVudHM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIHNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICBsZXQgZmFjdG9yaWVzID0gQXJyYXkuZnJvbSh0aGlzLnJlc29sdmVyWydfZmFjdG9yaWVzJ10udmFsdWVzKCkpO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gPENvbXBvbmVudEZhY3Rvcnk8YW55Pj4gZmFjdG9yaWVzLmZpbmQoKGl0ZW06IENvbXBvbmVudEZhY3Rvcnk8YW55PikgPT4gaXRlbS5zZWxlY3RvciA9PT0gc2VsZWN0b3IpO1xuICAgICAgICBpZihjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgICBsZXQgY3JlYXRlZCA9IHRoaXMudmlld0NoaWxkLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNyZWF0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIExvYWRDb21wb25lbnRzKHNlbGVjdG9yczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gXCJNdWx0aXBsZVwiO1xuICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBsZXQgZmFjdG9yaWVzID0gQXJyYXkuZnJvbSh0aGlzLnJlc29sdmVyWydfZmFjdG9yaWVzJ10udmFsdWVzKCkpO1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IDxDb21wb25lbnRGYWN0b3J5PGFueT4+IGZhY3Rvcmllcy5maW5kKChpdGVtOiBDb21wb25lbnRGYWN0b3J5PGFueT4pID0+IGl0ZW0uc2VsZWN0b3IgPT09IHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZWQgPSB0aGlzLnZpZXdDaGlsZC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY3JlYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIERhdGVUb051bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgZHQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgc3RyRGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIHRoaXMuYXooZGF0ZS5nZXRNb250aCgpKzEpICsgdGhpcy5heihkYXRlLmdldERhdGUoKSkgKyB0aGlzLmF6KGR0LmdldEhvdXJzKCkpICsgdGhpcy5heihkdC5nZXRNaW51dGVzKCkpICsgdGhpcy5heihkdC5nZXRTZWNvbmRzKCkpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyRGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIERhdGVUb0tleURheShkYXRlOiBEYXRlKTogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgc3RyRGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIHRoaXMuYXooZGF0ZS5nZXRNb250aCgpKzEpICsgdGhpcy5heihkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChzdHJEYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGF0ZVRvS2V5TW9udGgoZGF0ZTogRGF0ZSk6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHN0ckRhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyB0aGlzLmF6KGRhdGUuZ2V0TW9udGgoKSsxKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0ckRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBOdW1iZXJUb0RhdGUobnVtOiBudW1iZXIpOiBEYXRlXG4gICAge1xuICAgICAgICBsZXQgdmFsID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCB5ZWFyID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZygwLCA0KSk7XG4gICAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoNCwgNikpO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyg2LCA4KSk7XG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyg4LCAxMCkpO1xuICAgICAgICBsZXQgbWludXRlID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZygxMCwgMTIpKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoMTIsIDE0KSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgtMSwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XG4gICAgfVxuXG4gICAgcHVibGljIEtleURheVRvRGF0ZShrZXlEYXk6IG51bWJlcik6IERhdGVcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLk51bWJlclRvRGF0ZShwYXJzZUludChrZXlEYXkgKyAnMDAwMDAwJykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXoodmFsOiBudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgICAgbGV0IG51bSA9IHZhbC50b1N0cmluZygpO1xuICAgICAgICBpZihudW0ubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIG51bSA9IFwiMFwiICsgbnVtO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG59Il19