/*
    Task: Add an event listener for 'keyup'
    1. Capture the event in a 'let' called 'searchQuery' - storing the value
    2. Make sure the captured value is lowercase
    3. Log to the console to demonstrate it works
*/

const input = document.querySelector('#searchInput');
const nameNodes = document.querySelectorAll('.name');
let allNamesDOMCollection = [];

input.value = '';

nameNodes.forEach((name) => {
    allNamesDOMCollection.push(name.textContent);
});

input.addEventListener('keyup', function(event){
    let searchQuery = event.target.value.toLowerCase();

    for(let i = 0; i < allNamesDOMCollection.length; i++){
        const currentName = allNamesDOMCollection[i].toLowerCase();

        if(searchQuery.includes(currentName)){
            nameNodes[i].style.display = 'block';
        } else {
            nameNodes[i].style.display = 'none';
        }
        // console.log(
        //     `currentName: ${currentName} === ${searchQuery} \n`,
        //     searchQuery.includes(currentName)
        // );
    };
});

