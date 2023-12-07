(function () {
    var start = performance.now();

    window.addEventListener('load', function () {
        var end = performance.now();
        var loadTime = end - start;

        const loadTimeDiv = document.createElement('div');
        loadTimeDiv.className = 'loadtime-info';
        loadTimeDiv.innerHTML = 'Load time: ' + (loadTime / 1000).toFixed(5) + 's';

        document.getElementsByClassName('main-flex')[0].appendChild(loadTimeDiv);
    });
})();