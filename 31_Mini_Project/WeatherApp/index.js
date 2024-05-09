console.log('Hello Jee Subrat');
const API_KEY = "d8f335330984a63b79e2ff183596079e";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{
        // let latitude = 15.3333;
        // let longistude = 74.0833;
        let city = "Bhubaneswar";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        // console.log("Weather data:->" + data);
        console.log("Weather data:->", data);

        renderWeatherInfo(data);
    }
    catch(err){
        // handle the error here
    }


}

async function getCustomWeatherDetails() {
    try{
        let latitude = 15.6334;
        let longitude = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units-metric`);
        let data = await result.json();

        console.log(data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error Found", err);
    }
    
}

//---------------Switching between two Uis-------------------
function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== CurrentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }
    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        // getFromSessionStorage();
    }

    // console.log("Current tab", currentTab);
}

//----------------fetch Current Geolocation.------------------
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Supports");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}

