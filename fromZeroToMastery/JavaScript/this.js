const obj = {
    name: 'ricardo',
    sing(){
        return 'lalala '+this.name
    },
    singAgain(){
         return this.sing()+' !'//don't repeat yourself
    }
}
obj.singAgain();

//=======================================
function importantPerson(){
    console.log(this.name);
}

window.importantPerson();//undefined

const obj1 = {
    name:'Ricardo',
    importantPerson:importantPerson
}

const obj2 = {
    name: 'Marina',
    importantPerson:importantPerson//don't repeat yourself，可以不用重複寫console.log()
}

obj1.importantPerson();


//===========================================

const obj = {
    name:'Ricardo',
    sing(){
        console.log('a',this.name);
        var anotherFuction = function(){
            console.log('b',this.name)
        }
        anotherFuction();
    }
}
obj.sing();
//a Ricardo，this是指obj，lexical scope的行為
//b undefined，this是指window，dynamic scope的行為

//====================

const obj = {
    name:'Ricardo',
    sing(){
        console.log('a',this.name);
        var anotherFuction = ()=>{
            console.log('b',this.name)
        }
        anotherFuction();
    }
}
obj.sing();
//b Ricardo，this是指obj，lexical scope的行為
//ES6設計了arrow fuction，arrow function是lexical bound


//=========================

const obj = {
    name:'Ricardo',
    sing(){
        console.log('a',this.name);
        var anotherFuction = function(){
            console.log('b',this.name)//這裡的this是undefine
        }
        return anotherFuction.bind(this)
        //.bind將anotherFuction的this和sing的this綁住，傳到外面去
        //所以anotherFunction裡的this，才變成obj
    }
}
obj.sing()();
//以前用這個方法
//return bind之後，呼叫要兩個括號

//==================================

const obj = {
    name:'Ricardo',
    sing(){
        console.log('a',this.name);
        var self = this;
        var anotherFuction = function(){
            console.log('b',self.name)
        }
        return anotherFuction
    }
}
obj.sing()();

//另一個解決方式
//設定self來綁住this，然後用return把anotherFuction丟到外面
//丟到外面的another，自然裡面的self就會指向obj

//=======================================
