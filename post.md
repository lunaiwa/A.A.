<html>
<head>
    <style>
        /* CSS for the comments container */
        #comments {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        /* CSS for each comment */
        .comment {
            border: 2px solid #ccc;
            padding: 10px;
            transition: border-color 0.3s ease-in-out;
            cursor: pointer;
            width: calc(25% - 10px); /* 25% width for four comments per row, minus gap */
            box-sizing: border-box; /* Include padding and border in the width */
        }
        /* Hover effect for comments */
        .comment:hover {
            border-color: #FF5733; /* Change the border color on hover */
        }
        /* Style for images in comments */
        .comment img {
            max-width: 100%;
        }
        /* CSS for the circular "Add Comment" button */
        .add-comment-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #FF5733;
            color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
        }
        /* CSS for the popup form */
        .popup-form {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 10px;
        }
        /* CSS for the close (X) button in the popup */
        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 20px;
            color: #888;
        }
        /* CSS for the name in the comment */
        .comment-name {
            font-size: 16px;
            color: #4CAF50; /* Change the color for the name */
            margin-bottom: 5px;
        }
        .form-input {
            width: 100%;
            padding: 5px 0;
            border: none;
            border-bottom: 5px solid #FF5733; /* Underline effect */
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease-in-out;
        }
        /* Change the underline color on input focus */
        .form-input:focus {
            border-bottom-color: #4CAF50;
        }
        /* CSS for the "Add Comment" button */
        .add-comment-button-form {
            background-color: #FF5733;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }
        .add-comment-button-form:hover {
            background-color: #4CAF50;
        }
    </style>
</head>
<body>
    <h1>Culinary Creations</h1>
    <h2>Post and share with everyone here!</h2>
    <br>
    <div id="comments">
        <!-- Existing comments will be displayed here -->
    </div>
    <div class="add-comment-button" onclick="toggleForm()">+</div>
    <div id="commentForm" class="popup-form">
        <div class="close-button" onclick="toggleForm()">X</div>
        <br>
        <input type="text" id="nameInput" class="form-input" placeholder="Your Name">
        <br>
        <br>
        <br>
        <textarea id="commentInput" class="form-input" placeholder="Type your comment here"></textarea>
        <br>
        <br>
        <br>
        <input type="file" id="imageInput" accept="image/*">
        <br>
        <br>
        <br>
        <button onclick="addComment()" class="add-comment-button-form">Add Comment</button>
        <!--<button onclick="clearComments()">Clear Comments</button>-->
    </div>

    <script>

        // Function to clear all comments
    function clearComments() {
        // Clear comments in local storage
        localStorage.removeItem('comments');

        // Clear the displayed comments
        var commentsContainer = document.getElementById('comments');
        commentsContainer.innerHTML = "";
    }

        // Function to toggle the visibility of the comment form
        function toggleForm() {
            var commentForm = document.getElementById('commentForm');
            commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
        }

        // Function to add a new comment with an image
        function addComment() {
            var name = document.getElementById('nameInput').value;
            var commentText = document.getElementById('commentInput').value;
            var imageInput = document.getElementById('imageInput');
            var image = imageInput.files[0];
            
            if (name.trim() === "") {
                alert("Please enter your name.");
                return;
            }

            if (commentText.trim() === "") {
                alert("Please enter a comment.");
                return;
            }

            if (!image) {
                alert("Please select an image.");
                return;
            }

            // Create a unique ID for the comment (you can use a more robust method)
            var commentId = 'comment_' + Date.now();

            // Create a new comment object
            var comment = {
                id: commentId,
                name: name,
                text: commentText,
                image: URL.createObjectURL(image) // Create a URL for the selected image
            };

            // Retrieve existing comments from local storage
            var existingComments = JSON.parse(localStorage.getItem('comments')) || [];

            // Add the new comment to the existing comments
            existingComments.push(comment);

            // Save the updated comments back to local storage
            localStorage.setItem('comments', JSON.stringify(existingComments));

            // Reset the input fields
            document.getElementById('nameInput').value = "";
            document.getElementById('commentInput').value = "";
            imageInput.value = "";

            // Update the displayed comments
            displayComments();

            // Hide the comment form after adding a comment
            toggleForm();
        }

        // Function to display comments
        function displayComments() {
            var commentsContainer = document.getElementById('comments');
            var comments = JSON.parse(localStorage.getItem('comments')) || [];

            // Clear the existing comments
            commentsContainer.innerHTML = "";

            // Display each comment
            comments.forEach(function(comment) {
                var commentDiv = document.createElement('div');
                commentDiv.classList.add('comment'); // Add the "comment" class for styling
                var commentName = '<div class="comment-name">' + comment.name + '</div>'; // Name styling
                var commentText = comment.text;
                var commentImage = comment.image ? '<br><img src="' + comment.image + '" width="100%">' : '';
                commentDiv.innerHTML = commentName + commentText + commentImage;
                commentsContainer.appendChild(commentDiv);
            });
        }

        // Initial display of comments
        displayComments();
    </script>
</body>
</html>
