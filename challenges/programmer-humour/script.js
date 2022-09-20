const URL = 'https://xkcd.now.sh/?comic=latest';

fetch(URL).
    then(res => res.json()).
    then(data => {
        console.log(data)
        setImg(data.img)
    }).
    catch(err=>{
        throw new Error(err.message)
    })

const setImg = (url) => {
    const container = document.getElementById('img'); 
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img)
}