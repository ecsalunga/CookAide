import { Injectable, NgZone } from '@angular/core';
import { Core } from "../core";
import fs = require('file-system');
import firebase = require("nativescript-plugin-firebase");
import * as imagepicker from "nativescript-imagepicker";
import { isIOS } from "platform";
import { RecipeInfo } from "./";

@Injectable()
export class DataLayer {
    TITLE: string;
    User: firebase.User;

    NO_IMAGE_URL: string = "res://images/noimage";
    DATA_UploadStatus: Number;
    DATA_FS_PATH: string = fs.knownFolders.documents().path;
    IsUploading: boolean = false;

    Recipe: RecipeInfo;
    Recipes: Array<RecipeInfo>;

    constructor(private core: Core, public ngZone: NgZone) {}

    public LoadComponent(selector: string) {
        this.core.LoadComponent(selector);
    }

    public GetPath(fileName: string): string {
        return fs.path.join(this.DATA_FS_PATH, fileName);
    }
}