import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { Core } from "../core";
import fs = require('file-system');
import is = require('image-source');
import firebase = require("nativescript-plugin-firebase");
import * as imagepicker from "nativescript-imagepicker";
import { isIOS } from "platform";
import { RecipeInfo } from "./";

@Injectable()
export class DataLayer {
    ImageSelected: EventEmitter<string> = new EventEmitter();

    TITLE: string;
    User: firebase.User;

    NO_IMAGE_URL: string = "res://images/noimage";
    DATA_UploadProgress: Number = 0;
    DATA_FS_PATH: string = fs.knownFolders.documents().path;
    IsUploading: boolean = false;

    Recipe: RecipeInfo;
    Recipes: Array<RecipeInfo>;

    constructor(private core: Core, public ngZone: NgZone) {}

    public LoadComponent(selector: string) {
        this.core.LoadComponent(selector);
    }

    public SelectImage(importName: string) {
        let context = imagepicker.create({
            mode: "single"
        });
      
        context.authorize().then(() => {
            return context.present();
        }).then(images => {
            images.forEach(image => {
                let source = image.fileUri;
                if (isIOS) {
                    image.getImage().then(imagesource => {
                        source = this.GetPath(importName + '.png');
                        imagesource.saveToFile(source, "png");
                        this.ImageSelected.emit(source);
                    });
                }
                else
                    this.ImageSelected.emit(source);
            });
        },
        (error) => {
            console.log("SelectImage: " + error);
        });
    }

    public GetPath(fileName: string): string {
        return fs.path.join(this.DATA_FS_PATH, fileName);
    }

    public GetKey(): number {
        return this.core.DateToNumber(new Date());
    }
}