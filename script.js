const body = document.querySelector('body');

body.addEventListener('click', (e) => {

    const circle = document.createElement('div');

    circle.classList.add('circle');

    circle.textContent = 'HI';

    const colors = [
        'green',
        'red',
        'blue',
        'yellow',
        'purple',
        'pink',
        'gold',
        'orange'
    ];

    circle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;

    body.append(circle);

    setTimeout(() => {
        circle.remove();
    }, 2000);
});