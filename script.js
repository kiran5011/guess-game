let inputvalue;
let attemps = 0;
let generatedvalue;
let user = document.getElementById("user");
let score= document.getElementById("score");
let msg = document.querySelector("#msgbox");
generatedvalue = Generate();
user.addEventListener('submit', function (event) {
    event.preventDefault();
})
window.onload = function () {
    document.getElementById("submit").addEventListener("click",
        function () {
            const input = document.getElementById("numInput").value;
            inputvalue = Number(input);
            compare(inputvalue, generatedvalue);
        });
};
function Generate() {
    let realno = Math.floor(Math.random() * 100);
    return realno;
}
function compare(generatedvalue, inputvalue) {
    if (generatedvalue !== inputvalue) {
        if (generatedvalue > inputvalue) {
            msg.innerText = "It's high,Enter a lower number";
            msg.style.color="white";
            attemps++;
            score.innerText=`Attempts :${attemps}`; 
        }
        else if (generatedvalue < inputvalue) {
            msg.innerText = "It's Low,Enter a Higher number";
            msg.style.color="white";
            attemps++;
            score.innerText=`Attempts :${attemps}`; 
        }
    }
    else if (generatedvalue === inputvalue) {
        attemps++;     
        msg.innerText = "You got the number!";
        msg.style.color="Purple";
        score.innerText=`Attempts :${attemps}`; 
    }
}

