const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// fix later

setTimeout(() => {
    $("#message").fadeOut("slow");
}, 3000);