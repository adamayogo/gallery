"use strict";

// import Angular 2
import {Component} from "angular2/core";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";

// app components
import {Home} from "../pages/home/home";
import {View} from "../pages/view/view";
import {Hud} from "../components/hud/hud";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
	selector: "app",
	templateUrl: "core/app.template.html", //template: "<router-outlet></router-outlet>",
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: "/", component: Home, as: "Home", data: undefined }, // the as serves as alias for links, etc
	{ path: ":id", component: View, as: "View", data: undefined } // the as serves as alias for links, etc
])
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}

