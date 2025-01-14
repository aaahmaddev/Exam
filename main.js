
var infos = [];
const url = 'http://192.168.0.215:4000';
fetch(url)
    .then(response => response.json())
    .then(data => {
        infos = data.data;
    })
    .catch(err => console.error(err));

setTimeout(() => {
    infos.forEach((info) => {
        const card = document.createElement("div");
        card.style.width = "40%"
        card.style.boxShadow = "10px 10px 10px 10px #000"
        card.style.marginBottom = "50px"
        card.style.borderRadius = "3px"
        card.style.userSelect = "none"
        document.body.appendChild(card);
// Card Top
        const cardTop = document.createElement("div");
        cardTop.style.display = "flex";
        cardTop.style.justifyContent = "center";
        cardTop.style.alignItems = "center"
        cardTop.style.padding = "2px 2px 2px 2px"
        card.appendChild(cardTop);
// Card IMG
        const cardImg = document.createElement("img");
        cardImg.style.width = "100%"
        cardImg.style.height = "400px"
        cardImg.style.borderRadius = "4px"
        cardImg.src = info.sertificateImageUrl;
        cardTop.appendChild(cardImg);
// Card Bottom
        const cardBottom = document.createElement("div");
        card.appendChild(cardBottom);
        cardBottom.style.textAlign = "center"
        cardBottom.style.width = "100%"

        // CardTextDiv
        const cardTextDiv = document.createElement("div");
        cardBottom.appendChild(cardTextDiv);
        cardTextDiv.style.display = "none"


// id
var cardId = document.createElement("h3");
cardId.textContent = "ID: "+info._id
cardBottom.appendChild(cardId);
// Last Name
var studentLastName = document.createElement("h3");
studentLastName.textContent = "Last Name: "+info.studentLastName;
cardBottom.appendChild(studentLastName);
// Eng Last Name


var studentEngLastName = document.createElement("h3");
studentEngLastName.textContent = "Eng LastName: "+info.studentEngLastName;
cardBottom.appendChild(studentEngLastName);
// Name
var studentName = document.createElement("h3");
studentName.textContent = "Name: "+info.studentName;
cardBottom.appendChild(studentName);
// Eng Name
var studentEngName = document.createElement("h3");
studentEngName.textContent = "Eng Name: "+info.studentEngLastName;
cardTextDiv.appendChild(studentEngName);
// PassportSeries
var PassportSeries = document.createElement("h3");
PassportSeries.textContent = "Passport Series: "+info.studentPassportSeries;
cardTextDiv.appendChild(PassportSeries)
// Passport Number
var studentPassportNumber = document.createElement("h3");
studentPassportNumber.textContent = "Passport Number: "+info.studentPassportNumber;
cardTextDiv.appendChild(studentPassportNumber)
// studentWorkPlace

var studentWorkPlace = document.createElement("h3");
studentWorkPlace.textContent = "Work Place: "+info.studentWorkPlace;
cardTextDiv.appendChild(studentWorkPlace);

// sertificateRegistrationNumber

var sertificateRegistrationNumber = document.createElement("h3");
sertificateRegistrationNumber.textContent = "Registaration Number: "+info.sertificateRegistrationNumber;
cardTextDiv.appendChild(sertificateRegistrationNumber);

var studentPassportJSHSHIR = document.createElement("h3");
studentPassportJSHSHIR.textContent = "Passport JSHSHIR: "+info.studentPassportJSHSHIR;
cardTextDiv.appendChild(studentPassportJSHSHIR);

var sertificateDate = document.createElement("h3");
sertificateDate.textContent = "Date: "+info.sertificateDate
cardTextDiv.appendChild(sertificateDate);




const fullinfo = document.createElement("div");
fullinfo.style.width = "100%"
fullinfo.style.display = "none"
document.body.appendChild(fullinfo);

        const cardImg2 = document.createElement("img");
        cardImg2.style.width = "951px"
        cardImg2.style.borderRadius = "4px"
        
        cardImg2.src = info.sertificateImageUrl;
        fullinfo.appendChild(cardImg2);



const button = document.createElement("button");
button.textContent = "More"
button.style.border = "none"
button.style.borderRadius = "3px"
button.style.width = "70%"
button.style.height = "40px"
button.style.marginBottom = "15px"
button.style.cursor = "pointer"
cardBottom.appendChild(button);
button.addEventListener("click", () => {
    if (cardTextDiv.style.display === "none") {
        cardTextDiv.style.display = "block";
        button.textContent = "Hide"
    } else {
        cardTextDiv.style.display = "none";
        button.textContent = "More"
    }
});





});


}, 1000);
