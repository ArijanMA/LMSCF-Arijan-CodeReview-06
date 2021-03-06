var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objectLocation;
var objectRestaurants;
var objectEvents;
objectLocation = [];
objectRestaurants = [];
objectEvents = [];
var thePlace = ["Salzburg, Austria", "Paris, R. of France", "NewYorkCity, USA", "Skopje, N.Macedonia"];
var imgPlaces = ["img/salzburg.jpg", "img/paris.jpeg", "img/newyork.jpg", "img/skopje.jpg"];
var descPlace = ["vLorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis"];
var theRest = ["Biss DaTo", "Les Ombres at Musée de Quai Branly", "Corona", "Restaurant 4"];
var adressRest = ["Münchner Bundesstr. 114 Top 5", "27 Quai Branly", "Brodway 324 UWS", "1732 nr.4, Skopje 1000, R.N.Macedonia"];
var zip = ["5020", "2244", "7743", "1732"];
var linkRest = ["http:// www.bissdato.at/", "https://bonjourparis.com/", "https://www.coronarest.com/", "https://www.parkhotel.mk/"];
var numberRest = ["+43(1)5854900", "01 47 53 68 00", "+43(1) 95294343", "+389 2 551 5173"];
var imgRest = ["img/bisdato.jpg", "img/Bonjur.jpg", "img/coronarest.jpg", "img/restaurant4.jpg"];
var eventName = ["Festival", "Gypsy- the musical", "Boat Party", "Philharmonie Conzert"];
var eventDate = ["12.3.2021", "16.9.2021", "28.6.2021", "17.1.2021"];
var eventTime = ["17:00", "19:30", "22:00", "20:00"];
var imgEvent = ["img/festival.jpg", "img/gypsy.jpg", "img/boatparty.jpeg", "img/skopjeevent.jpg"];
var linkEvent = ["http:// www.bissdato.at/", "https://bonjourparis.com/", "https://www.hornblower.com/", "https://www.parkhotel.mk/"];
var theLocation = /** @class */ (function () {
    function theLocation(imgPlaces, thePlace, zip, descPlace) {
        this.imgPlaces = imgPlaces;
        this.thePlace = thePlace;
        this.zip = zip;
        this.descPlace = descPlace;
    }
    return theLocation;
}());
var theRestaurants = /** @class */ (function (_super) {
    __extends(theRestaurants, _super);
    function theRestaurants(imgPlaces, thePlace, zip, descPlace, theRest, adressRest, linkRest, numberRest, imgRest) {
        var _this = _super.call(this, imgPlaces, thePlace, zip, descPlace) || this;
        _this.theRest = theRest;
        _this.adressRest = adressRest;
        _this.linkRest = linkRest;
        _this.numberRest = numberRest;
        _this.imgRest = imgRest;
        return _this;
    }
    return theRestaurants;
}(theLocation));
var theEvents = /** @class */ (function (_super) {
    __extends(theEvents, _super);
    function theEvents(imgPlaces, thePlace, zip, descPlace, eventName, eventDate, eventTime, imgEvent, linkEvent) {
        var _this = _super.call(this, imgPlaces, thePlace, zip, descPlace) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.imgEvent = imgEvent;
        _this.linkEvent = linkEvent;
        return _this;
    }
    return theEvents;
}(theLocation));
function createLocation() {
    for (var i = 0; i < 4; i++) {
        var place = new theLocation(imgPlaces[i], thePlace[i], zip[i], descPlace[i]);
        objectLocation.push(place);
    }
}
function visibleLocation() {
    var visibleLoc = "";
    for (var i = 0; i < objectLocation.length; i++) {
        visibleLoc += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n     \n            <p class=\"h5 p-3\">" + objectLocation[i].thePlace + "</p>\n            <p class=\"hoverLocation\"><img src=\"" + objectLocation[i].imgPlaces + "\" class=\"imgLoc\" alt=\"img\"></p>\n        \n        <p class=\"d-none\">" + objectLocation[i].zip + "</p>\n        <p class=\"hideDesc\">" + objectLocation[i].descPlace + "</p>\n        </div>\n\n        ";
    }
    document.getElementById("inhalt").innerHTML = visibleLoc;
}
function createRestaurant() {
    for (var i = 0; i < 4; i++) {
        var restaurants = new theRestaurants(imgPlaces[i], thePlace[i], zip[i], descPlace[i], theRest[i], adressRest[i], linkRest[i], numberRest[i], imgRest[i]);
        objectRestaurants.push(restaurants);
    }
}
function visibleRestaurant() {
    var visibleRes = "";
    for (var i = 0; i < objectRestaurants.length; i++) {
        visibleRes += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n       \n        <p class=\"h5 p-3\">Restaurant in " + objectRestaurants[i].thePlace + "</p>\n            <p class=\"hoverRest\"><img src=\"" + objectRestaurants[i].imgRest + "\" class=\"imgLoc\" alt=\"img\"></p>\n            <p>" + objectRestaurants[i].theRest + "</p>\n            <div class=\"hideRest\">\n            <p>" + objectRestaurants[i].zip + "</p>\n            <p>" + objectRestaurants[i].adressRest + "</p>\n            <p><a href=\"" + objectRestaurants[i].linkRest + "\">" + objectRestaurants[i].linkRest + "</a></p>\n            <p>" + objectRestaurants[i].numberRest + "</p>\n            </div>\n        </div>\n            ";
    }
    ;
    document.getElementById("inhalt1").innerHTML = visibleRes;
}
;
function createEvent() {
    for (var i = 0; i < 4; i++) {
        var events = new theEvents(imgPlaces[i], thePlace[i], zip[i], descPlace[i], eventName[i], eventDate[i], eventTime[i], imgEvent[i], linkEvent[i]);
        objectEvents.push(events);
    }
    ;
}
;
function visibleEvent() {
    var visibleEv = "";
    for (var i = 0; i < objectEvents.length; i++) {
        visibleEv += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n        \n            <p class=\"h5 p-3\">Event in " + objectEvents[i].thePlace + "</p>\n            <p class=\"hoverEvent\"><img src=\"" + objectEvents[i].imgEvent + "\" class=\"imgLoc\" alt=\"img\"></p>\n            <p>" + objectEvents[i].eventName + "</p>\n       \n            <div class=\"hideEvent\">\n            <p>" + objectEvents[i].zip + "</p>\n            <p>" + objectEvents[i].eventDate + "</p>\n            <p>" + objectEvents[i].eventTime + "</p>\n            <p><a href=\"" + objectEvents[i].linkEvent + "\">" + objectEvents[i].linkEvent + "</a></p>\n            </div>\n        </div>\n            ";
    }
    ;
    document.getElementById("inhalt2").innerHTML = visibleEv;
}
;
createLocation();
visibleLocation();
createRestaurant();
visibleRestaurant();
createEvent();
visibleEvent();
$(document).ready(function () {
    $(".hoverLocation").hover(function () {
        $(this).parent().find(".hideDesc").toggle();
    });
    $(".hoverRest").hover(function () {
        $(this).parent().find(".hideRest").toggle();
    });
    $(".hoverEvent").hover(function () {
        $(this).parent().find(".hideEvent").toggle();
    });
});