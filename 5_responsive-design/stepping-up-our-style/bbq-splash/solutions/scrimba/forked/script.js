let registration = document.getElementById("registration")
registration.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault();
    // use FormData to get the User's name and email    
    const data = new FormData(event.target);
    const userFirstName = data.get('firstName');
    const userEmailAddress = data.get('userEmailAddress');
    const mainContent = document.getElementById('main-content');

    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    mainContent.innerHTML = updatedHtmlContent;
});