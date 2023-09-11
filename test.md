<!DOCTYPE html>
<html>
<head>
    <!-- Include external stylesheets -->
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="test.css" />
    <!-- Include jQuery library from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* Updated styles for cards to have 2 cards in a row */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between; /* Ensure equal spacing between cards */
        }
        .card {
            flex: 0 1 calc(50% - 20px); /* Limit to 50% width with spacing in between */
            max-width: calc(50% - 20px); /* Limit the maximum width of each card */
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            cursor: pointer;
        }
        .card:hover {
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body class="pad">
    <div class="container">
        <form id="recipeForm">
            <h3>Find your next meal!</h3>
            <h4 for="cuisine">Cuisine:</h4>
            <div class="button-group">
                <!-- Cuisine buttons -->
                <button class="form-button cuisine" type="button" value="chinese">CHINESE</button>
                <!-- Add more cuisine options here -->
            </div>
            <br>
            <h4 for="diet">Diet:</h4>
            <div class="button-group">
                <!-- Diet buttons -->
                <button class="form-button diet" type="button" value="pescetarian">PESCETARIAN</button>
                <!-- Add more diet options here -->
            </div>
            <br>
            <h4 for="type">Meal Type:</h4>
            <div class="button-group">
                <!-- Meal type buttons -->
                <button class="form-button type" type="button" value="breakfast">BREAKFAST</button>
                <!-- Add more meal type options here -->
            </div>
            <br>
            <h4 for="time">Time (minutes):</h4>
            <input type="number" id="time" name="time" min="0"><br><br>
            <button class="btn" id="searchRecipe" type="button">Search for Recipe</button>
            <button class="clear-button" onclick="clearContent()" type="button">Clear</button>
        </form>
    </div>
    <div id="cuisine_display"></div>
    <div class="card-container" id="card_result"></div>
    <script>
        $(document).ready(function () {
            var table_length = 0;
            var cuisineElement = document.getElementById("cuisine_display");
            var cardContainer = document.getElementById("card_result");

            function clearContent() {
                var rowCount = $("#table_result tr").length; // Clear content and table
                console.log(rowCount);
                cuisineElement.innerHTML = "";
                cardContainer.innerHTML = "";
            }

            $("#searchRecipe").click(function () {
                // Get selected values from buttons and input
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

                $.ajax(settings)
                    .done(function (response) {
                        console.log(response);
                        console.log(response.results.length);

                        if (response.results.length === 0) {
                            alert("No recipes found, please try something else!");
                        } else {
                            cuisineElement.innerHTML = "Cuisine: " + cuisine;

                            if (response.results.length > 10) {
                                table_length = 10;
                            } else {
                                table_length = response.results.length;
                            }

                            for (let row = 0; row < table_length; row++) {
                                // Create and populate recipe cards
                                const card = document.createElement('div');
                                card.classList.add('card');
                                card.addEventListener('click', () => {
                                    // Handle card click here
                                });
                                const title = response.results[row].title;
                                const image = response.results[row].image;
                                const summary = response.results[row].summary;
                                card.innerHTML = `
                                    <h4>${title}</h4>
                                    <img src="${image}" alt="${title}">
                                    <p>${summary}</p>
                                `;
                                cardContainer.appendChild(card);
                            }
                        }
                    })
                    .fail(function () {
                        alert("Failed to fetch exercise data from the API.");
                    });

                // Clear selected buttons and input value
                $(".cuisine, .diet, .type").removeClass("selected");
                $("#time").val("");
            });

            function handleButtonClick(button) {
                // Handle button clicks for selection
                const buttonGroup = button.parentElement;
                const buttons = buttonGroup.querySelectorAll('.form-button');
                buttons.forEach((btn) => btn.classList.remove('selected'));
                button.classList.add('selected');
            }

            const formButtons = document.querySelectorAll('.form-button');
            formButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    handleButtonClick(button);
                });
            });
        });
    </script>
</body>
</html>
