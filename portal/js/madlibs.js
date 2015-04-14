// =^. .^=

// Is JS running?
console.log("JS is running.");
    

// Process the user's input to create their card!
document.card.onsubmit=process;

// Function to create the card
function process(){
    
    // Store user's First Name
    var textFn=document.card.textFn.value;
    
    // Store user's Last Name
    var textLn=document.card.textLn.value;
    
    // Store user's Childhood Dream Job
    var textDream=document.card.textDream.value;
    
    // Store user's Ideal Big-Kid Job
    var textDreamBig=document.card.textDreamBig.value;

    // Store user's Exciting thing
    var textExcites=document.card.textExcites.value;
    
    // Store user's Terrifying thing
    var textTerrifies=document.card.textTerrifies.value;

    // Store user's Adjective to describe the end of the world
    var textEnd=document.card.textEnd.value;
    
   // Store all inputs into friendCard
    var result=document.getElementById("result");

    // Dates
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

today = mm+'/'+dd+'/'+yyyy;
    
    
     // Push new values to create the user's card
    result.innerHTML=
        "<div class='cardBg'>" 
        + 
        "<p class=''><img src='http://f.cl.ly/items/000t050A3w0D2b3j0b0Y/Badge.gif' height='100' width='100' class='badge'></p>"
        +
        "<div class='cardContent'><p class='friendHeader'>Friend of Pangcake Land</p>" 
        +
        "<h1>" 
        +
        textFn
        +
        " "
        +
        textLn
        +
        "</h1></div>"
        +
        "<div class='cardJob'><p class='friendJob'>"
        +
        textDreamBig
        +
        " & "
        +
        textDream
        +
        " at heart.</p></div>"
        +
        "<p>This card certifies party-throwing for "
        +
        textExcites
        +
        ", and hand-holding through "
        +
        textTerrifies
        +
        ".</p></div>"
        +
        "<br><br>"
    +
        "<div class='cardBgBack'><div class='friendshipValid'>Friendship valid from "
    +
        today
    +
        "<br>till the "
    +
    textEnd
    +
        " end.</div></div>"
    ;
    
    // Goes to card
    window.location.replace('#cardFinal');
    
    return false;
    
  }
  
  document.card.onreset=cleanScreen;
  
  function cleanScreen(){
      result.innerHTML="";
  }

    // Is JS running?
console.log("JS has processed.");   
