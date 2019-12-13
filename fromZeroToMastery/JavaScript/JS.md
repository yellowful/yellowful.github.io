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

