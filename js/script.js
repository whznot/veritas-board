const noPostsMessage = document.getElementById('noPostsMessage');
const postList = document.getElementById('postList');
const postForm = document.getElementById('postForm');
const nameInput = document.getElementById('name');
const textInput = document.getElementById('text');

import sendPost from 'api'

function addPost(name, content, timestamp) {
    const post = document.createElement('article');
    post.classList.add('post')

    post.innerHTML = `
        <p class="post-name">${name || 'Anonymous'}</p>
        <p class="post-text">${content}</p>
        <span class="timestamp">${timestamp}</span>
    `;

    postList.appendChild(post);

    if (noPostsMessage) {
        noPostsMessage.style.display = 'none';
    }
}

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim() || 'Anonymous';
    const content = textInput.value.trim();

    if (!content) {
        alert('Please enter some content for the post.');
    }

    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const timestamp = `${day}.${month}.${year} ${hours}:${minutes}`;

    addPost(name, content, timestamp);

    nameInput.value = '';
    textInput.value = '';
});