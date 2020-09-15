# html
1. 基本要記的tag有  
> * paragraph
> * strong
> * emphasize
> * oder list
> * unoder list(又稱為bulleted list)
> * list
> * horozontal line
> * image source(alt屬性是讓圖片無法正常顯示時，可以顯示的文字)
> * ankor reference
2. form：
   1. sumit一定要搭配form才會有效
   2. react底下的form
      1. 不能用sumit搭配form，因為會引發網頁離開。
      2. 可以改用tag button。
      3. techyons裡的form template有一堆有的沒的tag最好都刪掉，或改成div，以免出現怪異行為。
      4. 例如for、value在Reac裡沒什麼用，可以刪掉。
3. inpute的type有很多種：
   1. text
   2. textarea
   3. search：會出現xx讓你清除輸入的字
   4. file：
      1. 注意，onChange如果兩次點相同的檔名，不會觸發event。
      2. 用javascript先把檔案指定給某const，然後把這個event清空，就會觸發這個event了。 
4. division會把某段html隔絕成一區，在css中很好用，span很類似的功能，但是只專注在設定某行
5. div和span和內容無關，html 5和內容有關的tag，稱為semantic\(語法\)，例如：header, nav, footer，html 5新的semantic"有可能"讓google搜尋排名提高。  
感覺排版則沒什麼差別。
5. 設定背景顏色是style="background-color:yellow;"，設定背景相片是用style="background-image:url()"
6. table要記的有table head包住的會置中粗體，table row包住每一列，table data是包住每一格的內容
7. 播自己的影片檔用video的tag，播youtube的影片用iframe的tag，自己的聲音檔，用audio的tag可以播放
8. 要讓一整塊地方可以填文字要用textarea，用rows和cols來設定區域大小。
9. 如果要某一個區域讓使用者可以編輯文字，就要用一個div，屬性contenteditable設成true。
10. 要讓輸入的文字，當一離開文字框點別的東西，就submit出去，就要加上onblur的「事件屬性」。
11. 可以用svg的tag直接將svg向量圖嵌入html
12. 最基本的輸入的tag是input設定的type是text，其他常用的type還有search、date、email、password、number、summit、button、checkbox
    1.  checkbox是複選
    2.  radio是單選
    3.  react底下要去操作radio先預載某個選項的話：
        1.  要單一選項的checked的property設成true，其他選項設成false。
        2.  不能用onClick，要用onChange。
        3.  name不能使用了，只能用外面包label去用他。
13. 拉條的做法是input type設成range，生命值這種顯示條是設定meter的tag
14. 單選和多選的這種點選的選項，因為文字配合變化多端，所以要顯示的文字不需要被包在tag裡，而是value的屬性填入要顯示的文字就好，所以直接用input屬性設radio或checkbox就可以了。
15. 但下拉式選單，裡面每一個選項顯示方式固定，所以直接包在tag裡就好了，所以是用select配合option的tag處理。
