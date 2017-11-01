import { Injectable, EventEmitter } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

import { DataLayer } from "./";
import { RecipeDAL, RecipeInfo } from "./";

@Injectable()
export class DataAccess {
    RecipeDAL: RecipeDAL;
    ImageUploaded: EventEmitter<string> = new EventEmitter();

    constructor(private DL: DataLayer) {
        this.RecipeDAL = new RecipeDAL(this.DL);
    }

    public Load() {
        this.RecipeDAL.Load();
        this.userChanged();
    }

    public Login() {
        firebase.login({
          type: firebase.LoginType.FACEBOOK
        }).then(user => {
            this.DL.User = user;
          },
          (errorMessage) => {
            console.log("facebook login error: " + errorMessage);
          }
        );
      }

    public RecipeSave() {
        this.RecipeDAL.Save(this.DL.Recipe);
    }

    public RecipeLocalSave(){
        this.RecipeDAL.SaveLocal(this.DL.Recipe);
    }

    public UploadImage(source: string, path: string) {
        this.DL.DATA_UploadProgress = 0;
        firebase.uploadFile({
            remoteFullPath: path,
            localFullPath: source,
            onProgress: (status) => {
                this.DL.ngZone.run(() => {
                    this.DL.DATA_UploadProgress = status.percentageCompleted;
                });
            }
        })
        .then(uploadedFile => {
                let uploaded = JSON.parse(JSON.stringify(uploadedFile));
                this.ImageUploaded.emit(uploaded.url);
            },
            (error) => {
                console.log("UploadImage: " + error);
            }
        );
    }

    private userChanged() {
        let listener = {
            onAuthStateChanged: (data) => {
              console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
              if (data.loggedIn)
                this.DL.User = data.user;
            },
            thisArg: this
        };
        
        firebase.addAuthStateListener(listener);
    }
}