document.addEventListener('DOMContentLoaded', function () {
    var fetchCount = 0;
    var currentId = 1;
    var commentButton = document.getElementById('comment-button');

    function fetchAndUpdateText() {
        var commentsContainer = document.getElementById('comments-container');
        var preloader = document.getElementById('preloader');
        var errorMessage = document.getElementById('error-message');

        if (fetchCount % 2 === 0) {
            currentId = getRandomInt(100, 200);
        } else {
            currentId = getRandomInt(1, 100);
        }
        fetchCount++;

        commentsContainer.style.display = 'none';
        errorMessage.style.display = 'none';
        preloader.style.display = 'block';

        fetch('https://jsonplaceholder.typicode.com/comments/' + currentId)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                commentsContainer.innerHTML = '<p>' + data.body + '</p>';
                commentsContainer.style.display = 'block';
                preloader.style.display = 'none';
                errorMessage.style.display = 'none';
            })
            .catch(function (error) {
                console.error('Error:', error);
                preloader.style.display = 'none';
                commentsContainer.style.display = 'none';
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Что-то пошло не так';
            });
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    commentButton.addEventListener('click', function () {
        fetchAndUpdateText();
    });
});