

const apiKey ='ae3d04014d38be5e004aa55aa1d1e27d'
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric'
const wind = document.getElementById('wind')
const name = document.getElementById('nama')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const foto = document.querySelector('.cuaca-foto')
const inputKota = document.getElementById('search')
inputKota.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        onclicked();
    }
});
// let kota ='jakarta'

async function onclicked (){
    console.log('clicked')
   
    const kota = inputKota.value
    if (kota !== '' && kota != undefined){ 
        const result = await dataCuaca(kota)
        console.log(result)
        gantidata(result)
       
    } else {
       
        console.log('Mohon masukan kota')
    }
}
    
async function dataCuaca(kotaname){
    const dataWeb = await fetch(apiUrl +`&appid=${apiKey}&q=${kotaname}`)
    const dataJson = await dataWeb.json()
    return dataJson
}

function gantidata(data){
    if (data.name !=undefined){
        name.innerText = `${data.name}`
    }
    else{
        name.innerText = `Kota tidak terdaftar`
    }
    
    wind.innerText = `${data.wind.speed} km/h`
    temp.innerText = `${data.main.temp}°`
    humidity.innerText = `${data.main.humidity}%`
    let cuaca = data.weather[0].main
    console.log(cuaca)
    switch(cuaca){
        case 'Clouds' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/clouds.png" alt="Cuaca berawan">';
            break;
        case 'Clear' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Clear.png" alt="Cuaca berawan">';
            break;
        case 'Drizzle' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Drizzle.png" alt="Cuaca berawan">';
            break;
        case 'Snow' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Snow.png" alt="Cuaca berawan">';
            break;
        case 'Rain' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Rain.png" alt="Cuaca berawan">';
            break;
        case 'Snow' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Snow.png" alt="Cuaca berawan">';
            break;
        case 'Mist' :
            // console.log('berawan');
            foto.innerHTML = '<img src="photo/images/Mist.png" alt="Cuaca berawan">';
            break;
        
        default:
            console.log('Cuaca tidak dikenali');
    }
}


