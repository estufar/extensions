// XKit initialization
XKit.tools.init_css("estufars_sidebar_fix");
this.running = true;

// find the account button
account = document.getElementById("account_button");
// simulate a click to activate the menu
account.click();
// find the menu created because of the click
popover = document.getElementsByClassName("popover--account-popover")[0];
// find the sidebar to put the menu in
sidebar = document.getElementById("right_column")
// add a class to the menu so it can be removed if the extension is disabled
popover.childNodes[0].classList.add("estufars_sidebar_fix");
// move the menu to the sidebar
sidebar.insertBefore(popover.childNodes[0], sidebar.firstChild);
// remove the account button since the menu has been moved
account.style.display = "none";
// this needs to be delayed a second for some reason
window.setTimeout(function() {
	// since the account button was clicked, tumblr still thinks it's up
	// simulate a click on the logo to make tumblr realize the menu is not up
	document.getElementsByClassName("logo-anchor")[0].click();
}, 1000); // 1 sec delay (in milliseconds)
