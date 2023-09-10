document.addEventListener('DOMContentLoaded', () => {
    // Where results will be displayed 
    const recipeResults = document.getElementById('recipeResults');

    // Retrieve the search parameters from session storage
    const searchParams = JSON.parse(sessionStorage.getItem('searchParams'));


    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '483daceee9mshf1639709c11dc69p1d6d83jsn6decc0d31612',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    
    // if (searchParams) {
    //     const { cuisine, diet, mealType, time } = searchParams;

    //     // Define API endpoint and parameters
    //     // URL DOESN'T WORK 
    //     //const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    //     //const apiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2';
    //     const apiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2';
    //     const apiKey = '483daceee9mshf1639709c11dc69p1d6d83jsn6decc0d31612'; 
    //     const queryParams = new URLSearchParams({
    //         cuisine,
    //         diet,
    //         type: mealType,
    //         maxReadyTime: time,
    //         apiKey,
    //     });

    //     // Fetch recipes based on search parameters
    //     fetchRecipes(apiUrl, queryParams)
    //         .then((recipes) => {
    //             if (recipes.length > 0) {
    //                 displayRecipes(recipes);
    //             } else {
    //                 recipeResults.innerHTML = '<p>No recipes found.</p>';
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching recipes:', error);
    //         });
    // } else {
    //     // Handle the case where search parameters are not available
    // //     recipeResults.innerHTML = '<p>No search parameters found.</p>';
    // // }

    // async function fetchRecipes(apiUrl, queryParams) {
    //     const fullApiUrl = `${apiUrl}?${queryParams.toString()}`;

    //     try {
    //         const response = await fetch(fullApiUrl);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         return data.results;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // function displayRecipes(recipes) {
    //     recipeResults.innerHTML = ''; // Clear any previous content

    //     recipes.forEach((recipe) => {
    //         const recipeCard = document.createElement('div');
    //         recipeCard.classList.add('recipe-card');

    //         // Recipe image
    //         const recipeImage = document.createElement('img');
    //         recipeImage.classList.add('recipe-image');
    //         recipeImage.src = recipe.image;

    //         // Recipe details
    //         const recipeDetails = document.createElement('div');
    //         recipeDetails.classList.add('recipe-details');
    //         recipeDetails.innerHTML = `
    //             <h2>${recipe.title}</h2>
    //             <p><strong>Equipment:</strong> ${recipe.equipment.join(', ')}</p>
    //             <p><strong>Nutrition Details:</strong> ${recipe.nutrition.nutrients.map(nutrient => `${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`).join(', ')}</p>
    //             <p><strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.originalString).join(', ')}</p>
    //             <p><strong>Instructions:</strong> ${recipe.analyzedInstructions[0]?.steps.map(step => step.step).join(' ')}</p>
    //         `;

    //         recipeCard.appendChild(recipeImage);
    //         recipeCard.appendChild(recipeDetails);
    //         recipeResults.appendChild(recipeCard);
    //     });
    // }
});
