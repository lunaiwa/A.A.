<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results</title>
</head>
<body>
    <h1>Search Results</h1>
    <div id="searchResults"></div>
    <button onclick="goBack()">Back to Search</button>

<script>
<!-- ... (Your existing HTML code on results.html) ... -->

<script>
    // Function to display results
    function displayResults(results) {
        const resultsContainer = document.querySelector('.results-container');
        
        results.forEach((result, index) => {
            const resultCard = document.createElement('div');
            resultCard.classList.add('result-card');
            
            const title = result.title;
            const image = result.image;
            const summary = result.summary;

            resultCard.innerHTML = `
                <h4>${title}</h4>
                <img src="${image}" alt="${title}">
                <p>${summary}</p>
            `;
            
            resultsContainer.appendChild(resultCard);
        });
    }

    // Sample results data (you should replace this with your actual data)
    const sampleResults = [
        {
            title: "Recipe 1",
            image: "image1.jpg",
            summary: "This is the summary for Recipe 1."
        },
        {
            title: "Recipe 2",
            image: "image2.jpg",
            summary: "This is the summary for Recipe 2."
        },
        // Add more results as needed
    ];

    // Call the displayResults function with your actual results data
    displayResults(sampleResults);
</script>

<!-- ... (Your existing HTML code on results.html) ... -->

    </script>
</body>
</html>
