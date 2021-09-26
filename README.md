# Siemens Challenge - HackZurich 2021

http://hackzurich.siemens.cool/#/

> Debug our train tracks!

> Even train tracks need debugging - use your skills to turn track-side data and geo-information into a failure prediction algorithm that feeds a frontend you create. Collaborate with us and help increase the stability of train networks. Choo-choo!

https://devpost.com/software/subsiemens

---

The client is based on https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

We were not able to get things working during the hackathon. It's a shame, but it's how things go sometimes.

---

_Run the client and pypubsub service with:_

> docker-compose up --build

Still to do is to feed data to the pypubsub service:

```
import requests
requests.put('http://localhost:2070/anamoly', json = {"lat": 0.0, "lng": 0.0, "predicted_failure_in": "1W"})
```

