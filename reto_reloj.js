

var s=0;
var m=0;
var h=0;

for(h=0; h<24; h++){
  
  for(m=0; m<60; m++){
    
    for(s=0; s<60; s++){
        setTimeout( console.log("segundos: "+ s +" minutos: "+ m +" horas: "+h),
  1000);
     
    }
  }
}