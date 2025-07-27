let inputvalue;
let generatedvalue;
let user = document.getElementById("user");
let score= document.getElementById("score");
generatedvalue = Generate();
user.addEventListener('submit', function (event) {
    event.preventDefault();
})
let attemps = 0;
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
let msg = document.querySelector("#msgbox");
function game() { }


function compare(generatedvalue, inputvalue) {
    if (generatedvalue !== inputvalue) {
        if (generatedvalue > inputvalue) {
            msg.innerText = "It's high,Enter a lower number";
            msg.style.backgroundColor="blue";
            attemps++;
            score.innerText=`Attempts :${attemps}`;
        }
        else if (generatedvalue < inputvalue) {
            msg.innerText = "It's Low,Enter a Higher number";
            msg.style.backgroundColor="blue";
            attemps++;
            score.innerText=`Attempts :${attemps}`;
        }
    }
    else if (generatedvalue === inputvalue) {
        msg.innerText = "You got the number!";
        msg.style.backgroundColor="green";
        score.innerText=`Attempts :${attemps}`;       
    }
}

