/* this is the JavaScript page of the web https://dvirlibrary.000webhostapp.com */

function setCookie(cname1,cvalue1,cname2,cvalue2,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname1 + "=" + cvalue1 + ";"  + expires + ";path=/";
	var b = true;
    document.cookie = "log" + "=" + b + ";"  + expires + ";path=/";
}
function delete_cookieL() {
	document.cookie = "log" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = "username" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	window.open("exit.html", "_self");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function hide(id){
	var x = document.getElementById(id);
	if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function line(id){
	var x = document.getElementById('d'+id);
	var xx = document.getElementById('b'+id);
	if (x.style.textDecoration === "none"){
		x.style.textDecoration = "line-through";
		x.style.color = "#cec8c8";
		xx.innerHTML = "&#10003;";
		xx.classList.remove("w3-green");
		xx.style.backgroundColor = "red";
	} else{
		x.style.textDecoration = "none";
		x.style.color = "#000";
		xx.innerHTML = "&nbsp;&nbsp;";
		xx.classList.add("w3-green");
	}
}
function deleteT(id){
	var x = document.getElementById('d'+id);
	var xx = document.getElementById('e'+id);
	x.style.display = "none";
}

function smaller(){
	var l = location.origin + location.pathname + "?";
	var i;
	var d = 1;
	var x;
	var y;
	for(i = 0; i < 113; i++) {
    	try{
			x = document.getElementById('d'+i);
			if(x.style.display == "none" || x.style.textDecoration == "line-through"){
			}else{
				y=i;
				if(i<15){y=i;d=1;}
				else if(i>15&&i<=33){y=i; d = 2; y-=16; }
				else if(i>33&&i<=43){y=i; d = 3; y-=34; }
				else if(i>43&&i<=57){y=i; d = 4; y-=44; }
				else if(i>57&&i<=66){y=i; d = 5; y-=58; }
				else if(i>66&&i<=73){y=i; d = 6; y-=67; }
				else if(i>73&&i<=91){y=i; d = 7; y-=74; }
				else if(i>91&&i<=95){y=i; d = 8; y-=92; }
				else if(i>95&&i<=100){y=i; d = 9; y-=96;}
				else if(i>100&&i<=107){y=i;d='A';y-=101;}
				
				if(i>107){
					y=i;d='B';y-=108;
					l += d+'num';
					l += (y+1)+'=';
					l += x.cells[1].innerHTML;
					l += '&';
					
					l += 'Bnam';
					l += (y+1)+'=';
					l += x.cells[0].innerHTML;
					l += '&';
				}else{
					l += d+'num';
					l += (y+1)+'=';
					l += x.cells[1].innerHTML;
					l += '&';
				}
			}
        }catch(err){}finally{x = "";}
	}
	window.open(l, "_self");
}