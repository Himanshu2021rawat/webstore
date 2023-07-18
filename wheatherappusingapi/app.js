const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getwheather = async (city) => {
    weather.innerHTML =    ` <h2 style="text-align:center;">Loading... </h2>` 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  showwheather(data);
};

const showwheather = (data) => {
    if(data.cod == '404'){
        weather.innerHTML =    ` <h2 style="text-align:center;">City Not Found </h2>`
        return;
    }


  weather.innerHTML = ` <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" srcset="">
    </div>
    <div>
    <h2>${data.main.temp}&#8451;</h2>
        <h4 style="text-align: center;">${data.weather[0].main}</h4>

        </div>`
};

form.addEventListener("submit", function (event) {
  getwheather(search.value);
  event.preventDefault();
});
