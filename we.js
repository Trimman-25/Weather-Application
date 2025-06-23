const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const wind=document.querySelector(".wind");
const humidity=document.querySelector(".humidity");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


 const apikey = "ec2cb8d69af1952b783d724050aa9f1f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkwhether(cityname) {
    const response =await fetch(apiURL+cityname +`&appid=${apikey}`);

    if(response.status ==400) {
        alert("City not found");
        return;
    }
    const data =await response.json();
    temp.innerHTML=Math.round(data.main.temp)+" °C";
    city.innerHTML =data.name;
    wind.innerHTML=data.wind.speed +"Km/Hr";
    humidity.innerHTML =data.main.humidity+"%";

  
}

  searchBtn.addEventListener("click",() =>{
        checkwhether(searchBox.value);
    })

    searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkwhether(searchBox.value);
    }
});