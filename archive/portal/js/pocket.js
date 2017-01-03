/*
=^. .^=
*/

$(document).ready(function() {

    // begin by hiding stuff
    $('.detail').hide();
    $('.musicDetail').hide();
    $('.lightDetail').hide();
    $('.memoryDetail').hide();
    $('.protectionDetail').hide();
    $('.wealthDetail').hide();
    $('.knowledgeDetail').hide();


    // click to show MUSIC, then hide
    $('.items .music').click(function() {
        if ($('.musicDetail').is(':hidden')) {
            $('.lightDetail').slideUp();
            $('.memoryDetail').slideUp();
            $('.protectionDetail').slideUp();
            $('.wealthDetail').slideUp();
            $('.knowledgeDetail').slideUp();
            $('.items .music').css('background-color', '#d5d0af');
            $('.items .light').css('background-color', '#fff9e7');
            $('.items .memory').css('background-color', '#fff9e7');
            $('.items .protection').css('background-color', '#fff9e7');
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.musicDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255651/75722f8e-e7ff-11e4-9b7f-e3988652d027.png)');
            $('.musicDetail').slideDown();
        } else {
            $('.items .music').css('background-color', '#fff9e7');
            $('.musicDetail').slideUp();
        }
    }); // end MUSIC click


        // click to show LIGHT, then hide
    $('.items .light').click(function() {
        if ($('.lightDetail').is(':hidden')) {
            $('.musicDetail').slideUp();
            $('.memoryDetail').slideUp();
            $('.protectionDetail').slideUp();
            $('.wealthDetail').slideUp();
            $('.knowledgeDetail').slideUp();
            $('.items .light').css('background-color', '#d5d0af');
            $('.items .music').css('background-color', '#fff9e7');
            $('.items .memory').css('background-color', '#fff9e7');
            $('.items .protection').css('background-color', '#fff9e7');
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.lightDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255650/756f9878-e7ff-11e4-80b5-c8b83ae5536b.png)');
            $('.lightDetail').slideDown();
        } else {
            $('.items .light').css('background-color', '#fff9e7');
            $('.lightDetail').slideUp();
        }
    }); // end LIGHT click


        // click to show MEMORY, then hide
    $('.items .memory').click(function() {
        if ($('.memoryDetail').is(':hidden')) {
            $('.musicDetail').slideUp();
            $('.lightDetail').slideUp();
            $('.protectionDetail').slideUp();
            $('.wealthDetail').slideUp();
            $('.knowledgeDetail').slideUp();
            $('.items .memory').css('background-color', '#d5d0af');
            $('.items .music').css('background-color', '#fff9e7');
            $('.items .light').css('background-color', '#fff9e7');
            $('.items .protection').css('background-color', '#fff9e7');
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.memoryDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255656/7583ea12-e7ff-11e4-9812-ee3ce6e119c3.png)');
            $('.memoryDetail').slideDown();
        } else {
            $('.items .memory').css('background-color', '#fff9e7');
            $('.memoryDetail').slideUp();
        }
    }); // end MEMORY click


    // click to show PROTECTION, then hide
    $('.items .protection').click(function() {
        if ($('.protectionDetail').is(':hidden')) {
            $('.musicDetail').slideUp();
            $('.lightDetail').slideUp();
            $('.memoryDetail').slideUp();
            $('.wealthDetail').slideUp();
            $('.knowledgeDetail').slideUp();
            $('.items .protection').css('background-color', '#d5d0af');
            $('.items .music').css('background-color', '#fff9e7');
            $('.items .light').css('background-color', '#fff9e7');
            $('.items .memory').css('background-color', '#fff9e7');
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.protectionDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255646/756eb750-e7ff-11e4-9cd9-63882c4208cb.png)');
            $('.protectionDetail').slideDown();
        } else {
            $('.items .protection').css('background-color', '#fff9e7');
            $('.protectionDetail').slideUp();
        }
    }); // end PROTECTION click


        // click to show WEALTH, then hide
    $('.items .wealth').click(function() {
        if ($('.wealthDetail').is(':hidden')) {
            $('.musicDetail').slideUp();
            $('.lightDetail').slideUp();
            $('.memoryDetail').slideUp();
            $('.protectionDetail').slideUp();
            $('.knowledgeDetail').slideUp();
            $('.items .wealth').css('background-color', '#d5d0af');
            $('.items .music').css('background-color', '#fff9e7');
            $('.items .light').css('background-color', '#fff9e7');
            $('.items .memory').css('background-color', '#fff9e7');
            $('.items .protection').css('background-color', '#fff9e7');
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.wealthDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255653/758325b4-e7ff-11e4-9daf-564dcae9d025.png)');
            $('.wealthDetail').slideDown();
        } else {
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.wealthDetail').slideUp();
        }
    }); // end WEALTH click


        // click to show KNOWLEDGE, then hide
    $('.items .knowledge').click(function() {
        if ($('.knowledgeDetail').is(':hidden')) {
            $('.musicDetail').slideUp();
            $('.lightDetail').slideUp();
            $('.memoryDetail').slideUp();
            $('.protectionDetail').slideUp();
            $('.wealthDetail').slideUp();
            $('.items .knowledge').css('background-color', '#d5d0af');
            $('.items .music').css('background-color', '#fff9e7');
            $('.items .light').css('background-color', '#fff9e7');
            $('.items .memory').css('background-color', '#fff9e7');
            $('.items .protection').css('background-color', '#fff9e7');
            $('.items .wealth').css('background-color', '#fff9e7');
            $('.knowledgeDetail').css('background-image', 'url(https://cloud.githubusercontent.com/assets/7544281/7255647/756f3dec-e7ff-11e4-97ab-ea4ddcc638e1.png)');
            $('.knowledgeDetail').slideDown();
        } else {
            $('.items .knowledge').css('background-color', '#fff9e7');
            $('.knowledgeDetail').slideUp();
        }
    }); // end KNOWLEDGE click

}); // end ready
