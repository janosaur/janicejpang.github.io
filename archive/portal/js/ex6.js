/*
=^. .^=
*/


$(document).ready(function () {

  var plage = new Howl({
  urls: ['https://a.tumblr.com/tumblr_m61pynRtCK1qhp6n1o1.mp3']
});

  var kites = new Howl({
  urls: ['http://audio.heargasm.info/geographer_kites2.mp3']
});

  var created = new Howl({
  urls: ['https://a.tumblr.com/tumblr_n81vtohSdA1te7e5qo1.mp3']
});

  // ---------- FADE IN
  $('#topTitle').fadeIn();
  
  
  // ---------- HIDES

  $('#musicName1').hide(); //hide music info
  $('#musicNext1').hide();
  $('#musicName2').hide(); //hide music info
  $('#musicNext2').hide();
  $('#musicName3').hide(); //hide music info
  $('#musicNext3').hide(); //hide music info


  // ---------- KITES

  $('#play img').click(function() { //click the play button
    if ($('#musicName1').is(':hidden') && $('#musicName2').is(':hidden')) { // if the music name is hidden,
            $(this).mousedown(function() { // on mouse press,
      $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590375/13ceac24-f87d-11e4-8e5d-f37d538af757.png'); // change image to Play Press
    });
      kites.play(); // play sound
       $('#musicName1').fadeIn(); //fade in music info
       $('#musicNext1').fadeIn(2000); //fade in music info
        $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // and change image to Stop
  } 


   else if ($('#musicName1').is(':visible') && $('#musicName2').is(':hidden')) { //if the music name is visible,
       $('#play img').mousedown(function() { //on mouse press,
    $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590376/13e317e0-f87d-11e4-975c-17cc8aefd7f3.png'); // change image to Stop Press
    });
      kites.pause();
       $('#musicName1').fadeOut(); //hide music info
       $('#musicNext1').fadeOut("fast"); //hide music info
       $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590374/13ce7be6-f87d-11e4-9a36-36e5020a030a.png'); // and change image to Play
  }
    });


// ---------- NEXT

$('#next').click(function() {
  $('#musicName1').fadeOut("fast"); //hide music info
  $('#musicNext1').fadeOut("fast");
  kites.stop();
  plage.play();
  $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // change to second set of icons
    $('#musicName2').fadeIn(2000); //hide music info
  $('#musicNext2').fadeIn(2000);
});



// ------ PLAGE


$('#play img').click(function() { //click the play button
    if ($('#musicName2').is(':visible')) { // if the music name is hidden,
      $('#play img').mousedown(function() { // on mouse press,
      $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590376/13e317e0-f87d-11e4-975c-17cc8aefd7f3.png'); // change image to Play Press
    });
      plage.pause(); // play sound
  $('#musicName2').fadeOut();
       $('#musicNext2').fadeOut("fast");
       $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590374/13ce7be6-f87d-11e4-9a36-36e5020a030a.png'); // and change image to Play

 } 


 else if ($('#musicName2').is(':visible')) {
$('#play img').mousedown(function() { // on mouse press,
      $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590375/13ceac24-f87d-11e4-8e5d-f37d538af757.png'); // change image to Play Press
    });
      plage.play(); // play sound
  $('#musicName2').fadeIn();
       $('#musicNext2').fadeIn("fast");
       $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // and change image to Play
 }
    

});


// ---------- NEXT 1

$('#next1').click(function() {
  $('#musicName2').fadeOut("fast"); //hide music info
  $('#musicNext2').fadeOut("fast");
  plage.stop();
  created.play();
  $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // change to second set of icons
    $('#musicName3').fadeIn(2000); //hide music info
  $('#musicNext3').fadeIn(2000);
});
 

// ------ CREATED


$('#play img').click(function() { //click the play button
    if ($('#musicName3').is(':visible')) { // if the music name is hidden,
      $('#play img').mousedown(function() { // on mouse press,
      $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590376/13e317e0-f87d-11e4-975c-17cc8aefd7f3.png'); // change image to Play Press
    });
      created.pause(); // play sound
  $('#musicName3').fadeOut();
       $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590374/13ce7be6-f87d-11e4-9a36-36e5020a030a.png'); // and change image to Play

 } 


 else if ($('#musicName3').is(':visible')) {
$('#play img').mousedown(function() { // on mouse press,
      $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590375/13ceac24-f87d-11e4-8e5d-f37d538af757.png'); // change image to Play Press
    });
      created.play(); // play sound
  $('#musicName3').fadeIn();
         $('#musicNext3').fadeIn("fast");
       $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // and change image to Play
 }
    

});


// ---------- NEXT 2

$('#next2').click(function() {
  $('#musicName3').fadeOut("fast"); //hide music info
  $('#musicNext3').fadeOut("fast");
  created.stop();
  kites.play();
  $('#play img').attr('src', 'https://cloud.githubusercontent.com/assets/7544281/7590370/13cc17f2-f87d-11e4-82a8-8268d43f5dc1.png'); // change to second set of icons
    $('#musicName1').fadeIn(2000); //hide music info
  $('#musicNext1').fadeIn(2000);
});




    //close jQuery
});
