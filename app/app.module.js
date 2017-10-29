"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
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
                forms_1.NativeScriptFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css'
                })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSx1RUFBOEQ7QUFDOUQsaURBQStDO0FBQy9DLCtCQUE4QjtBQUM5QiwrQkFBK0M7QUFDL0MsNkVBQTBFO0FBQzFFLG1GQUFnRjtBQUNoRix3REFBc0Q7QUFrQ3REO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFoQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLElBQUksRUFBRSwyQkFBMkI7aUJBQ3BDLENBQUM7YUFDQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsV0FBSTtnQkFDSixpQkFBVTtnQkFDVixnQkFBUzthQUNaO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2dCQUNyQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB7IERhdGFBY2Nlc3MsIERhdGFMYXllciB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IFJlY2lwZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZWNpcGUvbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlY2lwZURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3JlY2lwZS9kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRlc3RDb21wb25lbnQgfSBmcm9tIFwiLi90ZXN0L3Rlc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcblx0XHQgICAgJ2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnXG5cdFx0fSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvcmUsXG4gICAgICAgIERhdGFBY2Nlc3MsXG4gICAgICAgIERhdGFMYXllclxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXG4gICAgICAgIFJlY2lwZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=