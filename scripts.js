const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

// create a request variable and asign a new XMHLhttprequest object to it.
var request = new XMLHttpRequest();

//open a new connection, using the GET request on the url endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  //Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300); //limits movie description to only 300 chars
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      //Log each movie's title
      console.log(movie.title);
      console.log(movie.description);
    });
  } else {
    console.log("error");
  }
};

// Send request
request.send();
