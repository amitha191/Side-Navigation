
//Overlay Navigation
function openNav(){
    document.getElementById('mySidenav').style.width = "250px";
}
function closeNav(){
    document.getElementById('mySidenav').style.width = "0";
}
//Push Navigation
function openPushNav(){
    document.getElementById('mySidenav').style.width = "250px";
    document.getElementById("push").style.marginLeft = "250px";
}
function closeNav(){
    document.getElementById("push").style.marginLeft = "0";
    document.getElementById('mySidenav').style.width = "0";
}
//Push with Opacity for content
function openPushOpacNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("push-opacity").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("push-opacity").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

//Sidenav with Full Width
function openFullNav(){
    document.getElementById("mySidenav").style.width = "100%";
}
