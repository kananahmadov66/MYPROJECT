document.addEventListener('DOMContentLoaded', function() {
    let postCounter = 1;

    const addButton = document.getElementById('addButton');
    const postList = document.getElementById('postList');

    addButton.addEventListener('click', function() {
        const postContainer = document.createElement('div');
        postContainer.className = 'post-container';

        const postLabel = document.createElement('span');
        postLabel.className = 'post-label';
        postLabel.textContent = `Post ${postCounter}`;

        const textArea = document.createElement('textarea');
        textArea.rows = 4;
        textArea.cols = 50;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';

        postContainer.appendChild(postLabel);
        postContainer.appendChild(textArea);
        postContainer.appendChild(deleteButton);
        postList.appendChild(postContainer);

        postCounter++;

        deleteButton.addEventListener('click', function() {
            postList.removeChild(postContainer);
        });
    });
});
