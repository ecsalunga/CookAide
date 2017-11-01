import { Component, OnInit } from '@angular/core';
import { TextView } from "ui/text-view";
import { Core } from "../../core";
import { DataLayer, DataAccess, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-local-detail',
  templateUrl: './recipe-local-detail.component.html',
  styleUrls: ['./recipe-local-detail.component.scss']
})
export class RecipeLocalDetailComponent implements OnInit {
  imageURL: string;
  isEditing: boolean = false;
  editingTextView: TextView;

  constructor(public core: Core, private DA: DataAccess, private DL: DataLayer) {
    if(this.DL.Recipe == null) {
      this.DL.Recipe = new RecipeInfo(DL.NO_IMAGE_URL);
      this.DL.Recipe.id = this.DL.GetKey.toString();
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
    this.DA.RecipeLocalSave();
    this.loadList();
  }

  public Cancel() {
    this.loadList();
  }

  private loadList() {
    this.DL.LoadComponent("recipe-local-list");
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Local Recipe Details";

    this.DL.ImageSelected.subscribe(url => {
      if(this.DL.TITLE == "Local Recipe Details") {
        this.imageURL = url;
        this.DL.Recipe.ImageURL = url;
      }
    })
  }
}
