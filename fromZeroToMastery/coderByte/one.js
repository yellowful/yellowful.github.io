function FindIntersection(strArr) { 
        let strArr1 = strArr[0].split(","); // 把傳入的str的第一個元素拆解
        let strArr2 = strArr[1].split(","); // 第二個元素拆解
    
        let mapedArr = strArr1.map((item1) => 
        //把拆解出的第一個元素作map，map的結果會成為一個陣列傳出來
        { 
          console.log("item1",item1);
          const filteredArr = strArr2.filter((item2) =>  
          // 第二個元素做filter，filter的結果會成為一個陣列傳出來
            {
              console.log("item2", item2);// 1,2,4,13,15,
              return item2 === item1;
              //當 兩元素相符，就傳出來
            })
          //console.log("filteredArr", filteredArr);
          return filteredArr;      
        })
        // code goes here  
        return mapedArr;   
      }
    
    const a = ["1,3,4,7,13", "1,2,4,13,15"]
    console.log(FindIntersection(a));