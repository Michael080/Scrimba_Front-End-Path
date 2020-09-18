/*
    Task: Add an event listener for 'keyup'
    1. Capture the event in a 'let' called 'searchQuery' - storing the value
    2. Make sure the captured value is lowercase
    3. Log to the console to demonstrate it works
*/

const input = document.querySelector('#searchInput');

input.addEventListener('keyup', function(event){
    let searchQuery = event.target.value.toLowerCase();

    console.log('event.target.value:', searchQuery);
})