document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cuisine = document.getElementById('cuisine').value;
        const diet = document.getElementById('diet').value;
        const type = document.getElementById('type').value;
        const maxReadyTime = document.getElementById('maxReadyTime').value;

        // Store search parameters in session storage
        sessionStorage.setItem('searchParams', JSON.stringify({ cuisine, diet, type, maxReadyTime }));

        // Redirect to the results page
        window.location.href = 'results.html';
    });
});
