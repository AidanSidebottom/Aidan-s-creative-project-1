let quote;

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
  button(data);
  textBox(data[random].text);
}
function button(data) {
  let button = document.createElement("button");
  button.innerHTML = "Random Quote";
  document.body.appendChild(button);
  button.onclick = function () {
    changeQuote(data);
  };
}
function changeQuote(data) {
  let random = rng(data);
  quote.innerHTML = data[random].text;
  console.log(data[random].text);
  document.getElementById("box1").remove();
  textBox(data[random].text);
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

  box.oninput = function () {
    check(data);
  };
}
function check(data) {
  let change = document.getElementById("box1").value;
  console.log(change);
  console.log(data);
  if (data == change) {
    console.log("correct");
    document.getElementById("quote1").style = "color:green";
  } else {
    console.log("incorrect");
    document.getElementById("quote1").style = "color:red";
  }
}
