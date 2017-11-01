import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { Core } from "./core";
import { DataAccess, DataLayer } from "./data";
import { RecipeListComponent } from "./recipe/list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/detail/recipe-detail.component";
import { RecipeLocalListComponent } from "./recipe/local-list/recipe-local-list.component";
import { RecipeLocalDetailComponent } from "./recipe/local-detail/recipe-local-detail.component";
import { TestComponent } from "./test/test.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeLocalListComponent,
        RecipeLocalDetailComponent,
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
        RecipeLocalListComponent,
        RecipeLocalDetailComponent,
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }