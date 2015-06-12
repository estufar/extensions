//* TITLE Estufar's Icon Fix **//
//* VERSION 1.0  **//
//* DESCRIPTION  **//
//* DEVELOPER estufar **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.estufars_icon_fix = new Object({

	running: false,
	
	preferences: {
		"retina": {
			text: "Retina display?",
			default: false,
			value: false
		}
	},

	run: function() {
		this.running = true;
		var icon = "https://i.imgur.com/5rOArbF.png";
		if (XKit.extensions.estufars_icon_fix.preferences.retina.value == true) {
			icon = "https://i.imgur.com/qBROSrM.png";
		}
		var estufarnewicon = document.createElement("meta");
		var currenticon = document.querySelector("link[rel=\"shortcut icon\"]");
		currenticon.setAttribute("href", icon);
	},

	destroy: function() {
		this.running = false;
		// I don't think there's much of a reason to include a proper destroy function
		// I mean, it's just a favicon
	}

});
