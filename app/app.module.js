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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxpREFBK0M7QUFDL0MsK0JBQThCO0FBQzlCLCtCQUErQztBQUMvQyw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBQ2hGLHdEQUFzRDtBQStCdEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osMkNBQW1CO2dCQUNuQiwrQ0FBcUI7Z0JBQ3JCLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFdBQUk7Z0JBQ0osaUJBQVU7Z0JBQ1YsZ0JBQVM7YUFDWjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB7IERhdGFBY2Nlc3MsIERhdGFMYXllciB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IFJlY2lwZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZWNpcGUvbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlY2lwZURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3JlY2lwZS9kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRlc3RDb21wb25lbnQgfSBmcm9tIFwiLi90ZXN0L3Rlc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBSZWNpcGVMaXN0Q29tcG9uZW50LFxuICAgICAgICBSZWNpcGVEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFRlc3RDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb3JlLFxuICAgICAgICBEYXRhQWNjZXNzLFxuICAgICAgICBEYXRhTGF5ZXJcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBSZWNpcGVMaXN0Q29tcG9uZW50LFxuICAgICAgICBSZWNpcGVEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFRlc3RDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19