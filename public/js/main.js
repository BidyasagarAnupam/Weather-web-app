const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "Please write the city name before your search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=198ce7c33520dcf505f996b73967c43b&units=metric`;

      const responce = await fetch(url);
      const data = await responce.json();

      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = `${arrData[0].main.temp}`;
      //   temp_status.innerText = arrData[0].weather[0].main;

      const tempStatus = arrData[0].weather[0].main;

      if (tempStatus == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }

      datahide.classList.remove("data_hide");

    } catch (error) {
      city_name.innerText = "Please write the city name properly or check your internet connectivity";
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
