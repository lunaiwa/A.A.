// Get references to the post form and post feed elements in the HTML
const postForm = document.getElementById('postForm');
const postFeed = document.getElementById('postFeed');

// Function to toggle the like and change the heart color
function toggleLike(likeButton, likeCount) {
    let isLiked = false; // Initialize a variable to track whether the post is liked or not
    likeButton.addEventListener('click', function() {
        isLiked = !isLiked; // Toggle the liked status
        if (isLiked) {
            likeButton.style.color = 'red'; // Change the heart color to red when liked
            likeCount.textContent = parseInt(likeCount.textContent) + 1; // Increment the like count
        } else {
            likeButton.style.color = ''; // Reset the heart color when unliked
            likeCount.textContent = parseInt(likeCount.textContent) - 1; // Decrement the like count
        }
    });
}

// Add a submit event listener to the post form
postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the post text and image input values from the form
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').value;

    // Create a new post element (a div) for the user's post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post'); // Add the 'post' class for styling

    // Add a text paragraph to the post if the user entered text
    if (postText) {
        const textParagraph = document.createElement('p');
        textParagraph.textContent = postText;
        postDiv.appendChild(textParagraph);
    }

    // Add an image to the post if the user entered an image URL
    if (postImage) {
        const image = document.createElement('img');
        image.src = postImage;
        postDiv.appendChild(image);
    }

    // Create a like button and like count for the post
    const likeButton = document.createElement('button');
    likeButton.innerHTML = '<i class="far fa-heart"></i> Like';
    likeButton.style.color = ''; // Initially, the heart is not red
    const likeCount = document.createElement('span');
    likeCount.textContent = '0';

    // Create a container for the like button and count
    const likeContainer = document.createElement('div');
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);
    postDiv.appendChild(likeContainer);

    // Attach like functionality to the post using the toggleLike function
    toggleLike(likeButton, likeCount);

    // Create a section for comments on the post
    const commentSection = document.createElement('div');
    commentSection.classList.add('comments'); // Add the 'comments' class for styling

    // Add the comment section to the post
    postDiv.appendChild(commentSection);

    // Add the post to the post feed
    postFeed.appendChild(postDiv);

    // Reset the form input fields
    postForm.reset();
});
