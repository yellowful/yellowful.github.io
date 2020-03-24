React學習筆記
1. React用virtual DOM來處理，DOM會根據virtual DOM來改變內容，所以React可以用virtual DOM來改變要改的一部分就好，不用重新載入整個DOM，所以速度可以很快。
2. 一個一個模組化，從atom => component =>... => page
3. 最主要是不用再去select各個element，而是可以直接用jsx寫html。例如：react底下，可以直接return一個element<div />，一般的JavaScript並不行。
4. 都在.src裡用，有index.js，各個component.js
5. 傳統的javascript的寫法，是要有一個html，裡面要有一堆element，然後js檔再去select，做邏輯判斷，要更動element就得createElement..等等。react則是所有的html tag都是直接用jsx產生，不用再去select了。
6. jsx裡用curly bracket包起來的，就是javascript。
7. 寫出的元件的可再用性比傳統的JS來得高。
8. 原理：
   1. index.js裡面去render 各個component。
   2. 各個component可在這個render裡用各個attribute，把各個參數傳到這個component裡，在component裡跑完，再跑回這個render裡顯示，用法如下：
      1. attribute名稱 = {};
      2. 字串處理：`xxx${JS的variable}XXX`
      3. render只能return一個element。
   3. arguement的傳遞：
      1. 引數是某object，裡面用destructure：{各個attribute} = 某object;
      2. 簡化成引數裡直接：{各個attribute}
   4. 靠import和export傳來傳去，如果import或export不是單一，指令有點不一樣。
   5. 資料可以用一個object的component存起來export，要用就像object一樣使用。
9. 版本：
   1. 舊版的app是用class，新版的app是用function。
   2. 舊版的jsx語法不是class，而是className，新版兩種都可以用。
10. export和import徹底研究：
   3. 最常的使用方式是<code>import A from './A'</code>：
    A這個檔案有default export的話，就會被import成A。
    <pre><code>
        //A.js
        export default 42;
    </code></pre>
    你import的名稱和export的名稱無關，import可以取任何想import而成的名字，以下import都可行：
    <pre><code>
        import MyA from './A';
        import Something from './A'
    </code></pre>
   4. 第二種用法為<code>import { A } from './A'
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
    1. 其他用法：
        把export的非default名稱，改名後才import
        <pre><code>
            //A.js
            export default 42;
            export const myA = 43;
            export const Something = 44;
            //B.js
            import X, { myA as MyX, Something as XSomething } from './A';
    2. 參考自：
     https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281
11. 主頁和app間值的傳送：
   5. class：透過主頁(index)內app的屬性指定特定值，值就會傳到app內去操弄DOM，app內要呼叫這個值就用<code>this.props.屬性</code>。
    class透過render這個function將jsx return回index。
   6. function：主頁(index)語法和class法相同，是用app的屬性指定特定值，值就會傳到app內去操弄DOM了，app內要呼叫這個值就不用this保留字了，直接用props參數來傳，要呼叫這個值就用<code>props.屬性</code>。
      1. function不需透過render，可以直接return jsx。
      2. 可以用<code>const {a,b,c} = props;</code>來destructuring
      3. 最方便的方式是在parameter的地方直接放<code>{a,b,c}</code>來destructuring
   7. index.js裡如果需要比較複雜的程式處理事情，就會丟出來給另一個component來做。這個component的js檔裡面，fuction的return前可以做loop、if、等複雜判斷，再丟給return，以畫出較複雜的大component。
   8. 用jsx來render出大、小階層不一的component，靠得是import、export、<component名 />傳來傳去；數值、資料則會靠attribute和parameter傳來傳去，有的object資料也會靠export和import傳來傳去。
   9. 靠props傳來傳去時，記得要destructure。
12. state：
   1. React靠props來向下傳資料，靠state來向上傳資料。
       1.  用法是在頂端，例如app.js中，不需要關鍵字fuction，定義一個method。把這個method放在目標Component的一個attribute中，當成props傳下去。
       2.  有這個被定義而需要被傳下去的method的Component，例如App.js，稱為container component。相對container component的是presentational components，單純只呈現畫面，和互動沒什麼關係。
       3.  這個fuction在Component的props中，會被event觸發，然後會上傳到頂端的app.js中被執行。
           1.  在constructor中會設好this.state的attribute，這些attribute的選擇，主要是會隨著browser一些event的發生而變動。
           2.  可以在這個fuction中放一個setState的method。
           3.  這個setState裡面要放至少一個this.state裡的attribute，因為browser的event發生而會從這個fuction回傳值，改變了這個attribute，而改變這個this.state。靠這this.state的改變，來改變其他props，再用props下傳改變其他Component。
   2. 完全靠props來向下傳資料的好處是，可以預期其他的Component非常的pure和deterministic，值不會亂變。
   3. 為什麼最頂端的App不是用function，而是用class的方式呢？
       1.  因為需要借用react寫好的this.state來修改，而function沒有extend的功能，自然無法改this.state。
   4. 最頂端用class的方式，所以import要有component。
13. 奇怪的地方：
    1.  和JS不同，function的定義竟然不用保留字function
14. Component的life cycle：
    1.  Mounting：constructor()=>render()=>componentDidMount()=>render()
    2.  State Update：setState()=>render()
    3.  Unmounting：去別的網頁時
15. props.children：state之外的另一種回傳方式，主要是回傳DOM的操作方式。
16. build完的檔是最佳化過的檔了，也轉成瀏覽器可以跑的檔了，可以直接拿build的檔去任何地方用。
17. 有dependency的放containers，獨立的放components資料夾。
18. 新style in line的用法，是用雙curly bracket下，用物件的屬性語法，jsx就會自動解析成css給DOM。
19. npm run biuld，建立精簡過的檔案。
20. Error Boundary：
    1.  弄一個ErrorBoundary的container component，所以會用class不是fuction。
    2.  主要是用componentDidCatch的功能：如果component本身有任何錯誤，就會跑componentDidCatch。
    3.  constructor的this.state裡面放hasError這個attribute。
    4.  componentDidCatch裡面放this.setState，用來改變hasError。
    5.  render()設定錯誤就呈現錯誤訊息，正確就呈現props.children。
    6.  到parent去，用這個container component把要用的component包起來。
21. 放到github上：
    1.  改package.json檔，放上github repository的連結。
    2.  在terminal裡下指令：<code>npm install --save gh-pages</code>
        改package.json檔，裡的scripts：
            "scripts": {
            "predeploy": "npm run build",
        -   "deploy": "gh-pages -d build"
        +   "deploy": "gh-pages -b master -d build"
            }
    1.  在terminal裡下指令：<code>npm run deploy</code>
    2.  github設定裡把master改成gh-pages branch