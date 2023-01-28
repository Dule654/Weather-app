let button = document.querySelector('.btn').addEventListener('click', () => {
let telo = document.querySelector('body');
    telo.style.background = 'linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(img/images.jpg)'
    telo.style.backgroundSize = 'cover' ;
let display = document.querySelector('.display');
let infoDisplay = document.querySelector('.info');

    let input = document.querySelector('input').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.cod === '404' || data.cod === '400' )
        alert('Please check if you entered the name of city correctly')
       else{
        document.querySelector('.logIn').style.display = 'none';
        document.querySelector('.display').style.display = 'block'
        
        let name = data.name;
        let country = data.sys.country;
        let temp = data.main.temp;
        let feel = data.main.feels_like;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        let airP = data.main.pressure;
        let img = data.weather[0].icon;
        let wheatherDesc = data.weather[0].description
        let imgUrl = `http://openweathermap.org/img/w/${img}.png`

        display.innerHTML = 
            `
            <div class="header">
                <p class="pName">${name}</p>
                <p class="pCountry">Country: ${country}</p>
            </div>           
            <div class='info'>
            <div class='image'>
                <img src="${imgUrl}" alt="">
                <p class="descript">${wheatherDesc}</p>
                <p class="pOne">Temperature/Felling</p>${temp}°C / ${feel}°C</p>
            </div>
            <div class="grided">
                <p class="pThree">Min Temperature: ${minTemp}°C</p>
                <p class="pFour">Max Temperature: ${maxTemp}°C</p>
                <p class="pFIve">Air Pressure: ${airP}Pa</p>
            </div>`;
       }
    })
});






