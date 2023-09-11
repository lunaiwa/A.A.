$(document).ready(function () {
    // Initialize variables
    var table_length = 0; // Initialize the table length
    var cuisineElement = document.getElementById("cuisine_display"); // Get the cuisine display element
    var cardContainer = document.getElementById("card_result"); // Get the card result container element

    // Function to clear content
    function clearContent() {
        var rowCount = $("#table_result tr").length; // Count the rows in a table (Note: The element with id "table_result" is not in this code, check if it's needed)
        console.log(rowCount); // Log the row count to the console
        cuisineElement.innerHTML = ""; // Clear the cuisine display element
        cardContainer.innerHTML = ""; // Clear the card result container
    }

    // Handle click event on the "Search for Recipe" button
    $("#searchRecipe").click(function () {
        // Get selected values from buttons and input fields
        const cuisine = $(".cuisine.selected").val();
        const diet = $(".diet.selected").val();
        const type = $(".type.selected").val();
        const time = $("#time").val();

        // Define parameters for the API request
        const params = {
            cuisine: cuisine,
            diet: diet,
            type: type,
            time: time,
            addRecipeInformation: true,
            sort: 'calories',
            sortDirection: 'asc'
        };

        // Define settings for the AJAX request
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '483daceee9mshf1639709c11dc69p1d6d83jsn6decc0d31612',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            },
            data: params
        };

        // Make an AJAX request to the API
        $.ajax(settings)
            .done(function (response) {
                console.log(response); // Log the API response to the console
                console.log(response.results.length); // Log the number of results

                if (response.results.length === 0) {
                    alert("No recipes found, please try something else!"); // Display an alert if no recipes are found
                } else {
                    cuisineElement.innerHTML = "Cuisine: " + cuisine; // Display the selected cuisine

                    // Determine the number of results to display (up to 10)
                    if (response.results.length > 10) {
                        table_length = 10;
                    } else {
                        table_length = response.results.length;
                    }

                    // Create and populate recipe cards
                    for (let row = 0; row < table_length; row++) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.addEventListener('click', () => {
                            // Handle card click here (functionality to be implemented)
                        });
                        const title = response.results[row].title;
                        const image = response.results[row].image;
                        const summary = response.results[row].summary;
                        card.innerHTML = `
                            <h3>${title}</h3>
                            <img src="${image}" alt="${title}">
                            <p>${summary}</p>
                        `;
                        cardContainer.appendChild(card); // Add the card to the card result container
                    }
                }
            })
            .fail(function () {
                alert("Failed to fetch exercise data from the API."); // Display an alert if the API request fails
            });

        // Clear selected buttons and input value
        $(".cuisine, .diet, .type").removeClass("selected"); // Remove the "selected" class from cuisine, diet, and type buttons
        $("#time").val(""); // Clear the time input field
    });

    // Function to handle button clicks for selection
    function handleButtonClick(button) {
        const buttonGroup = button.parentElement;
        const buttons = buttonGroup.querySelectorAll('.form-button');
        buttons.forEach((btn) => btn.classList.remove('selected')); // Remove the "selected" class from all buttons in the group
        button.classList.add('selected'); // Add the "selected" class to the clicked button
    }

    // Add click event listeners to form buttons
    const formButtons = document.querySelectorAll('.form-button');
    formButtons.forEach((button) => {
        button.addEventListener('click', () => {
            handleButtonClick(button); // Call the function to handle button clicks
        });
    });
});
