console.log('%c HI', 'color: firebrick')


const dogDiv = document.querySelector('#dog-image-container');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedDiv = document.querySelector('#dog-breeds');
const dropdown = document.querySelector('#breed-dropdown')


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
    breedArr.forEach(elem=>{
        breedDiv.innerHTML += elem;
    })
}

breedDiv.addEventListener('click', function(e){
    let target = e.target;
    // console.log(target);
    target.style.color = 'red';
})



dropdown.addEventListener('change', function(e){
    let click = e.target.value;
    breedDiv.innerHTML = ''; 
    filterBreeds(click);
})

function filterBreeds(e){
    fetch(breedUrl)
    .then(res=>res.json())
    .then(data=> {
        const breedObj = Object.keys(data.message);
        const filteredObj = breedObj.filter(name=>name.slice(0,1)=== e);
        filteredObj.map(breed=>{
            let li = `<li class= "breed-li">${breed}</li>`
            return li;
        }).forEach(elem=>{
            breedDiv.innerHTML += elem;
        })
    }) 
}


