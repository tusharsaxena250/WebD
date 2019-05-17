var colors = ["Purple", "Green", "Black", "Blue"];
for(var i=0; i<colors.length; i++){
  var s = "rep choice is ";
  if((i+1)<=20){
    if((i+1)==1) s = s.replace("rep", "st");
    else if((i+1)==2) s = s.replace("rep", "nd");
    else if((i+1)==3) s = s.replace("rep", "rd");
    else if((i+1)>=4) s = s.replace("rep", "th");
  }
  else{
    if(((i+1)%10)==1) s = s.replace("rep", "st");
    else if(((i+1)%10)==2) s = s.replace("rep", "nd");
    else if(((i+1)%10)==3) s = s.replace("rep", "rd");
    else if(((i+1)%10)>=4) s = s.replace("rep", "th"); 
  }
  document.write("My ",i+1,s,colors[i],"<br>")
}