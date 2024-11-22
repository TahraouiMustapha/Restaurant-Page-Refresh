

const aboutPageLoad = () => {
    const myDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact us';
    headline.classList.add('headline');

    const text = document.createElement('p');
    text.textContent = '0792501199';

    myDiv.appendChild(headline);
    myDiv.appendChild(text);

    return myDiv;
}

export { aboutPageLoad } ;