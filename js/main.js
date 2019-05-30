// When the user clicks on the button, toggle between hiding and showing the dropdown content */
    function openDropdown() {
        document.getElementById("userDropdown").classList.toggle("show");
    }

// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    function toggleSidebar() {
        document.getElementById("sidebar").classList.toggle('wide');
        document.getElementById("main").classList.toggle('active');
        document.getElementById("head-menu-left").classList.toggle('wide');
    }

    function narrowSidebarOnMobile(x) {
        if (x.matches) { // If media query matches
            document.getElementById("sidebar").classList.remove("wide");
            document.getElementById("main").classList.remove("active");
            document.getElementById("head-menu-left").classList.remove("wide");
        }
    }

    var x = window.matchMedia("(max-width: 700px)");
    narrowSidebarOnMobile(x);// Call listener function at run time
    x.addListener(narrowSidebarOnMobile);// Attach listener function on state changes

