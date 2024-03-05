// Fiksiranje navbar-a

document.addEventListener('scroll', function () {
    var containerHeight = document.querySelector('.container').offsetHeight;
    var scrollTop = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (scrollTop > containerHeight) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});

// Funkcionalnosti za tabove

function changeTab(tabName) {
    var currentActiveTab = document.querySelector('.list_of_tabs .active-tab');
    currentActiveTab.classList.remove('active-tab');

    var newActiveTab = document.querySelector('.list_of_tabs li a[href="#' + tabName + '"]').parentNode;
    newActiveTab.classList.add('active-tab');

    var mainContainer = document.getElementById('main-container');
    switch (tabName) {
        case 'hotels':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_hotels.jpg")';
            showForm('hotels-form');
            break;
        case 'villas':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_villas.jpg")';
            showForm('villas-form');
            break;
        case 'cars':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_cars.jpg")';
            showForm('cars-form');
            break;
        case 'transfers':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_transfers.jpg")';
            showForm('transfers-form');
            break;
        case 'thingToDo':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_thingsToDo.jpg")';
            showForm('thingToDo-form');
            break;
        case 'charter':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_charter.jpg")';
            showForm('charter-form');
            break;
        default:
            break;
    }
}

function showForm(formId) {
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        if (form.id === formId) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
}



// Hover ikonica

var hoverElements = document.querySelectorAll(".goingTo");

hoverElements.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        var icon = element.querySelector(".iconForHover");
        icon.src = "Icons/location_icon_white.png";
    });

    element.addEventListener("mouseout", function() {
        var icon = element.querySelector(".iconForHover");
        icon.src = "Icons/location_icon.png";
    });
});

// SEARCH BAR

// prikazivanje i uklanjanje DESTINATION bara

function openDestinationSelector() {
    var chooseDestination = document.getElementById("chooseDestination");
    if (chooseDestination.style.display === "none" || chooseDestination.style.display === "") {
        chooseDestination.style.display = "block";
        window.addEventListener("click", closeDestinationSelectorOutside);
    } else {
        chooseDestination.style.display = "none";
        window.removeEventListener("click", closeDestinationSelectorOutside);
    }
}

function closeDestinationSelectorOutside(event) {
    var chooseDestination = document.getElementById("chooseDestination");
    var goingToInput = document.getElementById("goingTo");
    if (!chooseDestination.contains(event.target) && event.target !== goingToInput) {
        chooseDestination.style.display = "none";
        window.removeEventListener("click", closeDestinationSelectorOutside);
    }
}


// prikazivanje i ukljanjanje TRAVELERS bara

function openTravelersSelector() {
    var dropdownTravelers = document.getElementById("dropdown-travelers");
    if (dropdownTravelers.style.display === "none" || dropdownTravelers.style.display === "") {
        dropdownTravelers.style.display = "block";
        window.addEventListener("click", closeTravelersSelectorOutside);
    } else {
        dropdownTravelers.style.display = "none";
        window.removeEventListener("click", closeTravelersSelectorOutside);
    }
}

function closeTravelersSelectorOutside(event) {
    var dropdownTravelers = document.getElementById("dropdown-travelers");
    var travelersInput = document.getElementById("travelers");
    if (!dropdownTravelers.contains(event.target) && event.target !== travelersInput) {
        dropdownTravelers.style.display = "none";
        window.removeEventListener("click", closeTravelersSelectorOutside);
    }
}



// Tabovi


// Main Search button
