import { Component, OnInit } from '@angular/core';
import { TextView } from "ui/text-view";
import { isIOS } from "platform";
import { Core } from "../../core";
import { DataLayer, DataAccess, RecipeInfo } from "../../data";
import * as imagepicker from "nativescript-imagepicker";

@Component({
  moduleId: module.id,
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  imageURL: string;
  isEditing: boolean = false;
  editingTextView: TextView;

  constructor(public core: Core, private DA: DataAccess, private DL: DataLayer) {
    if(this.DL.Recipe == null) {
      this.DL.Recipe = new RecipeInfo(DL.NO_IMAGE_URL);
    }

    if(!this.DL.Recipe.ImageURL)
      this.DL.Recipe.ImageURL = DL.NO_IMAGE_URL;

    this.imageURL = this.DL.Recipe.ImageURL;
  }

  public StartEdit(args) {
    this.editingTextView = <TextView>args.object;
    this.isEditing = true;
  }

  public StopEdit() {
    this.isEditing = false;
    this.editingTextView.dismissSoftInput();
  }

  public SelectImage() {
    let context = imagepicker.create({
      mode: "single"
    });

    context.authorize()
    .then(() => {
        return context.present();
    })
    .then(images => {
      images.forEach(image => {
        let selected = image.fileUri;
        let source = selected;
        image.getImage().then(imagesource => {
          if (isIOS) {
            source =  selected.substr(7, selected.length)
            let path = this.DL.GetPath(this.DL.Recipe.Name + '.png');
            let saved = imagesource.saveToFile(path, "jpeg");
            if(saved)
              console.log("saved image "+path)
            else
              console.log("Did NOT save image on iOS: "+path)

            source = path;
          }

          this.DL.IsUploading = true;
          this.DA.SaveImage(source, 'images/recipes/' + this.DL.Recipe.Name + '.png');
        });
      });
    });
  }

  public Login() {
    this.DA.Login();
  }

  public LoadComponent(selector: string) {
    this.core.LoadComponent(selector);
  }

  public Save() {
    this.DA.RecipeSave();
    this.loadList();
  }

  public Cancel() {
    this.loadList();
  }

  private loadList() {
    this.LoadComponent("recipe-list");
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Recipe Details";
    this.DA.ImageUploaded.subscribe(url => {
      this.imageURL = url;
      this.DL.Recipe.ImageURL = url;
      this.DL.IsUploading = false;
    });
  }
}
