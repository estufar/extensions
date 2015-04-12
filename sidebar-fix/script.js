//* TITLE Estufar's Sidebar Fix **//
//* VERSION 1.0 REV A **//
//* DESCRIPTION  **//
//* DEVELOPER estufar **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.estufars_sidebar_fix = new Object({

	running: false,

	run: function() {
		XKit.tools.init_css("estufars_sidebar_fix");
		this.running = true;
		account = document.getElementById("account_button");
		account.click();
		popover = document.getElementsByClassName("popover--account-popover")[0];
		sidebar = document.getElementById("right_column")
		popover.childNodes[0].classList.add("estufars_sidebar_fix");
		
		sidebar.insertBefore(popover.childNodes[0], sidebar.firstChild);
		
		account.style.display = "none";
		window.setTimeout(function() {
			document.getElementsByClassName("logo-anchor")[0].click();
		}, 1000);
	},

	destroy: function() {
		XKit.tools.remove_css("estufars_sidebar_fix");
		this.running = false;
		account = document.getElementById("account_button");
		sidebar = document.getElementsByClassName("estufars_sidebar_fix")[0];
		account.style.display = "inline-block";
		popover = document.getElementsByClassName("popover--account-popover")[0];
		popover.insertBefore(sidebar, popover.firstChild);
		window.setTimeout(function() {
			account.click();
			window.setTimeout(function() {
				popover.style.display = "block";
				account.click();
			}, 100);
		}, 100);
	}

});
