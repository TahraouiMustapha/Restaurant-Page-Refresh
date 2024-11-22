
const menuPageLoad = () => {
    const myDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    headline.classList.add('headline');

    const text = document.createElement('p');
    text.textContent = 'the maine plate';

    myDiv.appendChild(headline);
    myDiv.appendChild(text);

    return myDiv;
}

export { menuPageLoad };