import "./style.css";
var client = require("./client.js");
var globalMap;

class PubMap {
    map: google.maps.Map;
    constructor() {
        this.map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            zoom: 12,
            center: { lat: 47.3877, lng: 8.2554 },
          }
        );
    }

    initMap() {
        const argau = { lat: 47.3877, lng: 8.2554 };
        const contentString = `Aargau (German: Kanton Aargau [ˈaːrɡaʊ] (About this soundlisten); sometimes Latinized as Argovia; see also other names), more formally[3] the Canton of Aargau, is one of the 26 cantons forming the Swiss Confederation. It is composed of eleven districts and its capital is Aarau.

      Aargau is one of the most northerly cantons of Switzerland. It is situated by the lower course of the Aare River, which is why the canton is called Aar-gau (meaning "Aare province"). It is one of the most densely populated regions of Switzerland.`

        this.addMarker(argau, "Canton Argau", contentString);
    }

    addMarker(coordinate, title, text) {
        const infowindow = new google.maps.InfoWindow({
            content: text,
        });

        const marker = new google.maps.Marker({
            position: coordinate,
            map: this.map,
            title: title
        });

        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map: this.map,
              shouldFocus: false,
            });
        });
    }

    process(payload) {
        // ping-back?
        if (payload.stillalive) {
            console.log("Got a ping-back");
            alert("Ping!");
        // Actual payload? process it!
        } else {
            console.log("Got a payload from PyPubSub!");
            console.log(payload);
            alert("PAYLOAD");
            // TODO: add marker using payload data
            //addMarker(payload.coordinate, payload.description);
        }
    }
}

const pubMap = new PubMap();

const pubSub = new client.PyPubSub("http://localhost:2070/");
pubSub.attach(pubMap.process)

export { pubMap };
