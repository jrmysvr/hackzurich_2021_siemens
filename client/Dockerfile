from node:14-stretch

RUN git clone -b sample-infowindow-simple https://github.com/googlemaps/js-samples.git
RUN cd js-samples && npm i && npm install @babel/core https-browserify stream-http

COPY index.ts js-samples/src
COPY client.js js-samples/src

#WORKDIR js-samples
