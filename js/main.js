function toggleSidebar() {
    document.getElementById("aside").classList.toggle('wide');
    document.getElementById("main").classList.toggle('active');
    document.getElementById("head-menu-left").classList.toggle('wide');
}

function narrowSidebarOnMobile(x) {
    if (x.matches) { // If media query matches
        document.getElementById("aside").classList.remove("wide");
        document.getElementById("main").classList.remove("active");
        document.getElementById("head-menu-left").classList.remove("wide");
    }
}

var x = window.matchMedia("(max-width: 700px)");
narrowSidebarOnMobile(x);// Call listener function at run time
x.addListener(narrowSidebarOnMobile);// Attach listener function on state changes

// dropdown
var submenu = document.getElementsByClassName("dropdown");

for (var i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener('click', menus, false);
}

function menus() {
    var menu = this.querySelector('.dropdown-menu');
    menu.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-btn i') ) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};