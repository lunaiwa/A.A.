<html>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <!--Load Jcquery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <body>
        <div class="container">
            <h1>Find your next meal!</h1>
            <!-- User input -->
            <label for="cuisine">Cuisine:</label>
            <select id="cuisine" name="cuisine">
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="indian">Indian</option>
                <option value="mexican">Mexican</option>
                <option value="greek">Greek</option>
                <option value="american">American</option>
            </select>
            <br>
            <br>
            <label for="diet">Diet:</label>
            <select id="diet" name="diet">
                <option value="pescetarian">Pescetarian</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </select>
            <br>
            <br>
            <label for="type">Meal Type:</label>
            <select id="type" name="type">
                <option value="breakfast">Breakfast</option>
                <option value="main course">Main course</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
            </select>
            <br>
            <br>
            <label for="time">Time (minutes):</label>
            <input type="number" id="time" name="time" min="0"><br><br>
            <!-- Recipe search button -->
            <button class="btn" id="searchRecipe">Search for Recipe</button>
            <br><br>
            <!-- Clear table button -->
             <button onclick="clearContent()">Clear</button>
            <br>
            <br>
            <!-- Display cuisine -->
            <div id="cuisine_display"></div>
            <!-- Display recipe information through table -->
            <table class="content-table" id="table_result">
            <br><br><br>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- data goes here-->
                </tbody>
            </table>
            <style>
                table, th, td 
                {
                    border: 1px solid black;
                    border-collapse: collapse;
                }
            </style>
        </div>
    </body>
</html>

<script>
    var table_length = 0; 
    // Get reference to cuisine
    var cuisineElement = document.getElementById("cuisine_display");
    <!-- Get a reference to the table-->
    var table = document.getElementById('table_result'); 

    <!-- If user wants to do new search, clear all rows & cuisine text-->
    function clearContent()
    {
        var rowCount = $("#table_result tr").length;
        console.log(rowCount);
        cuisineElement.innerHTML = "";
        for (i = 0; i < rowCount; i++)
        {
            <!-- Always delete the first row -->
            table.deleteRow(0);
        }
    }

    $(document).ready(function () 
    {

        $("#searchRecipe").click(function () 
        {
            <!--  User input variables ->
            const cuisine = $("#cuisine").val();
            const diet = $("#diet").val();
            const type = $("#type").val();
            const time = $("#time").val();
            console.log(cuisine);

            <!-- Get information on these parameters from API, add feature where recipes sorted by calories-->
            const params = 
            {
                cuisine: cuisine,
                diet: diet,
                type: type,
                time: time,
                addRecipeInformation: true,
                sort: 'calories',
                sortDirection: 'asc'
            };

            <!-- Fetch API using jquery -->
            const settings = 
            {
                async: true,
                crossDomain: true,
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
                method: 'GET',
                headers: 
                {
                    'X-RapidAPI-Key': '483daceee9mshf1639709c11dc69p1d6d83jsn6decc0d31612',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                },
                data: params
            };

            $.ajax(settings)
            .done(function (response) 
            {
                console.log(response);
                console.log(response.results.length)
                
                if (response.results.length === 0) 
                {
                    alert("No recipes found, please try something else!");
                } 
                else 
                {

                    <!-- Set the innerHTML to display text-->
                    cuisineElement.innerHTML = "Cuisine: " + cuisine;

                    <!-- Limit # of recipes displayed to 10-->
                    if (response.results.length > 10)
                    {
                        table_length = 10;
                    }
                    else
                    {
                        table_length = response.results.length;
                    }
                    <!-- Loop through response results array -->
                    for (let row = 0; row < table_length; row++) 
                    {
                        <!-- Create new table row-->
                        const tr = document.createElement('tr');

                        <!-- Create table cell for title -->
                        const tdTitle = document.createElement('td');
                        const title = response.results[row].title;
                        tdTitle.innerHTML = title;

                        <!-- Create table cell for image  -->
                        const tdImage = document.createElement('td');
                        const image = response.results[row].image;
                        tdImage.innerHTML = `<img src="${image}" alt="${title}">`;

                        <!-- Create table cell for summary -->
                        const tdSummary = document.createElement('td');
                        const summary = response.results[row].summary;
                        tdSummary.innerHTML = summary;

                        <!-- Append both cells to the current row -->
                        tr.appendChild(tdTitle);
                        tr.appendChild(tdImage);
                        tr.appendChild(tdSummary);

                        <!-- Append row to table -->
                        table.appendChild(tr);
                    }
                    
                }
            })
            .fail(function () 
            {
                alert("Failed to fetch exercise data from the API.");
            });

            <!-- Clear the select elements for the next entry --> 
            $("#cuisine").val("");
            $("#diet").val("");
            $("#type").val("");
            $("#time").val("");
        });
    });
</script>

