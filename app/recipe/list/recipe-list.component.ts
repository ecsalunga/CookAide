import { Component, OnInit } from '@angular/core';
import { Core } from "../../core";
import { DataLayer, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private core: Core, private DL: DataLayer) {}

  public onItemTap(args) {
    this.DL.Recipe = Object.assign({}, this.DL.Recipes[args.index]);
    this.LoadDetail();
  }

  public Add() {
    this.DL.Recipe = null;
    this.LoadDetail();
  }

  private LoadDetail() {
    this.DL.LoadComponent("recipe-detail");
  }

  ngOnInit() { 
    this.DL.TITLE = "Recipe List";
  }
}
