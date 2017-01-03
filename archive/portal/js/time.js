/*
=^. .^=
*/

$(document).ready(function() {

// --------------------------------------- TOOL TIPS
// hide tool tips
$('.tip').hide();

// tool tip for Location
$('.filterLocation').hover(function(){
         // show tool tip on hover
         $('#tipLocationText').show();
      },function(){ // hide tool tip after
        $('#tipLocationText').hide();
    });

// tool tip for Mood
$('.filterMood').hover(function(){
         // show tool tip on hover
         $('#tipMoodText').show();
      },function(){ // hide tool tip after
        $('#tipMoodText').hide();
    });


// --------------------------------------- FILTERS


       // click to show atHome filter, then hide
    $('#atHome').click(function() {
           if ($('.atHome').css('background-color')=="rgb(255, 249, 231)") {
            $('.atHome').css('background-color','#f2f2f2');
            $('#atHome').css('text-decoration','underline');
        } else {
            $('.atHome').css('background-color','rgb(255, 249, 231)');
            $('#atHome').css('text-decoration','none');
    }
    }); // end atHome click    


       // click to show inTransit filter, then hide
    $('#inTransit').click(function() {
           if ($('.inTransit').css('background-color')=="rgb(255, 249, 231)") {
            $('.inTransit').css('background-color','#f2f2f2');
            $('#inTransit').css('text-decoration','underline');
        } else {
            $('.inTransit').css('background-color','rgb(255, 249, 231)');
            $('#inTransit').css('text-decoration','none');
    }
    }); // end inTransit click  

         // click to show atWork filter, then hide
    $('#atWork').click(function() {
           if ($('.atWork').css('background-color')=="rgb(255, 249, 231)") {
            $('.atWork').css('background-color','#f2f2f2');
             $('#atWork').css('text-decoration','underline');
        } else {
            $('.atWork').css('background-color','rgb(255, 249, 231)');
            $('#atWork').css('text-decoration','none');
    }
    }); // end atWork click    

             // click to show inClass filter, then hide
    $('#inClass').click(function() {
           if ($('.inClass').css('background-color')=="rgb(255, 249, 231)") {
            $('.inClass').css('background-color','#f2f2f2');
             $('#inClass').css('text-decoration','underline');
        } else {
            $('.inClass').css('background-color','rgb(255, 249, 231)');
            $('#inClass').css('text-decoration','none');
    }
    }); // end inClass click  


   // click to show superAwake filter, then hide
    $('#superAwake').click(function() {
           if ($('.superAwake').css('background-color')=="rgb(255, 249, 231)") {
            $('.superAwake').css('background-color','#faeada');
            $('#superAwake').css('text-decoration','underline');
        } else {
            $('.superAwake').css('background-color','rgb(255, 249, 231)');
            $('#superAwake').css('text-decoration','none');
    }
    }); // end superAwake click   


       // click to show aOK filter, then hide
    $('#aOK').click(function() {
           if ($('.aOK').css('background-color')=="rgb(255, 249, 231)") {
            $('.aOK').css('background-color','#f2cfc4');
            $('#aOK').css('text-decoration','underline');
        } else {
            $('.aOK').css('background-color','rgb(255, 249, 231)');
            $('#aOK').css('text-decoration','none');
    }
    }); // end aOK click  

         // click to show sleepy filter, then hide
    $('#sleepy').click(function() {
           if ($('.sleepy').css('background-color')=="rgb(255, 249, 231)") {
            $('.sleepy').css('background-color','#e9b4ac');
            $('#sleepy').css('text-decoration','underline');
        } else {
            $('.sleepy').css('background-color','rgb(255, 249, 231)');
            $('#sleepy').css('text-decoration','none');
    }
    }); // end sleepy click    

             // click to show dying filter, then hide
    $('#dying').click(function() {
           if ($('.dying').css('background-color')=="rgb(255, 249, 231)") {
            $('.dying').css('background-color','#d0958f');
            $('#dying').css('text-decoration','underline');
        } else {
            $('.dying').css('background-color','rgb(255, 249, 231)');
            $('#dying').css('text-decoration','none');
    }
    }); // end dying click  




// --------------------------------------- ENTRIES
    // hide entries
    $('.entryOne').hide();
    $('.entryTwo').hide(); 
    $('.entryThree').hide();
    $('.entryFour').hide(); 
    $('.entryFive').hide();
    $('.entrySix').hide(); 
    $('.entrySeven').hide();
    $('.entryEight').hide(); 
    $('.entryNine').hide(); 
    $('.entryTen').hide(); 
    $('.entryEleven').hide(); 
    $('.entryTwelve').hide(); 
    $('.entryThirteen').hide(); 
    $('.entryFourteen').hide(); 
    $('.entryFifteen').hide(); 
    $('.entrySixteen').hide(); 
    $('.entrySeventeen').hide(); 



    // click to show entryOne (9:45 A), then hide
    $('#entryOne').click(function() {
        if ($('.entryOne').is(':hidden')) {
            $('.sleepy:hover td:nth-child(3)').css('background-color', '#e9b4ac');
            $('.entryOne').slideDown();
        } else {
            $('.entryOne').slideUp();
           $('.sleepy:hover td:nth-child(3)').css('background-color', ''); // clear bg color
       }
    }); // end entryOne click

    // click to show entryTwo (10:00 A), then hide
    $('#entryTwo').click(function() {
        if ($('.entryTwo').is(':hidden')) {
         $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
         $('.entryTwo').slideDown();
     } else {
       $('.aOK:hover td:nth-child(3)').css('background-color', '');
       $('.entryTwo').slideUp();
   }
    }); // end entryTwo click

    // click to show entryThree (10:15 A), then hide
    $('#entryThree').click(function() {
        if ($('.entryThree').is(':hidden')) {
            $('.superAwake:hover td:nth-child(3)').css('background-color', '#faeada');
            $('.entryThree').slideDown();
        } else {
            $('.entryThree').slideUp();
           $('.superAwake:hover td:nth-child(3)').css('background-color', ''); // clear bg color
       }
    }); // end entryThree click

    // click to show entryFour (10:30 A), then hide
    $('#entryFour').click(function() {
        if ($('.entryFour').is(':hidden')) {
         $('.superAwake:hover td:nth-child(3)').css('background-color', '#faeada');
         $('.entryFour').slideDown();
     } else {
       $('.superAwake:hover td:nth-child(3)').css('background-color', '');
       $('.entryFour').slideUp();
   }
    }); // end entryFour click

        // click to show entryFive (10:45 A), then hide
        $('#entryFive').click(function() {
            if ($('.entryFive').is(':hidden')) {
             $('.superAwake:hover td:nth-child(3)').css('background-color', '#faeada');
             $('.entryFive').slideDown();
         } else {
           $('.superAwake:hover td:nth-child(3)').css('background-color', '');
           $('.entryFive').slideUp();
       }
    }); // end entryFive click

           // click to show entrySix (11:00 A), then hide
           $('#entrySix').click(function() {
            if ($('.entrySix').is(':hidden')) {
             $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
             $('.entrySix').slideDown();
         } else {
           $('.aOK:hover td:nth-child(3)').css('background-color', '');
           $('.entrySix').slideUp();
       }
    }); // end entrySix click

               // click to show entrySeven (11:15 A), then hide
               $('#entrySeven').click(function() {
                if ($('.entrySeven').is(':hidden')) {
                 $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
                 $('.entrySeven').slideDown();
             } else {
               $('.aOK:hover td:nth-child(3)').css('background-color', '');
               $('.entrySeven').slideUp();
           }
    }); // end entrySeven click

                   // click to show entryEight (11:15 A), then hide
                   $('#entryEight').click(function() {
                    if ($('.entryEight').is(':hidden')) {
                     $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
                     $('.entryEight').slideDown();
                 } else {
                   $('.aOK:hover td:nth-child(3)').css('background-color', '');
                   $('.entryEight').slideUp();
               }
    }); // end entryEight click

        // click to show entryNine (11:30 A), then hide
        $('#entryNine').click(function() {
            if ($('.entryNine').is(':hidden')) {
             $('.sleepy:hover td:nth-child(3)').css('background-color', '#e9b4ac');
             $('.entryNine').slideDown();
         } else {
           $('.sleepy:hover td:nth-child(3)').css('background-color', '');
           $('.entryNine').slideUp();
       }
    }); // end entryNine click

        // click to show entryTen (11:45 A), then hide
        $('#entryTen').click(function() {
            if ($('.entryTen').is(':hidden')) {
             $('.sleepy:hover td:nth-child(3)').css('background-color', '#e9b4ac');
             $('.entryTen').slideDown();
         } else {
           $('.sleepy:hover td:nth-child(3)').css('background-color', '');
           $('.entryTen').slideUp();
       }
    }); // end entryTen click

        // click to show entryEleven (12:00 P), then hide
        $('#entryEleven').click(function() {
            if ($('.entryEleven').is(':hidden')) {
             $('.dying:hover td:nth-child(3)').css('background-color', '#d0958f');
             $('.entryEleven').slideDown();
         } else {
           $('.dying:hover td:nth-child(3)').css('background-color', '');
           $('.entryEleven').slideUp();
       }
    }); // end entryEleven click


         // click to show entryTwelve (12:15 P), then hide
         $('#entryTwelve').click(function() {
            if ($('.entryTwelve').is(':hidden')) {
             $('.dying:hover td:nth-child(3)').css('background-color', '#d0958f');
             $('.entryTwelve').slideDown();
         } else {
           $('.dying:hover td:nth-child(3)').css('background-color', '');
           $('.entryTwelve').slideUp();
       }
    }); // end entryTwelve click

         // click to show entryThirteen (12:30 P), then hide
         $('#entryThirteen').click(function() {
            if ($('.entryThirteen').is(':hidden')) {
             $('.dying:hover td:nth-child(3)').css('background-color', '#d0958f');
             $('.entryThirteen').slideDown();
         } else {
           $('.dying:hover td:nth-child(3)').css('background-color', '');
           $('.entryThirteen').slideUp();
       }
    }); // end entryThirteen click          

         // click to show entryFourteen (12:45 P), then hide
         $('#entryFourteen').click(function() {
            if ($('.entryFourteen').is(':hidden')) {
             $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
             $('.entryFourteen').slideDown();
         } else {
           $('.aOK:hover td:nth-child(3)').css('background-color', '');
           $('.entryFourteen').slideUp();
       }
    }); // end entryFourteen click   

        // click to show entryFifteen (1:15 P), then hide
        $('#entryFifteen').click(function() {
            if ($('.entryFifteen').is(':hidden')) {
             $('.superAwake:hover td:nth-child(3)').css('background-color', '#faeada');
             $('.entryFifteen').slideDown();
         } else {
           $('.superAwake:hover td:nth-child(3)').css('background-color', '');
           $('.entryFifteen').slideUp();
       }
    }); // end entryFifteen click     

            // click to show entrySixteen (1:30 P), then hide
            $('#entrySixteen').click(function() {
                if ($('.entrySixteen').is(':hidden')) {
                 $('.aOK:hover td:nth-child(3)').css('background-color', '#f2cfc4');
                 $('.entrySixteen').slideDown();
             } else {
               $('.aOK:hover td:nth-child(3)').css('background-color', '');
               $('.entrySixteen').slideUp();
           }
    }); // end entrySixteen click       

                // click to show entrySeventeen (1:45 P), then hide
                $('#entrySeventeen').click(function() {
                    if ($('.entrySeventeen').is(':hidden')) {
                     $('.sleepy:hover td:nth-child(3)').css('background-color', '#e9b4ac');
                     $('.entrySeventeen').slideDown();
                 } else {
                   $('.sleepy:hover td:nth-child(3)').css('background-color', '');
                   $('.entrySeventeen').slideUp();
               }
    }); // end entrySeventeen click


}); // end ready
