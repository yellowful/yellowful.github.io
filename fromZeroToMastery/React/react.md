React學習筆記
1. React不是一種語言，是一種框架(frame work)，所用的語言是JavaScript，也就是React用一整套library和IDE，讓你用某一種風格和思維來寫JavaScript，讓套用這種框架寫法的人，很好溝通，交換模組，做大專案的應用。
2. React用virtual DOM來處理，也就是操弄virtual DOM來改變內容，操弄virtual DOM的好處是，只需要改變要改的一部分就好，不用重新載入整個DOM，所以速度可以很快。
3. index.html裡有個node的id是root，ReactDOM.render()，React的原理就是把這個node render出來。
4. 這種操弄virtual DOM的框架，特別適合寫one page app。
5. 不用再去select各個element，而是可以直接用jsx寫html(一個一個的node)，每一個node在React裡稱做component。例如：React底下，可以直接return一個element<div />，一般的JavaScript並不行。
6. 在React框架下，寫的code都是一個一個模組化，從atom => component =>... => page，都是component。
7. 主要App的code都在.src裡，有index.js，各個component.js，比較複雜的專案，一個component就一個資料夾。
8. 傳統的javascript的寫法，是要有一個html，裡面要有一堆element，然後js檔再去select，做邏輯判斷，要更動element就得createElement..等等。react則是所有的html tag都是直接用jsx產生，不用再去select了。jsx寫法是改良自mtml，和html幾乎是一樣，所以比querySelector和createElement直覺多了。
9. jsx裡用curly bracket包起來的，就是javascript。
10. 寫出的元件的可再用性比傳統的JS來得高，例如某個component點下去，那個component就會改變，改變後的狀態就只需要修改那個component就好了。而傳統JS不是以component來分，所以改變後，則可能需要動到其他地方程式碼。
11. 原理：
   1. index.js裡面去掛上app.js，再用app.js去render 各個component。
   2. 各個component可在這個render裡，用各個component的attribute，把各個參數傳到這個component的property裡，在component裡跑完，再跑回這個render裡顯示，用法如下：
      1. attribute名稱 = {};
      2. 字串處理：`xxx${JS的variable}XXX`
      3. render()只能return一個element。
   3. property(arguement)的傳遞：
      1. 可以把property看成是是某object，可以麻煩一點，在component裡面才設各個物件(或變數)等於prop.物件(或變數)，或用destructure：{各個attribute} = 某object;
      2. 其中各個attribute可以是variable、function、object都可以，畢竟在JS的世界，everything is object。傳下去的假如是function，在引數那邊也是要用curly bracket包住。
      3. 也可以簡化成引數裡直接：{property的各個attribute}
      4. 統整以上：在爸爸component裡的各個attributes會包成一個prop的大object，傳到小孩component的小括號裡，所以有兩個作法：一是把prop在component裡面做destructure，這時component裡的prop就沒有大括號；二是簡化寫法，把prop直接在小括號裡面destructure了，所以小括號裡面直接就是大括號包住attribute的名稱，而沒有prop這個大object。
   4. 靠import和export傳來傳去，如果import或export不是單一，指令有點不一樣。
   5. 複雜的資料可以用一個object的component存起來export，要用就像object一樣使用。
12. 版本：
   6. 舊版的create app後，app是用class，新版的app是用function，大部分app.js會用到setState，所以要改成class。
   7. 舊版的jsx語法不是class，而是className，新版兩種都可以用。
13. export和import徹底研究：
    1.  最常的使用方式是<code>import A from './A'</code>：
    A這個檔案有default export的話，就會被import成A。
    <pre><code>
        //A.js
        export default 42;
    </code></pre>
    雖然export 42，但有default，所以import成什麼名字都可以，你import的名稱和export的名稱無關，import可以取任何想import而成的名字，以下import都可行：
    <pre><code>
        import MyA from './A';
        import Something from './A'
    </code></pre>
    1.  第二種用法為<code>import { A } from './A'
      1. 只有export是取名為A時（不是default），才會被import。
      <code>export const A = 42;</code> 
      而以下import都没用：
      <pre><code>
        import { myA } from './A';
        import { Something } from './A'
      </code></pre>
      1. 和default混合時的使用方式：
        <pre><code>
            //A.js
            export default 42;
            export const myA = 43;
            export const Something = 44;
            //B.js
            import A, { myA, Something } from './A';
        </code></pre>
    2. 其他用法：
        把export的非default名稱，改名後才import
        <pre><code>
            //A.js
            export default 42;
            export const myA = 43;
            export const Something = 44;
            //B.js
            import X, { myA as MyX, Something as XSomething } from './A';
    3. 參考自：
     https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281
14. 主頁和app間值的傳送：
   1.  class：透過主頁(index)內app的屬性指定特定值，值就會傳到app內去操弄DOM，app內要呼叫這個值就用<code>this.props.屬性</code>。
    class透過render這個function將jsx return回index。
   2.  function：主頁(index)語法和class法相同，是用app的屬性指定特定值，值就會傳到app內去操弄DOM了，app內要呼叫這個值就不用this保留字了，直接用props參數來傳，要呼叫這個值就用<code>props.屬性</code>。
      1. function不需透過render，可以直接return jsx。
      2. 可以用<code>const {a,b,c} = props;</code>來destructuring
      3. 最方便的方式是在parameter的地方直接放<code>{a,b,c}</code>來destructuring
   3.  之所以在class裡要用this.props而function裡不用this，直接用props，是因為class本身不是object，而this代表的是class造出來的object，所以在class中要用props，就要加上this，代表是這個class造出來的object。function本身是object，所以叫props時，就不用加this。
   4.  index.js裡如果需要比較複雜的程式處理事情，就會丟出來給另一個component來做。這個component的js檔裡面，fuction的return前可以做loop、if、等複雜判斷，再丟給return，以畫出較複雜的大component。
   5.  用jsx來render出大、小階層不一的component，靠得是import、export、<component名 />傳來傳去；數值、資料則會靠attribute和parameter傳來傳去，有的object資料也會靠export和import傳來傳去。
   6.  props是保留字：
       1.  沒有先宣吿props，在component裡還是可以用。
       2.  constructor裡如果要用props，就得宣告，才不會出錯。
   7.  靠props傳來傳去時，記得要destructure。
15. state：
    1. React靠props來向下傳資料，無法向上傳資料，但靠event來向上觸發以改變state。
       1.  用法是在頂端，例如app.js中，不需要關鍵字fuction，定義一個method。把這個method放在目標Component的一個attribute中，當成props傳下去。
       2.  有state、有function需要被傳下去的Component，操控其他子孫component，甚至負責和後端溝通的component，例如App.js，稱為container component。相對container component的是presentational components，單純負責呈現畫面，和互動沒什麼關係，不需要state。
       3.  這個fuction在Component的props中，會被event觸發，然後會上傳到頂端的app.js中被執行。
           1.  在constructor中會設好this.state的attribute，這些attribute的選擇，主要是會隨著browser一些event的發生而變動。
           2.  可以在這個fuction中放一個setState的method。
           3.  這個setState裡面要放至少一個this.state裡的attribute，因為browser的event發生而會從這個fuction回傳值，改變了這個attribute，而改變這個this.state。靠這this.state的改變，來改變其他props，再用props下傳改變其他Component。
   8. 完全靠props來向下傳資料的好處是，可以預期其他的Component非常的pure和deterministic，值不會亂變。
   9.  為什麼最頂端的App不是用function，而是用class的方式呢？
       1.  因為需要借用react寫好的this.state來修改，而function沒有extend的功能，自然無法改this.state。
       2.  所以有state的話，就得用class。
       3.  並不是只有最頂端的app.js可以用class，任何需要用到state的component都可以用class。
       4.  如果用到的state和其他Component無關，就把自己設成class，這樣state最多就傳到自己和兒女而已，和其他父母兄弟的component無關。
   10. 最頂端用class的方式的話，import就要有Component。
16. this.setState()：
    1. react是用這個function來更新變數，要注意的是，他只適合用來更新event改變時造成的更新。也就是說，以前JS用callback function那些eventListener的情況，現在才用setState()來更新。
    2. 計算結果的更新不要用this.setState()來更新，直接讓變數更新就好。因為效率緣故，一個event可能只會更新一次state，下一個event發生前this.state可能都還不會更新。
    3. class裡面的set.State之所以裡面的state需要加上curly bracket，也是destructure的關係。
17. 奇怪的地方：
    1.  和JS不同，function的定義竟然不用保留字function。
    2.  後來發現是因為JS在class裡定義method本來就不用保留字。
    3.  class裡一般不會在render()以外設variable，variable都設在render裡面，這樣component才讀得到。
    4.  如果要設在render()以外，就要設在this.state裡，這樣component也可以讀得到。
18. Component的life cycle：
    1.  Mounting：constructor()=>render()=>componentDidMount()=>render()
    2.  State Update：setState()=>render()
    3.  Unmounting：去別的網頁之前執行
19. props.children：state之外的另一種回傳方式，主要是回傳DOM的操作方式。
20. autobind this：不易理解的觀念
    1.  原本ES6以前，如果在class或function裡定義一個method，而且要在callback裡使用this.method，this會是undefined。
    2.  這時候就需要在constructor裡寫上一行：this.method = this.method.bind(this)，而React也提供一項功能，在constructor裡打上autobind(this)，就會把所有method綁定了。
    3.  然而ES6之後有內建autobind功能了，所以只要用ES6之後的語法arrow function，就會autobind，什麼事都不用做，就可以用this.method在callback之中了。
21. build完的檔是最佳化過的檔了，也轉成瀏覽器可以跑的檔了，可以直接拿build的檔去任何地方用。
22. 有dependency的放containers，獨立的放components資料夾。
23. 新style in line的用法，是用雙curly bracket下，用物件的屬性語法，jsx就會自動解析成css給DOM。至於為什麼是雙curly bracket，我認為第一個barcket代表這是javascript的語法了，不是style或html了，第二個bracket代表這是在object裡面。
24. npm run biuld，建立精簡過的檔案。
25. Error Boundary：
    1.  弄一個ErrorBoundary的container component，而且會用到this.state，所以會用class不是fuction，名稱是自訂的。
    2.  主要是有componentDidCatch的功能：如果component本身有任何錯誤，就會跑componentDidCatch。
    3.  constructor的this.state裡面放hasError這個attribute。
    4.  componentDidCatch裡面放this.setState，用來改變hasError。
    5.  render()設定錯誤就呈現錯誤訊息，正確就呈現props.children。
    6.  到parent去，用這個container component把要用的component包起來。
26. 放到github上：
    1.  先要push到github上。
    2.  改package.json檔，放上github repository的連結，例如："homepage": "https://yellowful.github.io/StarWarBot/"。
    3.  在terminal裡下指令：<code>npm install --save gh-pages</code>
        改package.json檔，裡的scripts：
            "scripts": {
        +   "predeploy": "npm run build",
        -   "deploy": "gh-pages -d build"
        +   "deploy": "gh-pages -b master -d build"
            }
    4.  在terminal裡下指令：<code>npm run deploy</code>
    5.  github的pages設定裡把master改成gh-pages branch
    6.  build的時候，會做幾件事情：
        1.  babel轉換：將各個node的library轉成舊的javascript，因為瀏覽器甚至對ECMS6的支援性還很差。
        2.  minify：將程式變短變小，例如：只剩一行、變數只剩一個字，這樣可以加快瀏覽器下載和解析的速度。
        3.  uglify：因為javascript是看得到原始碼的，所以會把程式弄的比較機器化，讓人類比較難看得懂。

