"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var core_2 = require("./core");
var data_1 = require("./data");
var recipe_list_component_1 = require("./recipe/list/recipe-list.component");
var recipe_detail_component_1 = require("./recipe/detail/recipe-detail.component");
var test_component_1 = require("./test/test.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                test_component_1.TestComponent
            ],
            providers: [
                core_2.Core,
                data_1.DataAccess,
                data_1.DataLayer
            ],
            entryComponents: [
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                test_component_1.TestComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFvRTtBQUNwRSxpREFBK0M7QUFDL0MsK0JBQThCO0FBQzlCLCtCQUErQztBQUMvQyw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBQ2hGLHdEQUFzRDtBQStCdEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osMkNBQW1CO2dCQUNuQiwrQ0FBcUI7Z0JBQ3JCLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFdBQUk7Z0JBQ0osaUJBQVU7Z0JBQ1YsZ0JBQVM7YUFDWjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHsgRGF0YUFjY2VzcywgRGF0YUxheWVyIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgUmVjaXBlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3JlY2lwZS9saXN0L3JlY2lwZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVjaXBlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVjaXBlL2RldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3QvdGVzdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvcmUsXG4gICAgICAgIERhdGFBY2Nlc3MsXG4gICAgICAgIERhdGFMYXllclxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=