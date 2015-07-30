//* TITLE Estufar's Sidebar Fix **//
//* VERSION 1.1 **//
//* DESCRIPTION  **//
//* DEVELOPER estufar **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.estufars_sidebar_fix = new Object({

	running: false,

	preferences: {
		"dashonly": {
			"text": "Only run on the dashboard",
			"default": false,
			"value": false
		}
	},

	run: function() {
		// XKit initialization
		XKit.tools.init_css("estufars_sidebar_fix");
		this.running = true;
		
		// check if the user wants it to run only on the dashboard
		movesidebar = true;
		if (XKit.extensions.estufars_sidebar_fix.preferences.dashonly.value === true) {
			if (document.location.href.indexOf('://www.tumblr.com/dashboard') === -1) {
				movesidebar = false;
			}
		}
		if (movesidebar) {
			// find the account button
			account = document.getElementById("account_button");
			// simulate a click to activate the menu
			account.click();
			// find the menu created because of the click
			popover = document.getElementsByClassName("popover--account-popover")[0];
			// find the sidebar to put the menu in
			sidebar = document.getElementById("right_column");
			// add a class to the menu so it can be removed if the extension is disabled
			popover.childNodes[0].classList.add("estufars_sidebar_fix");
			// move the menu to the sidebar
			sidebar.insertBefore(popover.childNodes[0], sidebar.firstChild);
			// remove the account button since the menu has been moved
			account.style.display = "none";
			// this needs to be delayed a second for some reason
			window.setTimeout(function() {
				// since the account button was clicked, tumblr still thinks it's up
				// simulate a click on the account button to make tumblr realize the menu is not up
				document.querySelector(".tab_nav_account.active").click();
			}, 1000); // 1 sec delay (in milliseconds)
		}
	},

	destroy: function() {
		// Called when extension is disabled
		// XKit initialization
		XKit.tools.remove_css("estufars_sidebar_fix");
		this.running = false;
		
		// find the account button
		account = document.getElementById("account_button");
		// find the sidebar
		sidebar = document.getElementsByClassName("estufars_sidebar_fix")[0];
		// make the account button visible again
		account.style.display = "inline-block";
		// find the popover to put the menu back in
		popover = document.getElementsByClassName("popover--account-popover")[0];
		// move the menu back into the popover
		popover.insertBefore(sidebar, popover.firstChild);
		// after .1 seconds
		window.setTimeout(function() {
			// simulate a click on the account button
			account.click();
			// after .1 more seconds
			window.setTimeout(function() {
				// make the popover visible again
				popover.style.display = "block";
				// hide the popover
				account.click();
			}, 100);
		}, 100);
	}

});
