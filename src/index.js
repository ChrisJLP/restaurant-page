import MyCat from './cat.jpg';

function component() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "This is a heading";
    content.appendChild(heading);

    const catImage = new Image();
    catImage.src = MyCat;
    content.appendChild(catImage);

    const paragraph = document.createElement("p");
    paragraph.textContent = `Wow this restaurant is fancy
    more text about how great it is
    you can get food here
    mmmmmmmmmmmmmmmmmmmmmmmmmmmm`;
    content.appendChild(paragraph);
}
component();