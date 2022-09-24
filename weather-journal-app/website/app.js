

/* Global Variables */
let key = "b262fc3a857c1009487d744dcbb76fde";
let d = new Date();
let newDate = d.getMonth()+ 1 + '.' + d.getDate() + '.' + d.getFullYear();



const botton = document.querySelector("#generate");

botton.addEventListener("click", action);
// function that show the temp.
async function action() {
  const zipC = document.querySelector("#zip").value;

  const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipC}&appid=${key}&units=metric`;

  const dataBefore = await fetch(URL);

  const dataAfter = await dataBefore.json();

  const feelings = document.querySelector("#feelings").value;

  const tempreture = await dataAfter.main;

  const response = await fetch('/send', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: newDate,
      tempreture: tempreture,
      feelings: feelings,
    }),
  });
  const getData = await fetch('/receive' , {
  method: 'GET',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
});

  const data = await getData.json();

  console.log(data);
  document.querySelector("#date").innerHTML = `Date: ${data.date}`;
  document.querySelector("#temp").innerHTML = `The tempreture is ${data.tempreture.temp}°C`;
  document.querySelector("#content").innerHTML = `You are feeling ${data.feelings}`;
};