$('video').mediaelementplayer({
  videoWidth: '100%',
  videoHeight: '100%',
  enableAutosize: true,
});

var vid = $(".video");

$(vid).on("timeupdate", function() {
     if(this.currentTime >= 0.1 && this.currentTime <= 4) {
          $(".1").css("color", "orange");
        } else if(this.currentTime >= 4.01) {
            $(".1").css("color", "black");     
         } if(this.currentTime >= 4.02 && this.currentTime <= 7.5) {
            $(".2").css("color", "orange");
          } else if(this.currentTime > 7.51) {
             $(".2").css("color", "black"); 
                } if(this.currentTime >= 7.55 && this.currentTime <= 11.2) {
              $(".3").css("color", "orange");  
            } else if(this.currentTime > 11.3) {
                $(".3").css("color", "black");
            } if(this.currentTime >= 11.4 && this.currentTime <= 13.9) {
                 $(".4").css("color", "orange");
              } else if(this.currentTime > 14) {
                  $(".4").css("color", "black");      
               } if(this.currentTime >= 14.1 && this.currentTime <= 17.9) {
             $(".5").css("color", "orange");       
          } else if(this.currentTime > 18) {
                $(".5").css("color", "black");   
             } if(this.currentTime >= 17.94 && this.currentTime <= 22.3) {
                $(".6").css("color", "orange");
              } else if(this.currentTime > 22.3) {
                   $(".6").css("color", "black");   
                } if(this.currentTime >= 22.33 && this.currentTime <= 26.8) {
                     $(".7").css("color", "orange");
                  } else if(this.currentTime > 26.9) {
                      $(".7").css("color", "black");    
                    } if(this.currentTime >= 26.88 && this.currentTime <= 30.92) {
                         $(".8").css("color", "orange"); 
                      } else if(this.currentTime > 30.92) {
                           $(".8").css("color", "black");     
                         }
                if(this.currentTime >= 32.1 && this.currentTime <= 34.73) {
                   $(".9").css("color", "orange");
                 } else if(this.currentTime > 34.73) {
                       $(".9").css("color", "black");    
                    } if(this.currentTime >= 34.73 && this.currentTime <= 39.43) {
                        $(".10").css("color", "orange"); 
                     } else if(this.currentTime > 39.43) {
                            $(".10").css("color", "black");   
                        } if(this.currentTime >= 39.43 && this.currentTime <= 41.19) {
                             $(".11").css("color", "orange");
                          } else if(this.currentTime > 41.19) {
                               $(".11").css("color", "black");     
                            }
              if(this.currentTime >= 42.35 && this.currentTime <= 46.30) {
                    $(".12").css("color", "orange");
                } else if(this.currentTime > 46.30) {
                        $(".12").css("color", "black");  
                    } if(this.currentTime >= 46.30 && this.currentTime <= 49.27) {
                         $(".13").css("color", "orange");
                       } else if(this.currentTime > 49.27) {
                            $(".13").css("color", "black");     
                         } if(this.currentTime >= 49.27 && this.currentTime <= 53.76) {
                                $(".14").css("color", "orange");
                              } else if(this.currentTime > 53.76) {
                                   $(".14").css("color", "black");     
                               }
              if(this.currentTime >= 53.76 && this.currentTime <= 57.78) {
                   $(".15").css("color", "orange");
                 } else if(this.currentTime > 57.78) {
                       $(".15").css("color", "black");    
                    } if(this.currentTime >= 57.78 && this.currentTime <= 60.15) {
                          $(".16").css("color", "orange");
                        } else if(this.currentTime > 60.15) {
                               $(".16").css("color", "black");   
                            }
});















