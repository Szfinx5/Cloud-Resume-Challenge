console.log("Hey im working over here");
let counter = document.querySelector(".counter-number");

async function updateCounter() {
  let response = await fetch(
    "https://nhlqefa1je.execute-api.eu-west-1.amazonaws.com/prod"
  );
  let data = await response.json();
  counter.innerHTML = `You are the ${data}. visitor to my Cloud Resume Challenge site`;
}

updateCounter();
