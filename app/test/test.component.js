"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var data_1 = require("../data");
var TestComponent = (function () {
    function TestComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
    }
    TestComponent.prototype.Login = function () {
        this.DA.Login();
    };
    TestComponent.prototype.ngOnInit = function () {
        this.DL.TITLE = "Tester Page";
    };
    TestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test',
            templateUrl: './test.component.html',
            styleUrls: ['./test.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.Core, data_1.DataAccess, data_1.DataLayer])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsZ0NBQWdEO0FBUWhEO0lBRUUsdUJBQW1CLElBQVUsRUFBUyxFQUFjLEVBQVMsRUFBYTtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBRXhFLDZCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFWVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUd5QixXQUFJLEVBQWEsaUJBQVUsRUFBYSxnQkFBUztPQUYvRCxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IERhdGFMYXllciwgRGF0YUFjY2VzcyB9IGZyb20gXCIuLi9kYXRhXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3Rlc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rlc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29yZTogQ29yZSwgcHVibGljIERBOiBEYXRhQWNjZXNzLCBwdWJsaWMgREw6IERhdGFMYXllcikgeyB9XG5cbiAgcHVibGljIExvZ2luKCkge1xuICAgIHRoaXMuREEuTG9naW4oKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ETC5USVRMRSA9IFwiVGVzdGVyIFBhZ2VcIjtcbiAgfVxufSJdfQ==