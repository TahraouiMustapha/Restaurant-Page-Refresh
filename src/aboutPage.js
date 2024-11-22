

const aboutPageLoad = () => {
    const myDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact us';

    const text = document.createElement('p');
    text.textContent = 'jamal';

    myDiv.appendChild(headline);
    myDiv.appendChild(text);

    return myDiv;
}

export { aboutPageLoad } ;