import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

import { DataLayer } from "./";
import { RecipeDAL, RecipeInfo } from "./";

@Injectable()
export class DataAccess {
    RecipeDAL: RecipeDAL;

    constructor(private DL: DataLayer) {
        this.RecipeDAL = new RecipeDAL(this.DL);
    }

    public Load() {
        this.RecipeDAL.Load();
        this.userChanged();
    }

    public RecipeSave() {
        this.RecipeDAL.Save(this.DL.Recipe);
    }

    private userChanged() {
        let listener = {
            onAuthStateChanged: (data) => {
              console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
              if (data.loggedIn) {
                console.log("User info", data.user.uid);
                this.DL.User = data.user;
                this.DL.UserID = data.user.uid;
              }
            },
            thisArg: this
          };
        
        firebase.addAuthStateListener(listener);
    }
}