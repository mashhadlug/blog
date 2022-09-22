// copy from: https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Sep 22, 2022 18:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let demo = document.getElementById("demo")

    // Output the result in an element with id="demo"
    demo.innerHTML = days + " روز " + hours + " ساعت " +
        minutes + " دقیقه " + seconds + " ثانیه " + "تا شروع جلسه";
    demo.parentElement.style.color = "#98C379";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        demo.innerHTML = "این رویداد قبلا برگزار شده است";
        demo.parentElement.style.color = "#E06C75"
    }
}, 1000);




var btn = document.getElementById('login')
var clickHandler = function () {
    window.open('https://join.skype.com/FjDDEdOXEn56', '_blank').focus();
}
btn.addEventListener('click', clickHandler)

