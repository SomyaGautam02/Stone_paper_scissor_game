    
document.getElementById("button").addEventListener("click", respondtoclick)    
    function respondtoclick(){

        
       var randomnumber= Math.floor(Math.random()*3)

        switch(randomnumber){
            case 0:
                var sourcechnage= "scissor.png";
                break;

            case 1:
                var sourcechnage= "paper.png";
                break;

            case 2:
                var sourcechnage= "rock.png";
                break;
        }

        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src",sourcechnage )

        //For Player 2
        var randomnumber1= Math.floor(Math.random()*3);

        switch(randomnumber1){
            case 0:
                var sourcechange1= "scissor.png"
                break;

            case 1:
                var sourcechange1="paper.png"
                break;
            
            case 2:
                var sourcechange1= "rock.png"
                break;
        }

        var image2 = document.querySelectorAll("img")[1];
        image2.setAttribute("src",sourcechange1 )

        if(sourcechnage==sourcechange1){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Draw!!"
        }
        //for all 0
        else if(randomnumber==0 && randomnumber1==1){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 1 Wins 🚩!"
        }

        else if(randomnumber==0 && randomnumber1==2){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 2 Wins 🚩!"
        }

        else if(randomnumber==1 && randomnumber1==0){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 2 Wins 🚩!"
        }

        else if(randomnumber==1 && randomnumber1==2){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 1 Wins 🚩!"
        }

        else if(randomnumber==2 && randomnumber1==0){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 1 Wins 🚩!"
        }

        else if(randomnumber==2 && randomnumber1==1){
            document.querySelector("h1").style.color= "red"
            document.querySelector("h1").innerHTML= "Player 2 Wins 🚩!"
        }
    }