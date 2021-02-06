/*function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
};

function getDistance(event, target) {
    let differenceX = event.offsetX - target.x;
    let differenceY = event.offsetY - target.y;

    return Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
};

function getDistanceHint(distance) {
    if (distance < 10) {
        return "Boiling hot!"
    } else if (distance < 20) {
        return "Hot"
    } else if (distance < 40) {
        return "warm"
    } else if (distance < 80) {
        return "cold"
    } else if (distance < 160) {
        return "really cold"
    } else if (distance < 320) {
        return "really cold"
    } else {
        return "Freezing"
    }
};

let width = 300;
let height = 300;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("img").click(function(event) {
    clicks++;

    console.log(clicks);

    var distance = getDistance(event, target);

    var distanceHint = getDistanceHint(distance);

    $("p").text(distanceHint);

    if (distance < 8) {
        alert(`You have found the treasure in ${clicks}`);
    }
})*/

/*function randomLocation(size) { //This function operates as a machine that gets the number value and randomizd to find a random value inside of it and returns it
    return Math.floor(Math.random() * size);
};

function getDistance(event, target) { //This function's argument of event gets the value 
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistanceHint(distance) {
    if (distance < 10) {
        return "Boiling Hot!";
    } else if (distance < 20) {
        return "Really hot!";
    } else if (distance < 40) {
        return "hot";
    } else if (distance < 80) {
        return "warm";
    } else if (distance < 160) {
        return "cold";
    } else if (distance < 320) {
        return "really cold";
    } else {
        return "freezing";
    }
}

let click = 0;
let width = 300;
let height = 300;

let target = {
    x: randomLocation(width),
    y: randomLocation(height)
}

let distance;
let distanceHint;

$("img").click(function(event) {
    click++;

    distance = getDistance(event, target);

    distanceHint = getDistanceHint(distance);

    $("p").html(distanceHint);

    if (distance <= 8) {
        alert(`Great job you have found the treasure within this many tries ${click}`);
    }
});*/

/*function randomLocation(widthAndHeight) {
    return Math.floor(Math.random() * widthAndHeight);
}

function eventAndTargetDistance(event, target) {
    let differentInX = event.offsetX - target.x;
    let differentInY = event.offsetY - target.y;

    return Math.sqrt((differentInX * differentInY) + (differentInY * differentInY));
}

function getDistanceHint(distance) {
    if (distance < 8) {
        return "Boiling hot"
    } else if (distance < 20) {
        return "Very hot!"
    } else if (distance < 50) {
        return "hot!"
    } else if (distance < 80) {
        return "warm"
    } else if (distance < 100) {
        return "lukewarmish"
    } else if (distance < 120) {
        return "cold"
    } else if (distance < 160) {
        return "freezing"
    } else if (distance < 180) {
        return "super freezing"
    } else {
        return "Antartica Freezing!"
    }
}

let clicks = 0;
let width = 300;
let height = 300;

let target = {
    x: randomLocation(width),
    y: randomLocation(height)
}

$("img").click(function(event) {
    clicks++;

    var distance = eventAndTargetDistance(event, target);

    let distanceHint = getDistanceHint(distance);

    $("p").html(distanceHint);

    if (distance < 8) {
        alert(`Great job you have found the treasure in ${clicks} tries`);
    }
});*/

/*function randomLocation(size) {
    return Math.floor(Math.random() * size);
}

function distanceCalulator(event, target) {
    let distanceX = event.offsetX - target.x;
    let distanceY = event.offsetY - target.y;
    
    return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
}

function distanceHint(distance) {
    if (distance < 8) {
        return "Super hot!";
    } else if (distance < 20) {
        return "warm";
    } else if (distance < 50) {
        return "mid";
    } else if (distance < 80) {
        return "cool";
    } else if (distance < 100) {
        return "cold";
    } else if (distance < 120) {
        return "very cold";
    } else if (distance < 160) {
        return "freezing!";
    } else if (distance < 180) {
        return "Super freezing!";
    } else {
        return "Antarctica Freezing!"
    }
}

let clicks = 0;
let width = 300;
let height = 300;

let target = {
    x: randomLocation(width),
    y: randomLocation(height)
}

$("img").click(function(event) {
    clicks++;

    var distance = distanceCalulator(event, target);

    var adistanceHint = distanceHint(distance);

    $("p").text(adistanceHint);

    if (distance < 8) {
        alert("Great job you have found the treasure!");
    }
})*/

/*function randomLocation(size) {
    return Math.floor(Math.random() * size);
}

function distanceCalulator(event, target) {
    let distanceX = event.offsetX - target.x;
    let distanceY = event.offsetY - target.y;

    return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
}

function distanceHint(distance) {
    if (distance < 10) {
        return "Super hot!"
    } else if (distance < 20) {
        return "Very hot"
    } else if (distance < 40) {
        return "hot"
    } else if (distance < 60) {
        return "warm"
    } else if (distance < 80) {
        return "lukewarm"
    } else if (distance < 100) {
        return "cool"
    } else if (distance < 120) {
        return "cold!"
    } else if (distance < 140) {
        return "very cold!"
    } else if (distance < 160) {
        return "super cold!"
    } else {
        return "Freezing!"
    }
}

let width = 300;
let height = 300;
let clicks = 0;

let target = {
    x: randomLocation(width),
    y: randomLocation(height)
}

$("img").click(function(event) {
    clicks++;

    var distance = distanceCalulator(event, target);

    var distanceInformation = distanceHint(distance);

    $("p").html(distanceInformation);

    if (distance < 8) {
        alert(`You have found the treasure within ${clicks} tries!`);
    }
})*/

/*function randomLocation(size) {
    return Math.floor(Math.random() * size);
}

function distanceCalulator(event, treasure) {
    let distanceX = event.offsetX - treasure.x;
    let distanceY = event.offsetY - treasure.y;

    return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
}

function distanceHint(distance) {
    if (distance < 15) {
        return "Super hot!";
    } else if (distance < 20) {
        return "very hot!";
    } else if (distance < 40) {
        return "hot!";
    } else if (distance < 60) {
        return "warm";
    } else if (distance < 80) {
        return "lukewarm";
    } else if (distance < 100) {
        return "cool";
    } else if (distance < 120) {
        return "cold";
    } else if (distance < 140) {
        return "very cold!";
    } else if (distance < 160) {
        return "super cold!"
    } else {
        return "Super freezing!!"
    }
}

let clicks = 0;
let width = 300;
let height = 300;

let treasure = {
    x: randomLocation(width),
    y: randomLocation(height)
}

$("img").click(function(event) {
    clicks++;

    var distance = distanceCalulator(event, treasure);

    var distanceInformation = distanceHint(distance);

    $("p").html(distanceInformation);

    if (distance < 8) {
        alert(`Awesome job! You have found the treasure within ${clicks} tries`);
    }
})*/

function randomLocation(size) {
    return Math.floor(Math.random() * size);
}

function distanceCalculator(click, treasure) {
    let distanceX = click.offsetX - treasure.x;
    let distanceY = click.offsetY - treasure.y;

    return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY))
}

function distanceHint(distance) {
    if (distance < 10) {
        return "Super hot!";
    } else if (distance < 25) {
        return "Very hot";
    } else if (distance < 50) {
        return "hot";
    } else if (distance < 75) {
        return "warm";
    } else if (distance < 100) {
        return "lukewarm";
    } else if (distance < 125) {
        return "cool"
    } else if (distance < 150) {
        return "cold"
    } else if (distance < 175) {
        return "Very cold"
    } else {
        return "Antarctica cold!"
    }
}

let width = 300;
let height = 300;
let clicks = 0;
let clickCounter = 20;

let treasure = {
    x: randomLocation(width),
    y: randomLocation(height)
}

if (clickCounter === 0) {
    alert("Game over");
}

$("img").click(function(click) {
    clicks++;
    clickCounter--;

    if (clickCounter === 0) {
        alert("Game over");
    }

    var distance = distanceCalculator(click, treasure);

    var distanceInformation = distanceHint(distance);

    $("h1").text(distanceInformation);

    $("p").text(`${clickCounter} Tries left`);

    if (distance < 5) {
        alert(`Great job you have found the treasure within ${clicks} tries!`);
    }
})  

$("#easy").click(function(){
    $("img").css("width", "100").css("height", "100");
    $("h1").text(" ");
    $("p").text(" ");
    clickCounter = 20;
})

$("#medium").click(function(){
    $("img").css("width", "300").css("height", "300");
    $("h1").text(" ");
    $("p").text(" ");
    clickCounter = 20;
})

$("#hard").click(function(){
    $("img").css("width", "500").css("height", "500");
    $("h1").text(" ");
    $("p").text(" ");
    clickCounter = 20;
})