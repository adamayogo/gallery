"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES, Router} from "angular2/router";

import Artifacts from "../../core/data/Artifacts";
import IArtifact from "../../core/data/IArtifact";
import {Hud} from "../../components/hud/hud";

@Component({
	selector: "page-view",
	templateUrl: "pages/view/view.template.html",
	directives: [Hud, ROUTER_DIRECTIVES]
})

export class View {

	public router:Router;
	public Artifacts = Artifacts.filter((a) => {return a.complete;});
	public idValid:boolean = false;
	public imageLoaded:boolean = false;
	public currentId:string;
	public currentArtifact:IArtifact;
	
	private _keyboardEventListener:EventListener;

	constructor(routeParams:RouteParams, router:Router) {
		if (routeParams.params['id']) {
			for (let i=0, l=Artifacts.length; i<l; i++) {
				if (Artifacts[i].id === routeParams.params['id']) {
				this.currentArtifact = Artifacts[i]; 
					this.currentId = this.currentArtifact.id;
					this.idValid = true;
					this.loadImage();
				}
			}
		}
		this.router = router;
	}
	
	private ngAfterViewInit():void {
		this._keyboardEventListener = this.handleKeypress.bind(this);
		document.addEventListener('keydown', this._keyboardEventListener);
	}
	private ngOnDestroy():void {
		document.removeEventListener('keydown', this._keyboardEventListener);
	}
	
	private handleKeypress(evt:KeyboardEvent):void {
		let destination:string;
		switch (evt.keyCode) {
			case 37:
				destination = this.previousId;
				break;
			case 39:
				destination = this.nextId;
				break;
		}
		if (destination && (! this.router.parent.navigating)) {
			this.router.navigate(['', 'View', { id: destination }]);
		}
	}
	
	private loadImage():void {
		let img = new Image();
		img.onload = () => {
      this.imageLoaded = true;
    };
    img.src = this.assetUrl;
	}
	
	public infoToggled(event:boolean):void {
		return undefined;
	}
	
  
  public get assetUrl():string {
    return `images/artifacts/${this.currentArtifact.id}.${this.currentArtifact.extension}`;
  }
	
	public get previousId():string {
		if (! this.idValid) {
			return '';
		}
		let prevNum = parseInt(this.currentId, 10) - 1;
		if ((prevNum >= 1) && (prevNum <= 100)) {
			return ('0' + prevNum).substr(-2);
		}
		return '';
	}
	
	public get nextId():string {
		if (! this.idValid) {
			return '';
		}
		let nextNum = parseInt(this.currentId, 10) + 1;
		if (nextNum === 100) {
			return '100';
		}
		if ((nextNum >= 1) && (nextNum <= 100)) {
			return ('0' + nextNum).substr(-2);
		}
		return '';
	}
	
	public get infoDown():boolean { return Hud.infoDown; }
	
}
