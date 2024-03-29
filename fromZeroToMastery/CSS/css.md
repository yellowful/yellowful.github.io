1. css的c是cascading，意思是同時出現相同的樣式時，以最後出現的為準。
2. 插入css有三種方式：
> 1. tag的一種屬性
> 2. 或在head裡用一組style的tag包住
> 3. 分開的一個檔案，在head裡去連結(rel代表relation)
3. 為什麼要把css分開成一個檔呢？主要是大的project如果通通塞在一個html檔，易讀性太差。而且可以讓設計人員不需要去煩腦html裡的程式碼，專心於設計css檔就好了。
4. 顏色配色用這個網站：  
https://paletton.com/
5. 常用的css的property參考：  
https://css-tricks.com/almanac/  
almanac有詳列property
6. css重要用法：  
<table>
  <tr>
    <th>css檔裡</th>
    <th>html檔裡</th>
    <th>說明</th>
  </tr>
  <tr>
    <td>h1, h2</td>
    <td>h1 /h1 <br>h2 /h2</td>
    <td>代表h1和h2都選擇了</td>
  </tr>
  <tr>
    <td>.xxx(.class)</td>
    <td>class = xxx</td>
    <td>很常用，很好用，可以重覆使用，是這個class都會被選</td>
  </tr>
  <tr>
    <td>#xxx(#id)</td>
    <td>div id = xxx /div</td>
    <td>html裡id是唯一，不能重覆</td>
  </tr>
  <tr>
    <td> * </td>
    <td></td>
    <td>所有沒被css設定過樣式的都會被設定</td>
  </tr>
  <tr>
    <td> p h2 </td>
    <td> p div h2 /h2 div /p</td>
    <td>選擇的是p裡面只要有h2的都會被選</td>
  </tr>  
  <tr>
    <td> p > h2 </td>
    <td>p h2 /h2 /p</td>
    <td>h2的父繼承自p時才會被選到，如果h2被div包到，這時候h2父繼承自div，則不會被選到</td>
  </tr>
  <tr>
    <td> p + h2 </td>
    <td>p h2 /h2 /p</td>
    <td>h2剛好接在p後面時才會被選到，如果中間隔有其它tag，則不會被選到。例如中間也有一個div，一樣不會被選到</td>
  </tr>
  <tr>
    <td> .xxx:last-child </td>
    <td>div .xxx <br> .xxx div</td>
    <td>每一個div裡面，最後一個class</td>
  </tr>  
  <tr>
    <td> .xxx:first-child </td>
    <td>div .xxx <br> .xxx div</td>
    <td>每一個div裡面，第一個class</td>
  </tr>  
  <tr>
    <td> !important </td>
    <td>color: pink !important</td>
    <td>很重要的一點就是，儘量不要用，因為會破壞css的規則，破壞程式易讀性，程式很大時，會找不到bug</td>
  </tr>  
  <tr>
    <td> h1:hover </td>
    <td> h1 /h1</td>
    <td>個人覺得有趣，但不實用，手機無法顯示效果<br>值得一提的是，要讓last child產生hover的話，語法為:hover:last-child，瀏覽器會去認最後那個last-child</td>
  </tr>  
</table>  

7. 其中，逗號最不特定，代表都選擇。空格較不特定，>和+都是比較特定的情況，>是和繼承有關，+是和連接有關。
8. 判斷重要性有三個原則：
> 1. 特定性：愈特定，重要性愈高，由加總最高重要性的方式畫出來。  
寫在html > 的tag裡(inline styles) > ID > class > 一般element
> 2. !important，但最好不要用。
> 3. css的出現順序，愈晚的愈優先。載入css樣式檔也是，列愈後面的檔，愈優先。
9. 其它selector練習：https://flukeout.github.io
> * :nth-child(2)：順得數第2個，而且是**不管哪種type**
> * A.className：所有這個class裡的a
10. 文字：
> * 可以改的常用屬性有style(italic)、weight(bold, lighter)、size(x%)、decoration(underline, line-throgh)
> * 網頁內容要顯示中文的話，記得在head的地方設定meta charset，另外可以在字型設定的地方(font-family)，備用字型放上google的字型，例如：Noto Sans TC。  
注意，html要在head載入網路的google fonts，這會有個缺點，網頁載入會稍慢一點。
> * 尺寸有px、em、rem，em是相對本段的比例，rem是相對root(html)的比例，所以調本段字型大小時，就不會受影響。
11. 圖片：
> * float屬性，可以讓文字繞圖，可以讓圖靠右或靠左。
> * clear:both屬性，則可以讓文字取消圖的float屬性，不再繞圖。
12. 盒子：
> * 由內而外是content, padding, border, margin
> * width和height是content的大小
> * display: inline-block的意思是content的文字，不自動斷行。
> * border要設solid才看得見  
13. position：
    1. static：沒什麼用途，就照html裡div的位置安排。
    2. relative：會照原本static所在位置，位移一定距離，很好理解。
       1. 位移位置是相對原本static的位置，而不是相對parent的位置。
       2. 不會影響兄弟的位置。
    3. absolute：最難理解，它會跳脫本身static的位置，相對某個ralative的parent的位置 而移動。
       1. 因為不管原本static的位置了，原本static的位置會消失，被兄弟div補上。
       2. 位置是相對parent移動，重點是這個parent必須不是static，如果是static就會忽略，會再找更上層。
       3. 要蓋在別的div上，就得用absolute才有辦法蓋在其他兄弟上。
14. 背景照片透明文字不透明的用法：
    1.  css沒有所謂透明背景的用法，而是把圖片設透明，然後把z軸改成-1、位置設成absolute，蓋在另一個relative圖層上，如下：
    2.  div {
          width: 200px;
          height: 200px;
          display: block;
          position: relative;
        }

        div::after {
          content: "";
          background: url(image.jpg);
          opacity: 0.5;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
15. 其他：
    1.  ::before和::after：
        1.  主要是在原來的tag「內」的content「前」和「後」，加入東西。
        2.  裡面可以加上屬性content:“內容”，如此可以不用用html而達到插入網頁內容的功能。
        