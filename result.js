document.addEventListener('DOMContentLoaded', () => {
    const recipeResults = document.getElementById('recipeResults');

    // Retrieve the search parameters from session storage
    const searchParams = JSON.parse(sessionStorage.getItem('searchParams'));

    if (searchParams) {
        const { cuisine, diet, mealType, time } = searchParams;

        // Define API endpoint and parameters
        const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
        const apiKey = 'd2f7c75442mshde016465b174ed9p10a7b5jsn1acedf7fc107'; // Replace with your actual Spoonacular API key
        const queryParams = new URLSearchParams({
            cuisine,
            diet,
            type: mealType,
            maxReadyTime: time,
            apiKey,
        });

        // Fetch recipes based on search parameters
        fetchRecipes(apiUrl, queryParams)
            .then((recipes) => {
                if (recipes.length > 0) {
                    displayRecipes(recipes);
                } else {
                    recipeResults.innerHTML = '<p>No recipes found.</p>';
                }
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    } else {
        // Handle the case where search parameters are not available
        recipeResults.innerHTML = '<p>No search parameters found.</p>';
    }

    async function fetchRecipes(apiUrl, queryParams) {
        const fullApiUrl = `${apiUrl}?${queryParams.toString()}`;

        try {
            const response = await fetch(fullApiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            throw error;
        }
    }

    function displayRecipes(recipes) {
        recipeResults.innerHTML = ''; // Clear any previous content

        recipes.forEach((recipe) => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            // Recipe image
            const recipeImage = document.createElement('img');
            recipeImage.classList.add('recipe-image');
            recipeImage.src = recipe.image;

            // Recipe details
            const recipeDetails = document.createElement('div');
            recipeDetails.classList.add('recipe-details');
            recipeDetails.innerHTML = `
                <h2>${recipe.title}</h2>
                <p><strong>Equipment:</strong> ${recipe.equipment.join(', ')}</p>
                <p><strong>Nutrition Details:</strong> ${recipe.nutrition.nutrients.map(nutrient => `${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`).join(', ')}</p>
                <p><strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.originalString).join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.analyzedInstructions[0]?.steps.map(step => step.step).join(' ')}</p>
            `;

            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeDetails);
            recipeResults.appendChild(recipeCard);
        });
    }
});
