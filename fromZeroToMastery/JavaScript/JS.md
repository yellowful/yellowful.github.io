#Java Script 筆記
1. javascript之所以放在下面，可以避免被javascript的程序卡住了，而可以先把*頁面*載入，讓使用者先看到頁面，再執行邏輯流程。
2. javascript這種script語言和python一樣，都會自動判斷型別，比較特殊的有：
> * prompt的輸入值，預設為string. 
> * 一個文字和一個數字相加，會判斷為文字相加。
> *  文字不能相減。
3. 最難的是function，重點有：
   * function並不一定要有參數。
   * 定義某變數時同時定義function，可以用匿名函數，而該變數就是這個function的物件。
   >* 這時如果function同時取一個名字，不會出現錯誤，但是沒有用，用這個名字呼叫function時，他會說沒定義，這個andrei沒有講到。
   >* 這時的{}要加上;作為結束。 
   * 另一個很像的情況，但完全不同的意義。若某變數放某個有引數值的function，則這個變數不是物件，而是function的回傳值。
   * arguement(引數)和parameter(參數)不同，parameter指的是定義函數時的變數、定義，而arguement是帶入該函數的參數的特定值。
4. data structure：
   * object太強大了，可以放任何東西：
   >* 可以放index，list的index就是0,1,...，然而object可以任意取名index，就是所謂的屬性。
   >* 可以放array在value裡面。
   >* 可以放fuction在value裡面，而這個fuction會變成所謂的method。
   >* object裡，要加入index和value用句點去指定就好了，而list則需要特殊的method。
   >* {}和null不相同，在object裡，{}可以放value進去，null則不行。
   * list的特性：
   >* 不需要再去想index要取什麼名字，而且index可以給予變數變化，可以用for迴圈存取，方便。
   >* javascript的list裡可以有不同的型別在裡面。
   >* list也可以放list在裡面，就變2維陣列。list裡有list裡有list就變3維陣列。 
5. 名稱：
   * expresion：表達示，通常會產生一個值，而且要以;為結尾。
   * function和object的共同點是，都有一個大括號包著，不同點是function在大括號外面會有關鍵字fuction。
   * 但object裡面可以有function的資料型態，這就稱為method。
   * fuction有兩種方式定義，一種是function declaration直接幫fuction取名，另一種是fuction expression，是把fuction放到變數裡。
   * 執行fuction叫calling或invoking。
   * 在變數裡面放值叫作assign，就是等號。
6. loop：
   * 共有四種：for、while、do while、for each
   * for：最常用，計數方式直接在參數的地方。一個小技巧，可以把for迴圈放在function裡，利用function的return來回傳值，並跳出迴圈。
   * while：無線迴圈直到不符合條件才跳出比較方便。
   * do while：無論如何都會做第一次，比較好用。
   * forEach：list用forEach最快，這個方法的parameter一定是一個function，而這個function的第一個parameter就是list的值，第二個parameter就是list的位置。
7. DOM：
   * DOM不是全世界，原來document是一個和內容比較有關的物件，他的兄弟還有alert、scrollbars、navigator、statusbar…等和視窗有關的物件，他們的爸爸物件是window。
   * .querySelector("h2")和.getElementsByTagName("h2")[0]的效果相同。
   * .querySlectorAll("h2")[0]和.getElementsByTagName("h2")[0]的效果一樣。
   * 只要是一次會選到好幾個，一定要用中括號指定是哪一個，不然會跑不出來。
   * .querySelector比document.getElementsByTagName常用，原因是.querySelector不管選誰的都不用改method，只是arugument不同，例如id的話要加井字，如果class要加句點。
   * .getAtribute和.setAttribute可以操弄html的tag的屬性，注意，是只有tag的屬性，而不能用style的屬性。而且當原本tag沒有設定屬性時，就無法操弄。
   * 用.style就可以改變style的屬性了。
   * 用.className是attribute而不是method，可以放class的名字。
   * 用.classList可以得到class的名稱，再加上.add可以加上class，.remove可以移除class，toggle則每執行一次就加上或移除class一次。這幾個都是method而不是attribute，名字都要當作arguments放進method裡。
   * .innerHTML也是屬性，可以改變內文，內文也可以加tag。
   * 要選父親是.parentElement，要選子卻是用.children，不用Element。
   * 使用時儘量存在變數裡，不要一直select，可以加快chrome速度。
8. shopping list心得：
   * 作法：
   >* 點按鈕就會新增項目(用creatElement())。
   >* 將特定文字加入新增項目(把input轉成text node元件後，用.appendChild加入list當中)。
   >* 將輸入區的文字帶入新增項目(用input.value的屬性)。
   >* 判斷輸入區有文字才能帶入新項目。
   >* 監聽輸入的是enter也能新增項目(用addEventListener("keypress",function)，enter的keycode是13)。
   >* 監聽列表是否被點擊，並將被點擊的項目指定切換刪除線格式(用classList.toggle()的方法來作)。
   >* 新增新項目時，將按鈕也一起帶入新增項目(建立delete button，然後加入list當中)。
   >* 監聽條件修改，監聽到文字就切換刪除線，監聽到刪除鍵，就刪除項目。(刪除父項目用target.parentElement.remove()的方法)
   >* 補上新增新項目時，要將新項目的刪除鍵為被監聽的對象。(重新querySelectAll所有項目，然後將最後一個element設為監聽)
   * 要注意的細節：
   >* .appendChild的argument只能是element，所以文字要用.creatTextNode轉成text node的element才能被加入list裡。
   >* 將按鈕也一起帶入新增項目會造成點前面的文字產生刪除線，也會造成button的文字一起產刪除線，解決方式是，將前面的文字用一個span包住，用if判斷，只有點到span才給他刪除線。
   >* .addEventListener在監聽的時候，所有的母、子元件都會一起監聽，所以要用.target來選子元件，.currentTarget來選父元件。
   >* 新增的list的刪除鍵沒有產生刪除項目的功能，主要是因為新增的按鈕沒被監聽，所以新增list時，要去將新的按鈕設定監聽。
   >* 而設定新增按鈕被監聽時，會發現找不到新增的按鈕可以被設定，所以需要重新用.querySelectorAll更新選擇所有的按鈕。

