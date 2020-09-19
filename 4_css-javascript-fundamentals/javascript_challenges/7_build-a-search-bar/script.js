const input = document.querySelector('#searchInput');
const nameNodes = document.querySelectorAll('.name');
let allNamesDOMCollection = [];

// Reset search field on page load
input.value = '';

//Store name values from DOM in an array
nameNodes.forEach((name) => {
    allNamesDOMCollection.push(name.textContent);
});

input.addEventListener('keyup', event => {
    search(event);
});

//Find matching string values
function search (event) {
    let searchQuery = event.target.value.toLowerCase();

    for(let i = 0; i < allNamesDOMCollection.length; i++){
        const currentName = allNamesDOMCollection[i].toLowerCase();
        //Display matches
        if(currentName.includes(searchQuery)){
            nameNodes[i].style.display = 'block';
        } else {
            nameNodes[i].style.display = 'none';
        }
    };
}

