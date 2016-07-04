interface IArtifact {
	id:string;
	extension:string;
	title:string;
	notes:string;
	materials:string[];
	complete:boolean;
	pixelated:boolean;
	backgroundColour:string;
}

export default IArtifact;
