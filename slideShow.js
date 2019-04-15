var slideshow = {
    photoList: ["cars", "tigers", "sports"], 
    currentPhotoIndex: function() {
        return this.photoList.indexOf();
               },   
    playInterval: "    ",                                 
    
    nextPhoto(){
            function play()
            playInterval = function setInterval(play,ms){
                
            }
                  
        // for(var currentPhotoIndex = 0; currentPhotoIndex <= 2; currentPhotoIndex ++ )
        //     if (currentPhotoIndex.selected){   
        //         console.log(this.photoList);}

        //         else {
        //            console.log("End of slideshow");
        //        }                          
             },
    prevPhoto(){
        for (var currentPhotoIndex = 2; currentPhotoIndex >= 0; currentPhotoIndex --)
            if (currentPhotoIndex.selected){
                console.log(this.photoList);}

                 else {
                    console.log("End of slideshow");
                 }
             }, 
    getCurrentPhoto(){
        console.log(this.photoList);
    }   
    }
    console.log(slideshow.prevPhoto());
    console.log(slideshow.nextPhoto());
    console.log(slideshow.getCurrentPhoto());