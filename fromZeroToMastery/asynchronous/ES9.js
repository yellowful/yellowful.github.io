const animals = {
    tiger:23,
    lion:5,
    monkey:2,
    bird:40
}

const {...rests} = animals;
console.log(rests);


const array = [1,3,5,7,9,11,13];
console.log(...array);



//==========================
const urls = [
    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

const promiseArray = urls.map(url=>{
    const data = fetch(url).then(value=>value.json())
    return data;
})

Promise.all(promiseArray)
.then(
    array=>array.forEach(item=>{
//debugger;
        console.log(item);
    })
)
.catch(value=>{console.log('the error is',value)})
.finally(console.log('this is gonna happen'));
//==========================
const urls = [
    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

const getData = async function (urls){
    const data = await urls.map(url=>fetch(url));
    for await (let item of data){
        let result = await item.json();
        console.log(result);
    }
}

getData(urls);