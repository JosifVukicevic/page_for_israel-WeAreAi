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
            break;
        case 'villas':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_villas.jpg")';
            break;
        case 'cars':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_cars.jpg")';
            break;
        case 'transfers':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_transfers.jpg")';
            break;
        case 'thingToDo':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_thingsToDo.jpg")';
            break;
        case 'charter':
            mainContainer.style.backgroundImage = 'url("Images/NASLOVNA_charter.jpg")';
            break;
        default:
            break;
    }
}

// Prvi tab - 'hotels'

document.addEventListener("DOMContentLoaded", function() {
    // Event listeneri za svako input polje
    var inputFields = document.querySelectorAll('.input-field input[type="button"]');
    inputFields.forEach(function(input) {
        input.addEventListener('click', function() {
            // Pozivanje funkcije na osnovu ID-a input polja
            var inputId = input.id;
            switch (inputId) {
                case 'goingTo':
                    openDestinationSelector();
                    break;
                case 'dates':
                    openDatesSelector();
                    break;
                case 'travelers':
                    openTravelersSelector();
                    break;
                default:
                    break;
            }
        });
    });
});


function openDestinationSelector() {
    toggleWindow('destinationWindow');
}

function openDatesSelector() {
    toggleWindow('datesWindow');
}

function openTravelersSelector() {
    toggleWindow('travelersWindow');
}

function toggleWindow(windowId) {
    var window = document.getElementById(windowId);
    if (window.style.display === 'none' || window.style.display === '') {
        window.style.display = 'block';
    } else {
        window.style.display = 'none';
    }
}

// Zatvaranje prozora ako korisnik klikne van prozora
document.addEventListener('click', function(event) {
    var windows = document.querySelectorAll('.selector-window');
    windows.forEach(function(window) {
        if (event.target !== window && !window.contains(event.target)) {
            window.style.display = 'none';
        }
    });
});


