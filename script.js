function onready(){
    var y = window.innerHeight
    var x = window.innerWidth
    document.getElementById("buttons").style.top = (y-document.getElementById("buttons").offsetHeight)
    document.getElementById("buttons").style.left = (x/2-(document.getElementById("buttons").offsetWidth/2))
}

function towhat(){
    document.getElementById("sign").style.background = ""
    document.getElementById("when").style.background = ""
    location.hash = "what"
    document.getElementById("what").style.background = "yellow"
}

function towhen(){
    document.getElementById("sign").style.background = ""
    document.getElementById("what").style.background = ""
    location.hash = "when"
    document.getElementById("when").style.background = "yellow"
}

function tosign(){
    document.getElementById("what").style.background = ""
    document.getElementById("when").style.background = ""
    location.hash = "sign"
    document.getElementById("sign").style.background = "yellow"
}
