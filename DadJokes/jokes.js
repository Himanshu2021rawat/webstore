

// fetch api using promises which is betteer mehtod then callback hell
// GET https://icanhazdadjoke.com/

// const generatejokes = ()=>{

// const setHeader = {

//     headers:{
//         Accept:"application/json"
//     }


// }


//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res)=>res.json())
//     .then((data)=>jokes.innerHTML = data.joke)
//     .catch((error)=>console.log(error))




    

// }



// jokesbtn.addEventListener('click',generatejokes);
// generatejokes();



//fetch api using async await 
const jokes = document.getElementById('jokes');
const jokesbtn = document.getElementById('jokesbtn');

const generatejokes = async()=>{
    const setHeader = {
        headers:{
            Accept:'application/json'
        }

    }

    let res = await fetch('https://icanhazdadjoke.com',setHeader)
    let data = await res.json()
    jokes.innerHTML = data.joke;



}   

jokesbtn.addEventListener('click',generatejokes)
generatejokes();


