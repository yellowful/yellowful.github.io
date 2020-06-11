Backend
1. 什麼是前端、什麼是後端？
   1. 你去pchome買東西會發生什麼事？pchome會有一台電腦（所以稱做服務端，server），你也會有一台手機（也算一台電腦，稱做客戶端，client），這筆交易要開始的話，需要把兩台電腦連接在一起，也就是server端會傳一個畫面相關的資料給client端，這些畫面怎麼顯示相關的資料，相關資料有html、css、javascript三種檔案組成，寫這三種檔案，專門呈現畫面的就稱為前端工程師。
   2. 你在pchome註冊之後，pchome會需要把你註冊相關資料儲存起來，不然下次你來買的時候，他就不知道你註冊過了。還有很多資料，你買過哪些東西啊，你放在待購的產品啊，之類的。這些資料平常使用時，不需要回傳到你的瀏覽器給你看，但是卻得儲存起來，不管你關機了(client)，或pchome(server端)關機了，都不能忘記。寫程式把這些東西儲存到一個資料庫，並且容易搜尋出來，驗證使用者正確性，怎麼把前端的資料傳給瀏覽器...等等，就是後端工程師的工作。
   3. 這裏比較容易搞混的地方在於：
      1. html、css、javascript是前端負責寫的，因為是關於使用者看得到的網頁相關操作流程，所以屬於前端。但是這幾個檔案要放在那裡，怎麼放，怎麼傳給client卻是server的事，也就是後端負責。
      2. 前端的資料會傳給client的browser，在瀏覽器裡面執行程式，但是平常前端的資料是儲存在server端，而不是儲存在client端的browser中，只有browser要的時候，才傳給browser執行，使用者用完關掉browser，client端就不再有這幾個前端資料了。
   4. 把pchome想像成一間實體店面，你走近店裏消費，店就是服務端(server端)，你就是客戶端(client端)，而前來招呼你的鮮肉或正妹業務就是前端，前端要跟你介紹產品，幫助你走完結帳流程。假如你跟業務買了一隻手電筒，結完帳之後，會有以下消費者看不到的事，都是後端在處理處理。
      1. 上架人員把手電筒補貨到架上
      2. 會有人通知廠商要進貨
      3. 會有人把這隻交易的相關資料都記錄下來
      4. 指派其他業務接洽新客戶
   5. 業務(front-end)雖然要面對客戶(client)，甚至有時候需要出門拜訪客戶，但是平常仍是店裏的一部分，常駐在店裏，領店裏的薪水。
2. 為什麼要分前後端？
   1. javascript是傳原始碼到使用者的瀏覽器，不是機器碼，所以所有使用者都看得到瀏覽器這一端怎麼運作的，但有些程式碼邏輯或個資不願給瀏覽器這端看到的，都放後端，就不會被直接看到了。
   2. 一些不會讓使用者操作只會讓管理者操作的功能就放在後端。
   3. 同一套商業邏輯之下，要應用在不同的平台的時候，例如瀏覽器、ios app、android app、apple tv app、software，相同的邏輯可以放在後端，那就可以共用。其他瀏覽器顯示相關的，交給前端或app端就好了。
3. backend大致有兩種：
   1. Apache Server：跑一些基本的http協定，有一些基本的網頁功能，用PHP跑一些server的邏輯，向mySQL資料庫要求儲存客戶資料。
   2. Node Server：可以透過Ajax,JSON等處理server和browser之間的溝通，可以跑Web App，資料量小、更快、效率高，可以做出更多功能。用和JavaScript相同語法的Node.js處理Server端的邏輯，並且和PostgreSQL和MongoDB溝通。
4. 比較大的系統，會用多台Node Server處理request；再更大，就會在backend前面放balance的server；再更大Database會有多台備份。
5. API：
   1. 免費：
      1. 亂數產生機器人：https://robohash.org/
      2. github的API：https://api.github.com/
      3. W3C的API：https://www.w3schools.com/xml/simple.xml
      4. 星際大戰：https://swapi.co/
      5. 天氣：https://openweathermap.org/api?ref=public-apis
      6. telegram：https://core.telegram.org/api
   2. 付費：
      1. facebook
      2. google maps
      3. 金流：https://stripe.com/docs/api/balance/balance_object
      4. 傳簡訊：https://www.twilio.com/docs/usage/api
   3. 其他：
      1. https://public-apis.xyz/
      2. https://apilist.fun/
      3. https://github.com/hsiangfeng/APIList
6. Node.js+Express.js：
   1. Node特性：
      1. 用在server端，就是後端的意思，也就是需要用到幫使用者儲存資料的時候，就需要用檔案或資料庫的方式儲存與一台電腦上，這就是後端在做的事，也是前端無法做到的事。
      2. node是2009被寫出來的，非常的新，相當多大公司使用，例如IBM、Micorsoft、LinkedIn、Rakuten、Paypal
      3. node最大的優勢是非阻塞(Non-block)，一般的server端的語言有一個很大的缺點，例如PHP，開thread很麻煩，很花效能。而node就是為了改進這個缺點而生的，他解決的方式是事件驅動，所以可以輕易開超多callback function，也不會阻塞。
      4. node是用google V8引擎，速度很快，而且可以用JS語法來寫。
      5. google花超多資源在V8引擎上，所以相對另一種熱門的後端語言python，node還是快很多，甚至在IoT領域，如果你的project需要做realtime，都可以考慮用nodeJS。當然要更快的化，就是用C++了。
      6. 相對於python，nodeJS或Javascript可以有新的語法，因為有babel專案可以編譯，並加快速度，但是python目前沒有類似babel的專案可以用，所以python 3和2相容性就很差。
      7. 有意思的是，facebook雖然仍然用php寫後端，但是他們曾經找一群高手，內部弄了一個編譯器，可以把php編譯成C++，用高效的核心跑，所以兼顧留住php的人才，和維持效能。
      8. 因為不是給瀏覽器用的，所以沒有window和document的物件了,但是有global和process物件。
      9. 可以去johnny-five玩玩IoT，缺點是arduino無法把node程式直接燒入，需要一直插著usb才能跑，所以最好搭配著。
      10. node的缺點是，雖然它有V8引擎，速度很快，但是他是單執行緒，如果某使用者執行了一個大量運算的程式，其他使用者將需要等待那個運算完成。
   2. 常用指令：
      1. nodve -v：查看版本
      2. node：類似python，直接進入ide的script模式，可以直接在命令列寫javascript
      3. process.exit()
   3. Modules：
      1. import和export是ECMAS 6的語法，node還沒支援這兩個指令。
      2. export改成module.exports，module是一個物件，module.exports也是一個物件，key是要exports出去的名稱，value是module裡最後要被exports出去的變數(結果)。
      3. import改成require('路徑檔名')，會得到檔案的路徑，然後「.名稱」才能拿到之前匯出的變數。
      4. import和export是非同步載入，瀏覽器是在網路環境，所以不能卡在某個不能載入的module上，而node是從硬碟載入，所以沒有這樣的問題，所以require和module.exports是同步載入（一步一步）。
      5. commonJS就是nodeJS的匯入module方式。
      6. Webpack是比較後來發展出來的，他讓瀏覽器支援commonJS，也就支援require()的匯入module的方式了，原理和babel一樣，就是把新版的標準編譯成舊版的javascript。
      7. 最常用的3種Module：
         1. 'fs'：和檔案處理有關
         2. 'http'：和網路有關
            1. 先用require('http')建立一個http網路物件，再用.createServer來建立一個server物件，並用.listen來設定聽取的port。
            2. .createServer()時，argument是一個arrow function，這個arrow function有request和response兩個arguement可以用，而response有.setHeader和.end兩個method可以用。
            3. 所以架站的時候，要先把response的.setHeader設定成browser要get的格式：
               1. 是text/html
               2. 或是application/json
            4. 再把response的.end設定好，其實這就是內容，如果是html，直接傳string格式，如果是json，也需要用JSON.stringify()轉成文字才能傳。
            5. 比express初階難用。
         3. 'nodemon'：
            1. 是用npm安裝的。
            2. 安裝前npm init -y，以記錄安裝版本。
            3. 安裝時加上--save-dev的參數，代表開發者自己用在自己開發環境用的library，並不是必要library。別人npm install時，就不會裝這個了。
            4. 可以即時看到script run的結果，不用每次打指令。
            5. nodemon script.js，他就會開始監聽script.js了。
   4. express：
      1. 先得npm install express，注意，package.json裡的name和灌express的資料夾不可以叫express，否則要改名。
      2. 和http一樣的地方在於需要先require()，再來讓require出來的物件加括號執行，並指定為物件，而且也需要用.listen來監聽port。
      3. express比http不同的地方在於：
         1. 不用記得createServer保留字，直接括號就好。
         2. 直接用.get、.post、.push、.delete等method來呼叫。
         3. 可以直接router。
         4. res.send可以不用.setHeader()，不用管content-type是text/html或是application/json，他自己會判斷。
      4. 可以用.use()在.get、.push...之前解碼，裡面的參數通常是放exprss物件的method。
      5. static server：.use(express.static(__dirname + '資料夾'))，就可以了。
   5. RESTful API：
      1. 對某個router的位置做get、push、post、delete，把四個動作當作動詞，router當作名詞，就可以了解這種文法了。
      2. 每個request進來，server就有足夠的資訊處理，而不用記得是誰傳過來的。
      3. request包含有四個attribute可以用：換句話說，就是browser在向server送出request的時候，可以在這四種方式中裝載資訊。
         1. querry：也就是URL加上?後面的參數，在postman裡可以在params填入。
         2. body：通常是post的時候用的，例如summit一個form，在postman裡body那一頁可以設定。
            1. postman設urlencoded的話，server端也要設.use(express.urlencoded({extended:false}))。
            2. postman設raw的JSON時，server端也要設.use(express.jason())。
         3. headers：postman裡可以在Headers那一頁設定。
         4. params：當server沒有符合的router，而其中一個router有冒號，這時候冒號後就是params，server就會把browser的router當成這個params的值。
      4. router後面對應到才會做指定的arrow function裡的事。
      5. 更複雜的API，可以改用GraphQL，功能比RESTful更強大。
   6. fs檔案module：
      1. 最基本的是四個動作：readFile、apendFile、writeFile、unlink
      2. argument都會有一個是function，這個function都會有一個err讓你可以處理error。
      3. 文字資料要.toString()才會以文字方式處理，裡面可以加上參數'ascii'或'utf8'。
      4. .readFile有2個parameter，第二個parameter是一個function，function的第二個parameter是讀到的data。
      5. .apendFile有3個parameter，其中第二個是要加入的內容，writeFile和apendFile的用法相同。
      6. .apendFile的第3個
      7. sync async：
         1. 那四個動作，後面加上Sync就會變同步了，否則預設async非同步。
         2. 除了readFile和readFileSync之外，其他的function都是有err的時候才會run。
         3. 同一個檔案被開啟和寫入，或被不同程序開啟，會error。
      8. 主要是關於輸入和輸出，不見得一定是檔案。
      9. 可以用console.time()和console.timeEnd()來算程式執行時間。
   7. 建立一個具有RESTful API的server：
      1. 注意postman裡的value都是string，注意number和string的轉換。
      2. router '/signin'的建立：分辨帳號和密碼是否符合
         1. 先在server.js裡建個小資料庫
         2. 讓postman post object過來，要注意的是postman裡面key和value都要是用雙引號括住的字串。
         3. 用.use將string parse成objcet。
         4. 然後判斷密碼是不是符合，如果符合就回傳一個字串回去。記得要用.json傳。
      3. router '/register'的建立：把輸入的資料，存入資料庫
         1. 把資料push進臨時資料庫中。
         2. 臨時資料庫的array的.length-1就是最後一個。
      4. router '/profile/:id'的建立：看profile裡找不找的到id
      5. router '/profile/image'的建立：用來計算使用者用了多少次服務
         1. 因為是更新某個人的資料，所以是.put()。
      6. bcrypt-nodejs：
         1. 雖然這個版本已經不maintain了，但這個版本跟mac相容，比較不會出問題。
         2. bcrypt特別的是不同次hash，會得到不同的hash，但是卻可以.compare()判斷是不是相同的password，安全性很高。
         3. 但是.compare()不是synchronize的function，true或false的判斷值如果傳到function外面來的話，會來不及用，Andrei還沒教，他的判斷都還不是用hash來做，之後看他怎麼解決。
   8. 連接front-end和back-end：
      1. 解決port衝突
      2. chrome不允許不同server之間傳資料，所以要用cors，先npm install之後在.use()中用：.use(cors())。
      3. 在REACT app上，把sign in的component資料fetch過去，fetch裡的第二個parameter是一個物件，裡面可以有：method、header、body等屬性。
         1. method：字串
         2. header：object(裡面是'content-type':'application/json')
         3. body：字串(object的話就要用JASON.stringify())
      4. 值得注意的是fetch的content-type決定是'application/json'的話，那麼server端送回的response一定要是.json()，如果.send()，client端會對不起來，錯誤。
      5. debug：
         1. 善用chrome的networks來看front-end到底fetch出什麼，server丟出什麼response。
         2. 善用console.log：
            1. front-end：browser裡
            2. back-end：terminal裡