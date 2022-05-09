let quote;
let startTime = 0;
fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createQuote(data);
    rng(data);
  });

function createQuote(data) {
  quote = document.createElement("h3");
  let random = rng(data);
  quote.innerHTML = data[random].text;
  console.log(data[random].text);
  document.body.appendChild(quote);
  quote.className = "quote";
  quote.id = "quote1";
  randomButton(data);
  deleteButton();
  textBox(data[random].text);
}
function randomButton(data) {
  let button = document.createElement("button");
  button.innerHTML = "Random Quote";
  document.body.appendChild(button);
  let br = document.createElement("br");
  document.body.appendChild(br);
  button.onclick = function () {
    changeQuote(data);
  };
}
function deleteButton() {
  let del = document.createElement("button");
  del.innerHTML = "Delete All";
  document.body.appendChild(del);
  del.onclick = function () {
    document.getElementById("box1");
    box1.value = "";
  };
}
function changeQuote(data) {
  let random = rng(data);
  quote.innerHTML = data[random].text;
  console.log(data[random].text);
  document.getElementById("box1").remove();
  if (
    document.getElementById("timeCounter") &&
    document.getElementById("wpmCounter")
  ) {
    document.getElementById("timeCounter").remove();
    document.getElementById("wpmCounter").remove();
  }
  textBox(data[random].text);
  document.getElementById("quote1").style = "color:white";
}
function rng(data) {
  let arrayLength = data.length;
  let random = Math.floor(Math.random() * arrayLength) + 1;
  return random;
}
function textBox(data) {
  let box = document.createElement("input");
  box.type = "text";
  box.placeholder = "type here";
  document.body.appendChild(box);
  box.className = "box";
  box.id = "box1";
  let x = true;
  box.oninput = function () {
    check(data);

    if (x) {
      startTime = Date.now();
      x = false;
    }
  };
}
function check(data) {
  let change = document.getElementById("box1").value;
  console.log(change);
  console.log(data);

  if (data == change) {
    wpm(data);
    console.log("correct");
    document.getElementById("quote1").style = "color:green";
  } else {
    console.log("incorrect");
    document.getElementById("quote1").style = "color:red";
  }
}
function wpm(data) {
  let endTime = Date.now();
  let time = (endTime - startTime) / 1000;
  let timeCounter = document.createElement("h1");
  timeCounter.id = "timeCounter";
  timeCounter.innerHTML = "Time: " + time;
  document.body.appendChild(timeCounter);
  let wpmCounter = document.createElement("h1");
  wpmCounter.id = "wpmCounter";
  wpmCounter.innerHTML = "WPM: " + Math.round(data.length / 5 / (time / 60));
  document.body.appendChild(wpmCounter);
}
