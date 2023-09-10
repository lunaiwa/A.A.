document.addEventListener('DOMContentLoaded', () => {
    // User fills out all inputs 
    const recipeForm = document.getElementById('recipeForm');

    // When form is submitted 
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve user inputs 
        const cuisine = document.getElementById('cuisine').value;
        const diet = document.getElementById('diet').value;
        const type = document.getElementById('mealType').value;
        const maxReadyTime = document.getElementById('time').value;

        // Store search parameters in session storage
        sessionStorage.setItem('searchParams', JSON.stringify({ cuisine, diet, type, maxReadyTime }));

        // Redirect to the results page
        window.location.href = 'results.html';
    });
});
