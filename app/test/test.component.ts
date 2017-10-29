import { Component, OnInit } from '@angular/core';
import { Core } from "../core";
import { DataLayer, DataAccess } from "../data";

@Component({
  moduleId: module.id,
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public core: Core, public DA: DataAccess, public DL: DataLayer) { }

  public Login() {
    this.DA.Login();
  }
  
  ngOnInit() {
    this.DL.TITLE = "Tester Page";
  }
}