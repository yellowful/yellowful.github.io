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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({allRobots:users})});
    debugger;
//    console.log('componentDidMount');
}

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
//    console.log('onSearchChange');
}
//定義onSearchChange，供searchBox的props下傳，event發生時，就setState
//和JS不太一樣的是，前面不用const、let、或function

render(){
    const { allRobots, searchfield } = this.state;
    debugger;
    const filteredRobots = allRobots.filter(
    robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
//為何filteredRobots不放在onSearchChange裡面，而需要移到render(){}裡面呢？
//因為這樣filteredRobots就才會是render()的區域變數，CardList要用filteredRobots時，才認得filteredRobots
//為何searchfield得在render之外呢？
//因為onSearch是一個function，有類似callback的功能，所以可以放在render外，而filteredRobots則不是function所以只能放render()內。

//console.log('render',this.state);
if (!allRobots.length){
    return<h1 className = 'tc'>Loading</h1>
} else{
        return(
            <div className='tc'>
                <h1 className='f2'>RobotsFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorB>
                        <CardList robots={ filteredRobots } />
                    </ErrorB>
                </Scroll>
                
            </div>)
        }   
    }
}


export default App;