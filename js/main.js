

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    function openDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
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

    function myFunction(x) {
        if (x.matches) { // If media query matches
            var element = document.getElementById("sidebar");
            element.classList.remove("wide");

            var element2 = document.getElementById("main");
            element2.classList.remove("active");

            var element3 = document.getElementById("head-menu-left");
            element3.classList.remove("wide");


        } else {
            // document.body.style.backgroundColor = "pink";
        }
    }

    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

