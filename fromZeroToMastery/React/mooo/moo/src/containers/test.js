
        let randomRobots = [];    
        let searchData = async ()=>{
                let promiseFetch = await fetch(`https://swapi.co/api/people/?search=de`);
                let temp = await promiseFetch.json();
                const {results} = await temp;
                for await (let result of results){
                    result.id = result.url.split('/')[5];
                }
                console.log(results);
        }
       searchData();
