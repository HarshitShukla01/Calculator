let screen = document.getElementById("calculation");
buttons = document.querySelectorAll('button');
let svalue='';
for(btn of buttons)
{
	btn.addEventListener('click', function(e) {
	  btntext = e.target.innerText;
	  console.log(btntext);	

	  if(btntext=='x'){
	  	btntext='*';
	  	svalue += btntext;
	  	screen.value=svalue;
	  }

	  else if(btntext=='C'){
	  	svalue="";
	  	screen.value=svalue;
	  }

	  else if(btntext=='⌫'){
	  	svalue=svalue.substring(0,svalue.length-1);
	  	screen.value=svalue;
	  }

	  else if(btntext=='='){
	  	 screen.value=eval(svalue);
	  	 svalue="";
	  }

	  else{
	  	svalue+=btntext;
	  	screen.value = svalue;
	  }
	});
}

document.addEventListener("keypress",e=>{
	var key=e.key;
	
    // if (e.key === 'Enter') {
    //   screen.value=eval(svalue);
	  	//  svalue="";
    // }

    if(key=='/'||key=='*'||key=='+'||key=='-'||key=='('||key==')'||key=='=')
    {
       svalue+=key;
    screen.value=svalue;
    }
    else if (isNaN(key))
    {
     alert("Must input numbers");
     return false;
    }
    // else if(key==="Backspace")
    // {
    // console.log("Backspace Pressed");

    // }

	else{svalue+=key;
    screen.value=svalue;}
});
