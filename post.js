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