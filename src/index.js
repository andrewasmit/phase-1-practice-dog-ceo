console.log('%c HI', 'color: firebrick')


const dogDiv = document.querySelector('#dog-image-container');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedDiv = document.querySelector('#dog-breeds');

fetch(imgUrl)
.then(res=>res.json())
.then(data=>handleImgs(data));


function handleImgs(e){
    // console.log(e.message);
    let imgArr = e.message.map(img=>{
        return `<img src = ${img}>`
    })
    // console.log(imgArr);
    imgArr.forEach(elem=>{
        dogDiv.innerHTML += elem;
    })
}


fetch(breedUrl)
.then(res=>res.json())
.then(data=>handleBreeds(data));

function handleBreeds(e){
    const breedObj = Object.keys(e.message);
    // console.log(breedObj);
    const breedArr = breedObj.map(breed=>{
        let li = `<li class= "breed-li">${breed}</li>`
        return li;
    })
    // console.log(breedArr);
    breedArr.forEach(elem=>{
        breedDiv.innerHTML += elem;
    })
}

breedDiv.addEventListener('click', function(e){
    let target = e.target;
    // console.log(target);
    target.style.color = 'red';
})