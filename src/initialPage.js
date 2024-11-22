
const initialPageLoad = () => {
    const myDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome in our Restaurant';

    const text = document.createElement('p');
    text.textContent = 'some text about how wonderful the restaurant is';

    myDiv.appendChild(headline);
    myDiv.appendChild(text);

    return myDiv;
}

export { initialPageLoad };