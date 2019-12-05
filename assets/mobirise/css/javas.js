function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false)
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}

function lengthRange(inputtxt, minlength, maxlength)
{
   var userInput = inputtxt.value;
   if(userInput.length >= minlength && userInput.length <= maxlength)
      {
        return true;
      }
   else
      {
    alert("Please input between " +minlength+ " and " +maxlength+ " characters");
        return false;
      }
}

function validatePassword()
    {
     var new_password = document.getElementById("passw_new").value;
     var confirm_new_password = document.getElementById("passw_new_re").value;
     <!-- if they match, go to next page -->
        if ( new_password == confirm_new_password)
          {
             return true;
          }
     <!-- if they don't match, an error message is displayed -->
        else
          {
               alert("Passwords do not match.");
          }
             return false;
    }

function validateForm()
{
var x = document.forms["signup"]["your_name"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
var x = document.forms["signup"]["last_name"].value;
if (x==null || x=="")
  {
  alert("Last name must be filled out");
  return false;
  }

  var x = document.forms["signup"]["email_new"].value;
  if (x==null || x=="")
    {
    alert("Email must be filled out");
    return false;
  }
  var x = document.forms["signup"]["passw_new"].value;
  if (x==null || x=="")
    {
    alert("Your new password must be filled out");
    return false;
  }
  var x = document.forms["signup"]["passw_new_re"].value;
  if (x==null || x=="")
    {
    alert("Re-Enter your must be filled out");
    return false;
  }
  var x = document.forms["signup"]["month"].value;
  if (x==null || x=="")
    {
    alert("Month must be filled out");
    return false;
  }
  var x = document.forms["signup"]["day"].value;
  if (x==null || x=="")
    {
    alert("Day must be filled out");
    return false;
  }
  var x = document.forms["signup"]["year"].value;
  if (x==null || x=="")
    {
    alert("Year must be filled out");
    return false;
  }
if(document.getElementById('male').checked) {
} else if(document.getElementById('female').checked) {
} else {
  alert ("You must select a button");
  return false;
}
 return true;
}

function RedirectHome() {
    window.location="home.cgi";
}
function RedirectTimeline() {
    window.location="timeline.cgi";
}

function RedirectLogout() {
    window.location="logout.cgi";
}

function toggleOverlay(id){
//var overlay = document.getElementById('overlay');
var specialBox = document.getElementById(id);
//overlay.style.opacity = 1;
if(specialBox.style.display == "block"){
//overlay.style.display = "none";
specialBox.style.display = "none";

} else {
//overlay.style.display = "block";
specialBox.style.display = "block";
}
}

function ShowHideNav(id) {

var nav = document.getElementById(id);
if(nav.style.display == "block") {
nav.style.display = "none";
} else {
nav.style.display = "block";
}

}

function toggleUploadForm_to_none(){

var nav = document.getElementById('img_upload_form');
if(nav.style.display == "block"){
	nav.style.display = "none";
	}
	}

function toggleUploadForm_to_block(){

var nav = document.getElementById('img_upload_form');
if(nav.style.display == "none"){
	nav.style.display = "block";
	}
}

/* review Ajax function */

  var xmlDoc = null ;

  function load(from,to) {

  var fnext = from + 2;
  var fprev = from -2;
    if (typeof window.ActiveXObject != 'undefined' ) {
      xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
      xmlDoc.onreadystatechange = process ;
    }
    else {
      xmlDoc = new XMLHttpRequest();
      xmlDoc.onload = process ;
    }
    xmlDoc.open( "GET", "read_review.cgi?from="+from+"&to="+to+"&number=-1", true );
    xmlDoc.send( null );
    document.getElementById("j_more").innerHTML = "<div class=\"more\" onclick=\"load("+fnext+",2)\">More</div>";
  /*  document.getElementById("asdfgh").innerHTML = "<button onclick=\"load("+fprev+",2)\">prev</button>";*/

  }

  function process() {
    if ( xmlDoc.readyState != 4 ) return ;
/*    document.getElementById("out").innerHTML += "<div class=\"review\" id=\"rev_"+Math.random()+"\">"+xmlDoc.responseText+"</div>";// xmlDoc.responseText ;*/
document.getElementById("out").style.opacity = "0";
    document.getElementById("out").innerHTML += xmlDoc.responseText;

}//////////

  var left = 0;

  function frame() {
         left = left+0.1;  // update parameters
  document.getElementById("out").style.opacity = left;
    if (left == 1.0999999999999999)  // check finish condition
      clearInterval(id);
      return;
  }

//var id = setInterval(frame, 10);



  function empty() {
    document.getElementById("output").innerHTML = 'empty' ;
  }

	function clear_load(){
	document.getElementById("out").innerHTML = null;
	load(1,2);
		}

/*******/

function go_back() {
    window.history.back()
}

function unhide_uib_loading(){

	var loading = document.getElementById('loading');
	loading.style.display = "block";
	}