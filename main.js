// var infos = [];
// const url = 'http://192.168.0.215:4000/';
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         infos = data;
//     })
//     .catch(err => console.error(err));

// setTimeout(() => {

//     infos.articles.map((info) => {
//     })


// }, 1000);



// let infos = [];
// const url = 'http://192.168.0.215:4000';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         infos = data;


//         // Ma'lumotlar kelib tushgandan keyin ishlash
//         if (infos.articles && Array.isArray(infos.articles)) {
//             infos.articles.forEach((info) => {

// const cardText = document.querySelector(".card-text")
// cardText.textContent = info._id

//             });
//         } 
//     })


var infos = [];
const url = 'http://192.168.0.215:4000';
fetch(url)
    .then(response => response.json())
    .then(data => {
        infos = data.data;
    })
    .catch(err => console.error(err));

setTimeout(() => {
    infos.map((info) => {
const body = document.body

const card = document.createElement("div");
const cardS = card.style
cardS.width = "18rem" 
cardS.height = "18rem" 
cardS.backgroundColor = "#000"
body.appendChild(card);

const cardTop = document.createElement("div");



    })
}, 1000);




