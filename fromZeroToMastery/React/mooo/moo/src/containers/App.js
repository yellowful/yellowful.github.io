import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorB from '../components/ErrorB'
import './App.css';


class App extends Component {
constructor(){
    super();
    this.state = {
        allRobots: [],
        searchfield: ''
    }//定義這個class產生物件時的各個初始值
//    console.log('constructor');
}

componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => {this.setState({allRobots:users})});
    let randomArray = [];
    for(let i=0;i<10;i++){
        let randomNumber = Math.floor(Math.random()*88);
        if (!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    }
    const getData = async (randomArray) => {
        // const delay = t => {    // 先撰寫一個等待的 function
        //     return new Promise(resolve => {
        //       setTimeout(resolve, t);
        //     });
        //   };
        let randomRobots = [];    
        for await (let randomNumber of randomArray){
                let promiseFetch = await fetch(`https://swapi.co/api/people/${randomNumber}/`);
                let temp = await promiseFetch.json();
                temp.id = randomNumber.toString()
                randomRobots.push(await temp);
    //                await delay(100);
        }
    //    debugger;
    //    console.log('componentDidMount',this);
        this.setState({allRobots:randomRobots});
    }    
    getData(randomArray);
}



onSearchChange = (event) => {
    //this.setState({searchfield: event.target.value});
    let searchData = async (searchfield)=>{
        const promiseFetch = await fetch(`https://swapi.co/api/people/?search=${searchfield}`);
        let temp = await promiseFetch.json();
        const {results} = await temp;
        for await (let result of results){
            result.id = await result.url.split('/')[5];
        }
        this.setState({allRobots:results});
    }
    searchData(event.target.value);
//    console.log('onSearchChange');
}
//定義onSearchChange，供searchBox的props下傳，event發生時，就setState
//和JS不太一樣的是，前面不用const、let、或function

render(){
//    console.log('render',this);
    const { allRobots } = this.state;
//為何filteredRobots不放在onSearchChange裡面，而需要移到render(){}裡面呢？
//因為這樣filteredRobots就才會是render()的區域變數，CardList要用filteredRobots時，才認得filteredRobots
//為何searchfield得在render之外呢？
//因為onSearch是一個function，有類似callback的功能，所以可以放在render外，而filteredRobots則不是function所以只能放render()內。
//console.log('render',this.state);

    // if (!allRobots.length){
    //     return<h1 className = 'tc'>Loading</h1>
    // } else{
            return(
                <div className='tc'>
                    <h1 className='f2'>RobotsFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorB>
                            <CardList robots={ allRobots } />
                        </ErrorB>
                    </Scroll>                
                </div>)
    //}   
}

}


export default App;


