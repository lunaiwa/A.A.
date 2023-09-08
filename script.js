document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cuisine = document.getElementById('cuisine').value;
        const diet = document.getElementById('diet').value;
        const mealType = document.getElementById('mealType').value;
        const time = document.getElementById('time').value;

        fetchRecipes(cuisine, diet, mealType, time)
            .then((recipes) => {
                // Store the recipes in session storage
                sessionStorage.setItem('recipes', JSON.stringify(recipes));

                // Redirect to the results page
                window.location.href = 'results.html';
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    });

    async function fetchRecipes(cuisine, diet, mealType, time) {
        // Replace 'YOUR_API_KEY' with your actual Spoonacular API key
        const apiKey = 'd2f7c75442mshde016465b174ed9p10a7b5jsn1acedf7fc107';
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&diet=${diet}&type=${mealType}&maxReadyTime=${time}&apiKey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            throw error;
        }
    }
});
