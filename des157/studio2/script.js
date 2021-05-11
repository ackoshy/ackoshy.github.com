(function () {

    'use strict';
    
        document.getElementById("img1").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('overlay_one').className='showing'; 
    
    });

        document.querySelector('.close').addEventListener('click',function(event){
            event.preventDefault(); 
            document.getElementById('overlay_one').className='hidden'; 
 
    }); 

    document.addEventListener('keydown',function(event){
        if(event.key=='Escape'){
            document.getElementById('overlay_one').className='hidden'; 
        }
    }); 
    
    document.getElementById("img2").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('overlay_two').className='showing'; 
    
    });

        document.querySelector('.close_two').addEventListener('click',function(event){
            event.preventDefault(); 
            document.getElementById('overlay_two').className='hidden'; 
 
    }); 

    document.addEventListener('keydown',function(event){
        if(event.key=='Escape'){
            document.getElementById('overlay_two').className='hidden'; 
        }
    }); 
    document.getElementById("img3").addEventListener('click',function(event){
        event.preventDefault(); 
        document.getElementById('overlay_three').className='showing'; 
    
    });

        document.querySelector('.close_three').addEventListener('click',function(event){
            event.preventDefault(); 
            document.getElementById('overlay_three').className='hidden'; 
 
    }); 
    document.addEventListener('keydown',function(event){
        if(event.key=='Escape'){
            document.getElementById('overlay_three').className='hidden'; 
        }
    }); 


})();