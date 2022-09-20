const URL = 'https://dog.ceo/api/breeds/image/random'
const imgContainer = document.getElementById('img-container');
const spinner = document.getElementById('loading');
const fetchButton = document.getElementById('fetch'); 

const fetchImage = () => {
    spinner.classList.toggle('invisible');
    fetch(URL).
    then(res => res.json()).
    then(data => {
        setImage(data.message)
        spinner.classList.toggle('invisible')
    }).catch( error => {
        throw new Error(error.message);
    })
}

const setSpan = (container, url) => {
    const img = new Image(); 
    let height, width;
    img.onload = function(){
        height = img.height;
        width = img.width;
        if (img.width === img.height) {
            container.style.gridColumn = 'auto / span 2';
            container.style.gridRow = 'auto / span 2';
        } else if (img.width > img.height) {
            container.style.gridColumn = 'auto / span 2';
        } else {
            container.style.gridRow = 'auto / span 2';
        }
      }
    img.src = url;
    return container;
}

const setImage = (url) => {
    let container = document.createElement('div');
    container.className = 'img-cell'; 
    container = setSpan(container, url);
    const img = document.createElement('img'); 
    img.src = url
    container.appendChild(img);
    imgContainer.insertBefore(container, spinner);
}

fetchButton.addEventListener('click', fetchImage)