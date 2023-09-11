$(document).ready(function () {
    var table_length = 0;
    var cuisineElement = document.getElementById("cuisine_display");
    var cardContainer = document.getElementById("card_result");

    function clearContent() {
        var rowCount = $("#table_result tr").length;
        console.log(rowCount);
        cuisineElement.innerHTML = "";
        cardContainer.innerHTML = "";
    }

    $("#searchRecipe").click(function () {
        const cuisine = $(".cuisine.selected").val();
        const diet = $(".diet.selected").val();
        const type = $(".type.selected").val();
        const time = $("#time").val();

        const params = {
            cuisine: cuisine,
            diet: diet,
            type: type,
            time: time,
            addRecipeInformation: true,
            sort: 'calories',
            sortDirection: 'asc'
        };

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
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.addEventListener('click', () => {
                            // Handle card click here
                        });
                        const title = response.results[row].title;
                        const image = response.results[row].image;
                        const summary = response.results[row].summary;
                        card.innerHTML = `
                            <h3>${title}</h3>
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

        $(".cuisine, .diet, .type").removeClass("selected");
        $("#time").val("");
    });

    function handleButtonClick(button) {
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

