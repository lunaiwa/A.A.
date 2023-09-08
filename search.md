<body>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="index.css" />
    <div class="container">
        <h1>Recipe Finder</h1>
        <form id="recipeForm">
            <label for="cuisine">Cuisine:</label>
            <input type="text" id="cuisine" name="cuisine" required><br><br>
            <label for="diet">Diet:</label>
            <input type="text" id="diet" name="diet"><br><br>
            <label for="mealType">Meal Type:</label>
            <input type="text" id="mealType" name="mealType"><br><br>
            <label for="time">Time (minutes):</label>
            <input type="number" id="time" name="time" min="0"><br><br>
            <input type="submit" value="Find Recipe">
        </form>
    </div>
    <div id="recipeResults" class="container">
        <!-- Recipe cards will be displayed here -->
    </div>
    <script src="script.js"></script>
</body>


