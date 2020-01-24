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
9. BackgroundGenerator的心得：
   1. 重點在於知道是用background:linear-gradient(方向,第一顏色,第二顏色);這個function的用法。
   2. . 要用JavaScript改寫css，是用「.style.屬性」去改寫，後面的linear-gradient()是字串。
   3. 叫出顏色選擇器的方法是iput，type是color。
   4. 我random顏色的方式是用16進位，這是個井字號加0~F組成的七個字的字串，我讓後面6個字母random出現。
   5. javascript中，字串可以用類似array的方式顯示某個字母，例如：'#33EEFF'要顯現第三個字母就xxx[2]，可以顯現，這部份和python一樣。甚至var a = ['first','word']，可以用a[1][2]來叫出r這個字母。但是和python不一樣的是，這並不是真的array，如果用a[1][2]=‘z’;並不能讓這個字母變成z。
   6. 所以顏色的字串如果要random就要先拆成array來處理，最後面用.joint('')組合回字串。
   7. css在用first-child和nth-child()時，數目是包含不同tag的element，如果選不到可改用first-of-type，就只會挑那一類的。
   8. Math.random()是0-1的浮點數，所以要乘上要的範圍，再加上Math.floor()，才會變整數。
   9. 要頁面一載入就印出數值，就要在addEventListener之外，執行一次印出。
   10. 問題：多個p時，理論上可以用first-child和nth-child()來選，但是為什麼我卻選不到？
10. scope：
    1.  最根目錄是window，如果在某fuction內要宣告全域變數，可以用window.a
    2.  小心if裡面宣告的scope會影響全域，因為if不是function。
11. ternary operator:
    1.  用在是非題，對指定一個值，錯指定另一個值，程式碼較精簡。
    2.  true ? 一個值:另一個值;
12. swith:
    1.  大部份由4個關鍵字構成：
        1.  switch:配合括號內的parameter。
        2.  case:後面接對應的argument
        3.  break:放在每個case最後，沒放的話，會執行下一個case，不會結束。
        4.  default：避免沒想到的情形。
    2.  用來簡化一堆的else if。
13. ECMA6：
    1. var和let的共同點：
        1.  fuction外宣告，fuction內沒宣告，就是全域變數。
        2.  fuction外宣告，fuction內又宣告，fuction內的就是區域變數。
        3.  也就是同名稱的變數，var若在function外宣告一次，在function裡宣告一次，裡面和外面互相獨立不相關。
    2. var和let的不同點：
       1. 在if或是loops的block中，同名稱變數var若在if外宣告一次，在if的block裡又宣告一次，裡面的值會污染外面，這和function的經驗不同，不容易debug，易出錯。
       2. 在if或是loops的block中，同名稱變數let若在if外宣告一次，在if的block裡又宣告一次，裡面的值會被隔絕，和外面值會不同，這和function的經驗一致，不容易出錯，容易debug。
       3. loop內若是有callback function，用var宣告算次數的變數的話，loop不會等callback function執行就會繼續往下跑，用let宣告算次數的變數的話，就會正常，等callback function被call了才會往下跑，符合一般經驗。
       4. var還有一個缺點，他可以前面不宣告，最後再宣告，這樣就會變成windows的全域變數，這點非常奇怪 ,很容易造成大的bug。
    3. 可以用const就不要用let，可以用let就不要用var，用const在大型的合作案，這個變數比較不會隨便被人改掉。
    4. const一個object的話，這個object不能再被改成別的object，**但是**卻可以變動裡面的屬性。
    5. 可以到 https://babeljs.io/ ，看如何將ECMA 6改寫成ECMA 5。
    6. template literals讓string裡，只要用${變數}，就可以處理變數，但要注意的是，他的括號不是括號，是用back-tick(重音符號)。
    7. 箭頭函式，用法就是把一般的函式取消function的保留字，直接用()=>{}來定義parameter和function，再把它放到一個變數裡，這種寫法讓程式較為clean。
    8. object可以很容易被destructuring，只要屬性名稱一樣，就會自動對應了。
    9. object還有一個神奇的特殊功能，竟然可以讓**值**當成屬性的名稱，只要被包在中括號裡就好，這個也太奇妙了吧。
    10. 新的型別symbol:宣告為symbol的目的是，即使兩個symbol的值相同，在if裡判斷時，也會被判斷為不同。
14. function進階：
    1.  兩層的箭頭函式，使用時會有兩個()，解讀技巧在於外層的變數會傳進內層的變數，也就是最左邊function的parameter會傳進最右邊function的變數裡。
    2.  三種常見名詞的函數，需要看得懂：
        1.  closure：當我們需要的變數或參數希望是一個function時，我們可以利用兩層function，讓回傳值是一個function，這個回傳的function就是個closure，例如兩層的箭頭函式。closure外層的變數，會讓內層可以用，也就是執行內層function時，找不到這個變數的宣告，就會朝父function找。
        2.  currying：currying讓原本多個參數的function，利用closure簡化成多個單一參數的function的過程。例如：原本curriedSum(a)(b)，利用closure變成add5(b)的過程，目的是簡化輸入參數。
        3.  compose：原本有兩個function，現在定義一個compose把兩個function串在一起，輸入的參數就是兩個function，兩且第二層會有一個function是另一個function的參數的情況，而變數引數的輸入是設計在第二層之中的參數。這個引數就會鑽入一個function後鑽出進入另一個function後再鑽出。
    3.  pure function：
        1.  deterministic：相同input，會獲得相同output。
        2.  no side effect：
            1.  不會有變數傳值出去，產生意外的影響，例如在function裡設一個windows的變數。
            2.  要傳值出去，都是透過return傳值。也不是靠著外部的變數來產生結果，都是靠著input來算值。
            3.  沒有console.log，也沒有alert。
        3.  有輸入和輸出，比較不會出現undefine的情況。
        4.  寫function最好是pure function，比較不會出現無法預期的情況。
15. array進階：
    1.  .forEach：括號內做完，並不置換array內的元件，不return，要置換的話，就把一個新array.push放裡面，值就會在裡面了。
    2.  .map：非常好用，括號內做完，會一個一個置換array內的元件，傳到外面來。
        1.  物件的陣列，.map裡在傳的值就是單一物件，這個單一物件的屬性裡若有陣列要用.map，就可以用物件.屬性.map()。
    3.  .filter：括號內放一個函式，這個函式能return true 或false，.filter就會把true的元件傳到外面來。
    4.  .reduce：是把一個陣列裡的元素運算過，結果記起來，把結果和下一個元素繼續運算，最後就reduce剩一個元素了。.reduce裡面第一個參數是一個function，fucntion的第一個參數是會被記住的accumulator，第二個參數是元素。.reduce裡面的第二個參數是，accumulator的起始值。
    5.  .forEach比較不pure。
16. Object進階：class
    1.  constructor:語法和function一樣，差別在於屬性加上關鍵字this，用來設計這個class有哪些屬性。
    2.  method:就是在constructor外定義的function。
    3.  extends：宣告子類別時，用來連結父類別。
    4.  super:宣告子類別時，要沿用父類別的屬性時，呼叫的函式。
    5.  new：宣告物件時的保留字。
    6.  instantiation：宣告新物件時，就會產生新instant。
    7.  this：觀念非常重要，指的是所在scope的父物件，注意是物件，不是類別。
    8.  scope：指的是所在位置的function或class裡。
    9.  pass by value：就像variant，“=”是pass by value，意思是等號兩邊用不同塊記憶體，改變其中一值，另一值不受影響。
    10.  pass by reference：像array和object佔的記憶體較大，所以“=”兩邊佔同一塊記憶體，改變其中一值，另一個值也會變。
    11.  array = array時，是pass by reference，若要pass by value，要用.concat()，來複製新的array。concat的用法是array1.concat(array2)，若只要複製array1，就讓()裡面是空的就好了。
    12.  設定object時也是pass by reference，若要pass by value，要用Object.assign()，其中注意，Object是保留字。
    13.  但是若object裡還有object，用Object.assign()會讓最裡面的object仍是pass by reference。若要最裡面的object是用pass by value，就得用JSON.parse和JSON.stringify來解決，但效能會降低。
    14.  JSON.parse：把string轉object。
    15.  JSON.stringify：把object轉string。
    16.  type coercion：JS引擎會自動改變變數的型別，修正人類的錯誤，稱為coercion，但這能力太強，要非常小心，最好不要用。永遠用“===”，不要用“==”。
    17.  []===[]為false因為兩個value相同，但reference不同。class有同樣的效果。
17.  ES7：
     1.   .includes()在判斷array裡是否有括號裡的元素，有的話就回傳true，沒有就回傳false。
     2.   .includes有另一個用法，是判斷這個字串裡是否有括號裡的字串，有的話傳true，反之傳false。
     3.   兩個星星的運算元，用來算次方。
18.  ES8：
     1.   .padStart在string前加字，第一個參數是要加幾個字，第二個參數是要加什麼字。.padEnd則是加在後面。
     2.   如果要處理一堆Object，要把object變array比較容易處理了：
          1.   Object.key得到一個key的array，要配合object[key]，才能拿到對應的value。
          2.   Object.value得到一個value的array。
          3.   Object.entries得到一個二維array，同時有key和value。二維陣列用map時，裡面的value是一個陣列。
19.  ES10：
     1.   .flat：可以把多層array去掉，沒放參數代表一層，全部去掉參數可以用Infinity。另一個功能是把空的element刪掉。
     2.   .join：不是ES10的功能，是舊功能，可以把array去掉，得到一個組合的string。
          1.   .flat和.join不同之處在於，.flat回傳的是array，.join回傳的是一個字串。
          2.   .join功能和.reduce有點像，計算用.reduce，字串用.join。
          3.   .join可以一次去掉多層array，但會把逗號保留住，解法是先.flat之後再.join。
     3.   .flatMap可以去掉多層array後，會傳element成為array。
     4.   技巧：回傳後是array的話，還可以再.method()一次。
     5.   .trimStart和.trimEnd可以刪string的字首或字尾的空白。
          1.   舊的功能只有trim，把所有的空白刪掉。
          2.   和.padStart及.padEnd功能相反。
     6.   Object.fromEntries和Object.entries功能剛好相反，是把array變回object。
     7.   try{} catch{}，try裡面如果不能跑，就執行cath裡面的東西，例如：發出錯誤訊息。catch可以有參數catch(error){}，用來傳遞系統的錯誤訊息。