import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { AppComponent } from "./app.component";
import { Core } from "./core";
import { DataAccess, DataLayer } from "./data";
import { RecipeListComponent } from "./recipe/list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/detail/recipe-detail.component";
import { TestComponent } from "./test/test.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        TNSFontIconModule.forRoot({
		    'fa': './assets/font-awesome.css'
		})
    ],
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        TestComponent
    ],
    providers: [
        Core,
        DataAccess,
        DataLayer
    ],
    entryComponents: [
        RecipeListComponent,
        RecipeDetailComponent,
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }