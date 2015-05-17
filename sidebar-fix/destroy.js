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
