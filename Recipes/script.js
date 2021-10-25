function sub(){
	var p = document.getElementById("pass").val();
	document.getElementById("pass").style.display = "none";
	var l = "/?pass=" + p;
	window.open(l,"_self");
};


function filterHTML(id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = getElements(id);
  for (i = 0; i < a.length; i++) {
    b = getElements(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};


getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};