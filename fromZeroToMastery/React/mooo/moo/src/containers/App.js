import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

//最頂端的流程
class App extends Component {

//設定初始值
constructor(){
    super();
    this.state = {
        allRobots: []
    }
}

//App載入後，第一個執行的流程
componentDidMount(){
    let randomArray = [];
    //產生10個亂數
    for(let i=0;i<10;i++){
        let randomNumber = Math.floor(Math.random()*88);
        if (!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    }
    //抓這10個亂數的Star War的人物
    const getData = async (randomArray) => {
        let randomRobots = [];    
        for await (let randomNumber of randomArray){
                let promiseFetch = await fetch(`https://swapi.co/api/people/${randomNumber}/`);
                let temp = await promiseFetch.json();
                temp.id = randomNumber.toString()
                randomRobots.push(await temp);
        }
        this.setState({allRobots:randomRobots});
        //allRobots在這一行被更新
    }
    //執行
    getData(randomArray);

}

//鍵盤打字時要執行的，這是自行定義的名稱
onSearchChange = (event) => {
    //必須要用arrow function這個ES6的語法
    //否則this不會被正確bind住，會是undefined
    let searchData = async (searchfield)=>{
        const promiseFetch = await fetch(`https://swapi.co/api/people/?search=${searchfield}`);
        let temp = await promiseFetch.json();
        const {results} = await temp;
        for await (let result of results){
            result.id = await result.url.split('/')[5];
        }
        //這行必須放在async裡面，才會被正確的執行
        //因為results是個promise，所以this.setState如果放在async外面，接受searchData所return的result
        //將會更新為一個promise，不會再管result是不是會再更新了
        //放這裏的話，this.setState就會等results更新時，才更新allRobots
        this.setState({allRobots:results});
    }
    //鍵盤發生敲擊時，回傳的event會傳入
    searchData(event.target.value);
}

render(){
    //當this.setState更新的時候，會重新render，allRobots就會被更新
    const { allRobots } = this.state;
            return(
                <div className='tc'>
                    <h1 className='f2'>RobotsFriends</h1>
                    {/* 
                    React就是靠searchChange這個props把
                    event從onSearchChange這個callback 
                    function傳回來。
                    這裡所有的this都是指App的instance
                    (class App產生的object)。
                    */}
                    <SearchBox searchChange = {this.onSearchChange}/>
                    {/* 利用定義這個component，讓children有捲軸的功能 */}
                    <Scroll>
                        {/* 利用這個component有定義componentDidCatch()，來顯示children的錯誤訊息 */}
                        <ErrorBoundry>
                            {/* 利用robots這個props把更新後的allRobots資料傳下去 */}
                            <CardList robots={ allRobots } />
                        </ErrorBoundry>
                    </Scroll>                
                </div>)
}



}
export default App;


