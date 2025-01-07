function gallery() {
    document.getElementById("grid-gallery").innerHTML = 
    "<br>" + "Grid Gallery: A simple image gallery designed" +
    "<br>" + "using HTML and styled with CSS Grid to" +
    "<br>" + "display vintage-inspired photos.";
}


function gridshowdetails(id) {
    document.getElementById("grid-gallery").style.display = 'block';
}
function gridhidedetails(id) {
    document.getElementById("grid-gallery").style.display = 'none';
}



function formshowdetails(id) {
    document.getElementById("regi-form").style.display = 'block';
}
function formhidedetails(id) {
    document.getElementById("regi-form").style.display = 'none';
}


function calshowdetails(id) {
    document.getElementById("calc-details").style.display = 'block';
}
function calhidedetails(id) {
    document.getElementById("calc-details").style.display = 'none';
}



function tempshowdetails(id) {
    document.getElementById("temp-details").style.display = 'block';
}
function temphidedetails(id) {
    document.getElementById("temp-details").style.display = 'none';
}


function homeshowdetails(id) {
    document.getElementById("home-details").style.display = 'block';
}
function homehidedetails(id) {
    document.getElementById("home-details").style.display = 'none';
}



function javashowdetails(id) {
    document.getElementById("java-details").style.display = 'block';
}
function javahidedetails(id) {
    document.getElementById("java-details").style.display = 'none';
}

function send() {
    alert ("Thank you for reaching out! Your message has been submitted successfully. We'll get back to you soon.");
}