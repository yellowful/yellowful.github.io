

npm install redux
要裡面的createStore,combineReducers,applyMiddleware

npm install react-redux
要裡面的Provider和connect

npm install redux-thunk
要給promise用的

npm install redux-logger
要裡面的createLogger

弄個constant.js的檔案來存strings
主要是用variable比直接用string容易除錯
用來記錄action的名稱

弄個action.js
    const setSearchField
    type:'CHANGE_SEARCH_FIELD',
    payload:


action是用來記錄那些被event或promise或call back觸發，而接著動作的function名稱。

隨著action的增加，可以增加action和constant state

store會儲存所有的state，然後負責更新view

store配合dispatcher，把舊的state和action送給reducer，

reducer會吐出新的states，再送回stores

stores會再更新view

actions.js
裡面主要要export一個object
這個object有action的命名，和state(payload)。

再弄個reducers.js

要有initialState

reducer裡面主要要有一個function，
這個function要能輸入兩個變數，
一個變數是state(可能是舊的)，另一個變數是相對應的action，
function裡有一個switch，
會依據輸入的action名稱，return相對應的新state
事實上就是return一個object，裡面有原來的state，和要更新的state，也就是action.payload

default是原來的state

很重要的一點，state不能mutate，所以新的state一定要用object.assign，或是object spread operator。

總之這個reducer會回傳新的state

以上都是傳統的javascript

以下才是redux library在做的事情

index.js先import
{Provider} from 'react-redux'
redux-thunk
redux-logger
redux

app.js要import
{connect} from 'react-redux'

用createStore(reducer)來放這些state，

然後redux會把store當成props傳給app

只要印出store.getState，可以看到state的狀態。

利用<Provider>包住<App>，可以讓store這個props自動傳下去
所有要用redux的container(所謂的smart component)都要用Provider包住


connect
.subscribe


在app裡
import actions
import connect 

export default connect(mapStateToProps,mapDispatchToProps)(App)
把App丟進去connect裡，會得到一個需要兩個parameter的call back function，當這兩個parameter有值的時候，connect才會被invoke。


mapStateToProps
會是一個arrow function
輸入reducer丟出來的state
輸出一個object
property名稱: state.對應的reducer.state的名稱
(如果只有一個reducer，reducer要省略)


mapDispatchToProps也是一個arrow function
輸入dispatch
dispatch是store的一個method，用來把action傳給reducer
這個arrow function會回傳一個object
{property名稱:(event)=>dispatch(action名稱(event.target.value))}



其中onSearchChange的value也會是一個property，也就是會把function傳給onChange的property

event是一個onChange回傳的事件
 
dispatch裡面的setSearchField就是action回傳的object

但是這個object是還沒fulfilled的function，一旦fulfilled了，才會回傳object

如何fulfilled？就是把event.target.value當成action裡的text的parameter傳進去。




參考：
https://medium.com/4cats-io/%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-redux-7b08403c4957






react-dom
redux
react-redux


redux用來處理大量state
原本是用來解決database的大量query的問題

原理是把不同階層的state都存到state store中，然後靠著集中管理這些state，就可以控制整個app的顯示狀態

redux只管理container，不管裡component。

所有的state都是不可變的(inmutable),狀態改變都是新產生一個新的state，比較不會去錯誤動到state，讓資料傳遞是個one way data flow。

redux是用傳統的javascript回傳state和action
action
state



傳入redux的function connect，來控制app

middle ware：
    redux logger：顯示state
        import {createLogger} from 'redux-logger';
        import redux裡的applyMiddleware
        把applyMiddleware(logger)放到createStore裡面。
    redux DevTools

    rudux thunk：
        判斷傳的是值還是function，如果是function，等跑完才讓改state，然後才render
        在applyMiddleware裡，放在logger之前
        用在async
        會有三個state：pending,succes,failed
        在action裡import這三個const，然後action需要傳dispatch進去
        裡面fetch之前先dispatch pending
        fetch成功就dispatch success， 和 payload(就是state)
        錯誤就dispatch failed
        接著增加reducer，在這三種狀態下switch，並設定一個新的state，isPending。
        mapStateToProps放入{三個props:對應的三個state}
        mapDispatchToProps放入{props:arrow function}，這個arrow function要把dispatch放進reducer裡面。(注意，有另一種相反的functioning programing的寫法)
        原本放這個promise的地方就不用放了，可以直接放{this.props.這個新props}
        其中thunk會發現actions裡面的promise回傳的是一個function，它就會先dispatch pending，然後listen，等到資料回來了，才把action dispatch給reducer。
        
用redux的combineReducers來將兩個reducer合併到rootReducer，再把rootReducer放到createStore裡

多個container的時候，就用connect把這些container連接起來。

redux藉由這種方式，集中管理state和promise

不需要constructor來設定初值了，也不用在componentdidmount裡先跑function了，通通放在redux裡面去run


objectA
objectB




