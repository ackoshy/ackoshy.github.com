var A = 0; 
var B = 0; 
var C = 0; 
var D = 0; 

(function () {
    'use strict';

    document.getElementById("movies").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('movies_overlay').className='showing'; 
    
    });

    document.getElementById("shopping").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('shopping_overlay').className='showing'; 
    
    });

    document.getElementById("news").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('news_overlay').className='showing'; 
    
    });

    
    



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

    document.querySelector(".last").addEventListener("click", function(){
        console.log("in last"); 
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

