// Identify HTML, CSS elements by Id or Class

const menuButton = document.querySelector(".menu-button");

const navigation = document.querySelector(".main-navigation");

const menuIcon = menuButton.querySelector("i");

const navigatioLinks = document.querySelectorAll(".main-navigation a");

// 


// Function that opens Menu by changing CSS
function openMenu() {
    navigation.classList.add("menu-open");
    
    document.body.classList.add("menu-is-open");

    menuButton.setAttribute(
        "arial-expanded",
        "true"
    );

    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");

    const firstNavigationLink = navigation.querySelector(".nav-list a")

    firstNavigationLink.focus();
}

// 

// Opposite to previous, function Close Menu by the same way, change CSS to close menu
function closeMenu(){
    navigation.classList.remove("menu-open");

    document.body.classList.remove("menu-is-open");

    menuButton.setAttribute(
        "arial-expanded",
        "false"
    );

    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
}
// 

// Making Menu button togglable by If else statements
function toggleMenu() {
    const menuIsOpen =
        navigation.classList.contains("menu-open");

    if (menuIsOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}
// 


// Link functions to button
menuButton.addEventListener(
    "click",
    toggleMenu
);

document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            navigation.classList.contains("menu-open")
        ) {
            closeMenu();
            menuButton.focus();
        }
    }
);

navigatioLinks.forEach(
    function(link){
        link.addEventListener(
            "click",
            closeMenu
        );
    }
);
// 

// Remove or add openable Menu independ to screen size.
window.addEventListener(
    "resize",
    function(){
        if (this.window.innerWidth >= 800){
            closeMenu();
        }
    }
);
// 