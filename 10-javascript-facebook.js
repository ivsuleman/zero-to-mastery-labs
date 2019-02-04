// Create an object and an array which we will use in our facebook exercise. 



// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "irfan",
        password: "secret"
    },
    {
        username: "tom",
        password: "topsecret"
    },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

function isUserValid(user, pass) {


    for (i = 0; i < newsfeed.length; i++) {
        if (database[i].username === user
            && database[i].password === pass) {
            return true;
        }
    }
    return false;
}




function signin(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert('FAILED LOGIN!');
    }

    // for (i = 0; i < newsfeed.length; i++) {
    //     if (database[i].username === user
    //         && database[i].password === pass) {
    //         console.log(newsfeed);
    //     } else {
    //         alert('FAILED LOGIN!');
    //     }
    // }

    // if (
    //     (user === database[0].username &&
    //         pass === database[0].password)
    // ) {
    //     console.log("successful login!");
    //     console.log(newsfeed);
    // } else {
    //     alert("failed login!, try again")
    // }
}

var usernamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what\'s your password?");

signin(usernamePrompt, passwordPrompt);