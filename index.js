let quote;

fetch("https://type.fit/api/quotes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createQuote(data);
  });

function createQuote(data) {
  quote = document.createElement("h3");
  let random = rng();
  quote.innerHTML = data[random].text;
  console.log(data[rng()].text);
  document.body.appendChild(quote);
  quote.className = "quote";
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
  quote.innerHTML = data[rng()].text;
  console.log(data[rng()].text);
}
function rng() {
  let random = Math.floor(Math.random() * 1000) + 1;
  console.log(random);
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
  if (data == change) {
    console.log("correct");
  } else {
    console.log("incorrect");
    let x = false;
  }
}
