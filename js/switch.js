
const nav = $('.details-nav');
const navButton = $('.details-nav button');
const contentArea = $('.product-details .container');

const sizeGuideBtn = $( '.size-guide-link' );

// Button and Page Handler


// Nav Button Event Listners
navButton.on('click', function () {

    navButton.each(function (index) {
        $( this ).removeClass('active');
    });

    contentArea.find('.switch-slide').each(function (index) {
        $( this ).removeClass('active');
    });
    // console.log( $( this ) + ' has been clicked');

    if ( $( this ).hasClass('active')) {
        console.log('This is already active');
        return;

    } else if ( $( this ).hasClass('pd-btn')) {
        // Do Something
        // console.log('show pd-content');
        $( this ).addClass('active');
        contentArea.find('.pd-content').addClass('active');

    } else if ( $( this ).hasClass('size-btn')) {
        // Do Something
        // console.log('show pd-content');
        $( this ).addClass('active');
        contentArea.find('.size-content').addClass('active');

    } else if ( $( this ).hasClass('del-btn')) {
        // Do Something
        // console.log('show pd-content');
        $( this ).addClass('active');
        contentArea.find('.del-content').addClass('active');

    } else if ( $( this ).hasClass('rev-btn')) {
        // Do Something
        // console.log('show pd-content');
        $( this ).addClass('active');
        contentArea.find('.rev-content').addClass('active');
    }

});


// Size Guide
sizeGuideBtn.on('click', function () {
    navButton.eq(1).trigger("click");
    console.log('Size Button Triggered!')
})
