"use strict";

// import Angular 2
import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
	selector: "hud",
	templateUrl: "components/hud/hud.template.html",
	directives: []
})
export class Hud {
	
	@Input()  public infoButton:boolean;
	@Input()  public introButton:boolean;
	@Output() public infoToggled:EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() public introToggled:EventEmitter<boolean> = new EventEmitter<boolean>();
	public static infoDown:boolean = true;
	public introDown:boolean = true;
	
	public toggleInfo():void {
		this.infoDown = ! this.infoDown;
		if (this.infoToggled) {
			this.infoToggled.emit(this.infoDown);
		}
	}
  
	public toggleIntro():void {
		this.introDown = ! this.introDown;
		if (this.introToggled) {
			this.introToggled.emit(this.introDown);
		}
	}
	
	public get infoDown():boolean { return Hud.infoDown; }
	public set infoDown(value:boolean) { Hud.infoDown = value; }
	
}
