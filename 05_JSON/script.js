function createCORSRequest(method, url) {
  const xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

const xhr = createCORSRequest('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22brisbane%2C%20qld%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
if (!xhr) {
  throw new Error('CORS not supported');
}

xhr.onload = function() {
  const responseText = xhr.responseText;
  // console.log(responseText);
  // process the response.
  weather_data = new Weather(responseText);

 };
 
 xhr.onerror = function() {
   console.log('There was an error!');
 };

xhr.send();


class Weather {
  constructor(data) {
    this.data = JSON.parse(data)
  }

  // getters -- can be used for authentication
  get sunrise() {
    return this.fixTime(this.data.query.results.channel.astronomy.sunrise)
  }

  get sunset() {
    return this.fixTime(this.data.query.results.channel.astronomy.sunset)
  }

  // Replaced with Math.fToC
  // temperature(temp) {
    // const temp = temp this.data.query.results.channel.item.condition.temp;
    // return ((temp - 32) * 0.5556).toFixed(2)
    // return Math.round(this.temp).toFixed(1)
    // console.log(temp)
  // }

  get forecast() {
    return this.data.query.results.channel.item.forecast
  }

  showForecast() {
    document.write('<table border=1>')
    this.forecast.forEach( forecast => {
      document.write('<tr>');
        document.write(`
        <td>${forecast.day}</td>
        <td>${Math.fToC(forecast.high)}</td>
        <td>${Math.fToC(forecast.low)}</td>
        <td>${forecast.date}</td>
      `);
      document.write('</tr>')
    })
      document.write('</table>')
  }

  fixTime(time) {
    let x = time.split(/[: ]/);
    let mins = (x[1] + '0').substring(0, 2)
    return `${x[0]}:${mins}${x[2]}`
  }

  
}

Math.fToC = function(f) {
  return ((parseFloat(f) - 32) * 0.5556).toFixed(2)    
}
