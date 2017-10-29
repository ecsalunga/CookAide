import { Component, OnInit } from '@angular/core';
import { TextView } from "ui/text-view";
import { Core } from "../../core";
import { DataLayer, DataAccess, RecipeInfo } from "../../data";

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
    this.DL.SelectImage(this.DL.Recipe.Name);
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
    this.DL.LoadComponent("recipe-list");
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Recipe Details";
    this.DA.ImageUploaded.subscribe(url => {
      this.imageURL = url;
      this.DL.Recipe.ImageURL = url;
      this.DL.IsUploading = false;
    });

    this.DL.ImageSelected.subscribe(source => {
      this.DL.IsUploading = true;
      this.DA.UploadImage(source, 'images/recipes/' + this.DL.Recipe.Name + '.png');
    })
  }
}
