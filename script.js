function onready(){
    var y = window.innerHeight
    //console.log(document.getElementById("buttons").style.height)
    var x = window.innerWidth
    document.getElementById("buttons").style.top = (y-document.getElementById("buttons").offsetHeight)
    document.getElementById("buttons").style.left = (x/2-(document.getElementById("buttons").offsetWidth/2))
}

function towhat(){
    location.hash = "what"
}
