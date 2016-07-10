"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";

import Artifacts from "../../core/data/Artifacts";
import {Hud} from "../../components/hud/hud";

@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	directives: [Hud, RouterLink]
})

export class Home {

  public introDown:boolean = true;
	public Artifacts = Artifacts.filter(a => {return a.complete;});

  public introToggled(event:boolean) {
    this.introDown = event;
  }

}
