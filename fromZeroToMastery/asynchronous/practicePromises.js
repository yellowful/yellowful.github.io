const promise = new Promise((resolved,reject)=>{
    if(true){
        resolved('Stuff Worked');
    } else {
        reject('Error, it broke')
    }
})

promise.then(result => result + ' 1')
.then(result => {
    throw Error;
    result += ' 2';
    console.log(result);
    return result})
.catch(() => console.log('err'))
.then(result => {
    result += ' 3';
    console.log(result);
})

//===========================================

const promise = new Promise((resolved,reject)=>{
    if(true){
        resolved('Stuff Worked');
    } else {
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'100')
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,'1000')
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,'5000')
})

Promise.all([promise,promise2,promise3,promise4]).then(values=>{
    console.log(values);
})//會等全部跑完之後才給values

//===================================================

const urls = [
    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

Promise.all(urls.map( url => fetch(url).then(resp=>resp.json())
)).then((value)=>{
    value.forEach(
        item => {
            console.log(item)
        }
    )
}).catch(console.log('there is an error'));

//========================================================

const urls = [
    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]


Promise.all(urls.map( url => fetch(url).then(resp=>resp.json())
)).then((value)=>{
    value.forEach(
        item => {
            console.log(item)
        }
    )
}).catch(console.log('there is an error'));

//=========================================================
//錯誤寫法，不會照著users,posts,albums順序印出

const urls = [
    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

const fetchPromise = urls.map(url => fetch(url));

fetchPromise.forEach(item =>{
    item.then(resp=>resp.json()).then(value=>{
        console.log(value);
    })
})

//=================================================================






















