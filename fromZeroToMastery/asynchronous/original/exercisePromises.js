// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve,reject)=>{
  setTimeout(resolve,4000,'sucess');
})//過4秒後，會把'sucess'放進resolve這個function的參數，而它就會變成then的value

promise.then((value) => {
  console.log('value is '+value)
})



// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]


let promise = urls.map(
  url => fetch(url).then(value=>value.json()));

Promise.all(promise).then(array=>{
    array.forEach(item=>{
      console.log(item);
    }      
  )})
  .catch(item=>{
    console.log('there is an error in',item)
  })












// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?