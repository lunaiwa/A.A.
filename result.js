document.addEventListener('DOMContentLoaded', () => {
    const recipeResults = document.getElementById('recipeResults');
    
    // Retrieve the recipes from session storage
    const recipes = JSON.parse(sessionStorage.getItem('recipes'));

    if (recipes && recipes.length > 0) {
        displayRecipes(recipes);
    } else {
        // Handle the case where there are no recipes
        recipeResults.innerHTML = '<p>No recipes found.</p>';
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
