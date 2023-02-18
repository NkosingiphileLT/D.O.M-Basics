//First way of accesssing an element
console.log(document.querySelector('#title'))


//Second way only if you have an ID element
console.log(document.getElementById('title'))


//Changing HTML
document.querySelector('#title').innerHTML += ' frontend simplifeied'


let a = 1

a = a +2

console.log(a)

//Changing CSS


//Make buton reponsive

function toggle(){
document.querySelector('body').classList.toggle("dark--theme")
}



