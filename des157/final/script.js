var A = 0; 
var B = 0; 
var C = 0; 
var D = 0; 
/* setting up variables to 0 to add 1 to every time their answer is clicked */


/* setting up movies overlay on click changes class to showing, and changing class to hidden when user clicks close */

(function () {
    'use strict';

    document.getElementById("movies").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('movies_overlay').className='showing'; 
    
    });

    document.querySelector('.close_two').addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('movies_overlay').className='hidden'; 

}); 


/* setting up shopping overlay on click changes class to showing, and changing class to hidden when user clicks close */

    document.getElementById("shopping").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('shopping_overlay').className='showing'; 
    
    });

    document.querySelector('.close_three').addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('shopping_overlay').className='hidden'; 

}); 

/* setting up news overlay on click changes class to showing, and changing class to hidden when user clicks close */

    document.getElementById("news").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('news_overlay').className='showing'; 
    
    });

    document.querySelector('.close_five').addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('news_overlay').className='hidden'; 

}); 

/* setting up videos overlay on click changes class to showing, and changing class to hidden when user clicks close */

document.getElementById("videos").addEventListener('click',function(event){
    event.preventDefault(); 
    document.getElementById('videos_overlay').className='showing'; 

});

document.querySelector('.close_four').addEventListener('click',function(event){
    event.preventDefault(); 
    document.getElementById('videos_overlay').className='hidden'; 

}); 

/*when A, B,C, or D are clicked, adds 1 to the corresponding answer choice */

    

        document.querySelector(".A").addEventListener('click',function(event){
            event.preventDefault(); 
            A+=1; 
            console.log("clicked A"); 

    });

    document.querySelector(".B").addEventListener('click',function(event){
        event.preventDefault(); 
        B+=1; 
        console.log("B"); 
    });

    document.querySelector(".C").addEventListener('click',function(event){
        event.preventDefault(); 
        C+=1;
        console.log("C");  
    });

    document.querySelector(".D").addEventListener('click',function(event){
        event.preventDefault(); 
        D+=1; 
        console.log("D"); 
    });


   /* The rest of this code gets triggered only when one of the last answer choices from the last question is clicked */
/*It calculates the letter that got the most clicks and displays the correct overlay accordingly*/
    document.getElementById("B_last").addEventListener("click", function(){
        console.log("HELLO"); 
        if(D>A && D>B && D>C){
            document.getElementById('icon_aoc').className='showing'; 
        }

        else if(C>A && C>B && C>D){
            document.getElementById('icon_malala').className='showing'; 
        }

        else if(B> A && B>C && B>D){
            document.getElementById('icon_simone').className='showing'; 
            
        }
        else if (A > B && A>C && A>D){
            document.getElementById('icon_rbg').className='showing'; 
        }
        
        else if(D>=2){
            document.getElementById('icon_aoc').className='showing'; 
        }
        else if(B>=2 ){
            document.getElementById('icon_malala').className='showing'; 
        }


        else if(A>=2){
            document.getElementById('icon_rbg').className='showing'; 

        }
        else{
            console.log("BYE"); 
            document.getElementById('icon_simone').className='showing'; 
        }


     });  
     document.getElementById("C_last").addEventListener("click", function(){
        console.log("HELLO"); 
        if(D>A && D>B && D>C){
            document.getElementById('icon_aoc').className='showing'; 
        }

        else if(C>A && C>B && C>D){
            document.getElementById('icon_malala').className='showing'; 
        }

        else if(B> A && B>C && B>D){
            document.getElementById('icon_simone').className='showing'; 
            
        }
        else if (A > B && A>C && A>D){
            document.getElementById('icon_rbg').className='showing'; 
        }
        
        else if(D>=2){
            document.getElementById('icon_aoc').className='showing'; 
        }
        else if(B>=2 ){
            document.getElementById('icon_malala').className='showing'; 
        }


        else if(A>=2){
            document.getElementById('icon_rbg').className='showing'; 

        }
        else{
            console.log("BYE"); 
            document.getElementById('icon_simone').className='showing'; 
        }


     });  



     document.getElementById("D_last").addEventListener("click", function(){
        console.log("HELLO"); 
        if(D>A && D>B && D>C){
            document.getElementById('icon_aoc').className='showing'; 
        }

        else if(C>A && C>B && C>D){
            document.getElementById('icon_malala').className='showing'; 
        }

        else if(B> A && B>C && B>D){
            document.getElementById('icon_simone').className='showing'; 
            
        }
        else if (A > B && A>C && A>D){
            document.getElementById('icon_rbg').className='showing'; 
        }
        
        else if(D>=2){
            document.getElementById('icon_aoc').className='showing'; 
        }
        else if(B>=2 ){
            document.getElementById('icon_malala').className='showing'; 
        }


        else if(A>=2){
            document.getElementById('icon_rbg').className='showing'; 

        }
        else{
            console.log("BYE"); 
            document.getElementById('icon_simone').className='showing'; 
        }


     });  

     document.getElementById("A_last").addEventListener("click", function(){
        console.log("HELLO"); 
        if(D>A && D>B && D>C){
            document.getElementById('icon_aoc').className='showing'; 
        }

        else if(C>A && C>B && C>D){
            document.getElementById('icon_malala').className='showing'; 
        }

        else if(B> A && B>C && B>D){
            document.getElementById('icon_simone').className='showing'; 
            
        }
        else if (A > B && A>C && A>D){
            document.getElementById('icon_rbg').className='showing'; 
        }
        
        else if(D>=2){
            document.getElementById('icon_aoc').className='showing'; 
        }
        else if(B>=2 ){
            document.getElementById('icon_malala').className='showing'; 
        }


        else if(A>=2){
            document.getElementById('icon_rbg').className='showing'; 

        }
        else{
            console.log("BYE"); 
            document.getElementById('icon_simone').className='showing'; 
        }


     });  





})();

