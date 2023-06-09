let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];


let activeUsers = new Array();
let nbrActifs = countActiveUsers(users);

function countActiveUsers(users) {
    let i = 0;
    users.forEach(function(user){
        if(user.isActive){
            activeUsers.push(user);
            i++;
        }
    })
    return i;
}

console.log(`We currently have ${ nbrActifs } active users.`);

let nbrBlueEyes = hasBlueEyes(activeUsers);

function hasBlueEyes(users) {
    let i = 0;
    users.forEach(function(user){
        if(user.eyeColor === "blue"){
            i++;
        }
    })
    return i;
}

console.log(`Out of our currently ${nbrActifs} active users, ${nbrBlueEyes} have blue eyes.`);




function getActiveUsersAges(users) {
    let allAgesActifs = new Array;
    
    users.forEach(function(user){
        allAgesActifs.push(user.age);
    })
    return allAgesActifs;
}

let agesActifs = getActiveUsersAges(activeUsers);


function computeActiveUsersAverageAge(ages) {
    let totalAge = 0;
    ages.forEach(function(age){
        totalAge = parseInt(totalAge) + age;
    });
    return totalAge / ages.length;
}

let averageAges = computeActiveUsersAverageAge(agesActifs);
console.log(`Out of our currently ${nbrActifs} active users, the average age is ${averageAges}.`);

function setMultronToCenturia(users) {
    users.forEach(function(user){
        user.company = "CENTURIA";
    });
}

function getMultronUsers(users) {
    let usersMultron = new Array;
    users.forEach(function(user){
        if(user.company === "MULTRON"){
            usersMultron.push(user);
        }
    });
    return usersMultron;
}

let usersMultron = getMultronUsers(activeUsers);
let nbrUserMultron = parseInt(usersMultron.length);
setMultronToCenturia(usersMultron);



console.log(`${nbrUserMultron} user companies have been changed from MULTRON to CENTURIA.`);