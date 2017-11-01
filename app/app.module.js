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
var recipe_local_list_component_1 = require("./recipe/local-list/recipe-local-list.component");
var recipe_local_detail_component_1 = require("./recipe/local-detail/recipe-local-detail.component");
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
                recipe_local_list_component_1.RecipeLocalListComponent,
                recipe_local_detail_component_1.RecipeLocalDetailComponent,
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
                recipe_local_list_component_1.RecipeLocalListComponent,
                recipe_local_detail_component_1.RecipeLocalDetailComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxpREFBK0M7QUFDL0MsK0JBQThCO0FBQzlCLCtCQUErQztBQUMvQyw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBQ2hGLCtGQUEyRjtBQUMzRixxR0FBaUc7QUFDakcsd0RBQXNEO0FBbUN0RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsc0RBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFdBQUk7Z0JBQ0osaUJBQVU7Z0JBQ1YsZ0JBQVM7YUFDWjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsc0RBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgeyBEYXRhQWNjZXNzLCBEYXRhTGF5ZXIgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBSZWNpcGVMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVjaXBlL2xpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWNpcGVEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZWNpcGUvZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWNpcGVMb2NhbExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZWNpcGUvbG9jYWwtbGlzdC9yZWNpcGUtbG9jYWwtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlY2lwZUxvY2FsRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVjaXBlL2xvY2FsLWRldGFpbC9yZWNpcGUtbG9jYWwtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3QvdGVzdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgUmVjaXBlTG9jYWxMaXN0Q29tcG9uZW50LFxuICAgICAgICBSZWNpcGVMb2NhbERldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvcmUsXG4gICAgICAgIERhdGFBY2Nlc3MsXG4gICAgICAgIERhdGFMYXllclxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgUmVjaXBlTG9jYWxMaXN0Q29tcG9uZW50LFxuICAgICAgICBSZWNpcGVMb2NhbERldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=