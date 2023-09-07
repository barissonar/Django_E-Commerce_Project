document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('img-container').addEventListener('mouseover', function(){
        imageZoom('featured');
    });
});

function imageZoom(imgID) {
    let img = document.getElementById(imgID);
    let lens = document.getElementById('lens');

    lens.style.backgroundImage = `url(${img.src})`;

    let ratio = 3;

    lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';

    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(event) {
        let pos = getCursor(event);
        let positionLeft = pos.x - (lens.offsetWidth / 2);
        let positionTop = pos.y - (lens.offsetHeight / 2);

        positionLeft = Math.min(Math.max(positionLeft, 0), img.offsetWidth - lens.offsetWidth);
        positionTop = Math.min(Math.max(positionTop, 0), img.offsetHeight - lens.offsetHeight);

        lens.style.left = positionLeft + 'px';
        lens.style.top = positionTop + 'px';

        lens.style.backgroundPosition = `-${pos.x * ratio}px -${pos.y * ratio}px`;
    }

    function getCursor(event) {
        let bounds = img.getBoundingClientRect();
        let x, y;

        if (event.pageX || event.pageY) {
            x = event.pageX - bounds.left - window.pageXOffset;
            y = event.pageY - bounds.top - window.pageYOffset;
        } else if (event.touches) {
            x = event.touches[0].pageX - bounds.left - window.pageXOffset;
            y = event.touches[0].pageY - bounds.top - window.pageYOffset;
        }

        x = Math.min(Math.max(x, 0), img.offsetWidth);
        y = Math.min(Math.max(y, 0), img.offsetHeight);

        return { 'x': x, 'y': y };
    }
}

imageZoom('featured');
