const validation = function () {

    const form = $('form#email-signup');
    const email = $('#email');

    const rgx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let validInputs;
    
    form.on('submit', function(event) {
        checkInputs();
    
        if (!validInputs) {
            event.preventDefault();
            // console.log(fName.val().trim());
        }
    
    });
    
    function checkInputs() {
        let emailErr;
    
        // E–mail Validation -----------------------------------------
        if ( email.val().trim() === '' || email.val() === null ) {
            // Show Error & Add Error Class
            setErrorFor(email, 'Please Enter an Email.');
            emailErr = true;
        } else if ( !email.val().match(rgx) ) {
            
            setErrorFor(email, 'The Email you have entered is not valid.');
            emailErr = true;
        } else {
            // Add Success Class
            setSuccessFor(email);
            emailErr = false;
        } 
    
        // ALL VALIDATION CHECK 
        if ( !emailErr ) {
            validInputs = true
        } else {
            validInputs = false
        }
    }
    
    // This is the Error Message Generator.
    function setErrorFor(input, msg) {
        const formControl = input.parent();
        const small = formControl.children('.errorMsg');
    
        // Add Error Message inside Small 
        small.text(msg);
    
        // Add Error Class
        formControl.addClass('error');
        formControl.removeClass('success');
        
        // Removes Error after 5 seconds 
        formControl.delay( (10 * 1000) ).queue(function(){   
            formControl.removeClass('error');
            formControl.dequeue();
        });
    
    }
    
    function setSuccessFor(input, msg) {
        const formControl = input.parent();
    
        // Add Success Class
        formControl.addClass('success');
        formControl.removeClass('error');
    }
    
    //------------------------------------------------------
    
    };
    
    validation();
    
    
    // CLOSE MESSAGE SENT NOTIFICATION 
    
    const flashSuccess = $('.success-msg');
    
    flashSuccess.on("click", function(){
        $(this).css("display", "none");
    });
    
    