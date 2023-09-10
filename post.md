<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .post {
            background-color: #fff;
            border: 1px solid #ccc;
            margin-bottom: 20px;
            padding: 10px;
        }
        .post img {
            max-width: 100%;
            height: auto;
        }
        .comments {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #ccc;
        }
        .comment {
            margin-bottom: 10px;
        }
    </style>
    <!-- Include Font Awesome for the heart icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>Post and Share</h1>
        <div>
            <h2>Create a New Post</h2>
            <form id="postForm">
                <label for="postText">Text:</label>
                <textarea id="postText" rows="4" cols="50" required></textarea>
                <br>
                <label for="postImage">Image (URL):</label>
                <input type="text" id="postImage">
                <br>
                <button type="submit">Post</button>
            </form>
        </div>
        <div id="postFeed">
            <!-- Posts will be displayed here -->
        </div>
    </div>

    <script>
        const postForm = document.getElementById('postForm');
        const postFeed = document.getElementById('postFeed');

        // Function to toggle the like and change the heart color
        function toggleLike(likeButton, likeCount) {
            let isLiked = false;
            likeButton.addEventListener('click', function() {
                isLiked = !isLiked;
                if (isLiked) {
                    likeButton.style.color = 'red';
                    likeCount.textContent = parseInt(likeCount.textContent) + 1;
                } else {
                    likeButton.style.color = '';
                    likeCount.textContent = parseInt(likeCount.textContent) - 1;
                }
            });
        }

        postForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const postText = document.getElementById('postText').value;
            const postImage = document.getElementById('postImage').value;

            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            if (postText) {
                const textParagraph = document.createElement('p');
                textParagraph.textContent = postText;
                postDiv.appendChild(textParagraph);
            }
            if (postImage) {
                const image = document.createElement('img');
                image.src = postImage;
                postDiv.appendChild(image);
            }
            const likeButton = document.createElement('button');
            likeButton.innerHTML = '<i class="far fa-heart"></i> Like';
            likeButton.style.color = ''; // Initially, the heart is not red
            const likeCount = document.createElement('span');
            likeCount.textContent = '0';
            const likeContainer = document.createElement('div');
            likeContainer.appendChild(likeButton);
            likeContainer.appendChild(likeCount);
            postDiv.appendChild(likeContainer);
            toggleLike(likeButton, likeCount); // Attach like functionality
            const commentSection = document.createElement('div');
            commentSection.classList.add('comments');
            postDiv.appendChild(commentSection);
            postFeed.appendChild(postDiv);
            postForm.reset();
        });
    </script>
</body>
</html>
