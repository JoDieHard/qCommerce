

const timeContainer = $( '.delivery-countdown' );
const flash = $('.delivery-flash')

// Set time very second
setInterval(myTimer, 1000);

function myTimer() {
    
    // Getting Current Day and Specific Time
    var options = {  year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var now = today.toLocaleDateString("en-US", options);
    const cutoff = new Date(now + ' 17:30:00')
    
    // Get Current Time + Modifiers
    let currentTime = new Date().getTime();
    let remainder = new Date((cutoff - currentTime));
    let minus = new Date(remainder.setHours( remainder.getHours() - 1)).toLocaleTimeString();

    // Check time is left for Next Day Delivery
    if (currentTime < cutoff ) {
        timeContainer.html( minus );

    // If there's no time left, show message
    } else {
        timeContainer.parent().html( 'Sorry, You missed Next Day Delivery today!' );
    }

    //Log Tests
    // console.log(now); // Saturday, September 17, 2016
    // console.log(cutoff); // time today
    // console.log( minus);
}

$( document ).ready(function () {
    flash.css('visibility', 'visible');
    myTimer();
})