
function buttonClick() {
    console.log('button clicked')
    window.open('https://7330biy1w9mglrfa6ewms03yfy.hop.clickbank.net/?tid=Exipure', '_self')
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    document.getElementById("main_content_left_txt").style.maxHeight = 80%
    displayToday()
    timer()
})

function timer() {
    var min = 10
    var sec = 0

    function countDown() {
        let countDownInterval =  setInterval(function () {
                if (sec === 0) {
                    sec = 59
                    min = min - 1
                } else {
                    sec = sec - 1
                }

                displayTime()

                if (min === 0 && sec === 0){
                    clearInterval(countDownInterval)
                }
            }, 1000);

        function displayTime() {
            var displaySec
            if (sec < 10) {
                displaySec = '0' + sec.toString()
            } else {
                displaySec = sec.toString()
            }
            document.getElementById("timer").innerHTML = min.toString() + ':' + displaySec

            if (min <= 1) {
                document.getElementById("timer").style.color = "red";
            }
        }
    }

    return countDown()
}

function displayToday(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let monthName = month[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();

    return document.getElementById("today").innerHTML = monthName + ' ' + day + ', ' + year
}
