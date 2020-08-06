    var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
    
    var randomImageSource = "images/dice" + randomNumber1 + ".png";

    var randomImage1 = document.querySelectorAll("img")[0];

    randomImage1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🏆"; 
    }
    else{
        document.querySelector("h1").innerHTML = "Match Draw!"; 
    }