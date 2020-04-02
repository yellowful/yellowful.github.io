asynchronous
1. Http: hyper text transport protocol是browser和server之間的傳輸協定。
2. Request：是browser傳向server
   1. GET：像是跟twitter要一篇文章來看，透過URL傳資料給server。
   2. POST：像是貼一篇twitter的貼文一樣，透過body內文傳資料給server。
   3. PUT：像是修改推文一樣，修改已經存在的資料。
   4. DELETE：像是刪除twitter文章一樣。
3. response：是server傳資料給browser，會有一堆代號，如：200正常、403找不到網頁。
   1. 範例網頁：http://example.com/
   2. 可以用chrome裡的console的network來看到request是什麼，response是什麼。
4. Https：因為GET和POST都可以被監聽和攔截，所以容易被看到密碼，才會有https來加密，s代表secure。監看的人看到的內容沒有任何意義，只有browser和server之間看得懂。
   1. TLS：transport layer secure
   2. SSL：secure socket layer(後繼者)
5. JSON：
   1. 不同電腦用的後端語言不同，和JavaScript也不同，所以不懂JavaScript的資料，所以有JASON資料格式讓不同電腦間能溝通。
   2. 不同電腦間用純文字格式的JASON傳資料。
   3. JavaScript Object Notation
   4. 另一種資料格式是XML，較慢，將被淘汰。
   5. JASON.parse：將JASON轉成object。
   6. JASON.stringify：將資料轉成JASON。
6. Promises：
   1. 因為JavaScript處理asynchronous的方式是，一些需要等的，就會開一個callback的thread執行，然後先執行其他行程式，都執行完了，等這些callback function有回應再執行他們。這樣會造成這些callback function讓我們很難很直覺的操控他們，讓他們依照我們要求的順序執行。如果要依照順序的話，需要一層callback包著一層callback，這就會造成所謂的the pyrimid of doom。Promises就是為了解決這個問題，他會等callback，並照then和catch順序執行，寫起來和讀起來會和synchronous的寫法很像，很好寫很好讀。
   2. 執行fetch()會得到一個Promises。
   3. Promises加句點，會把抓到的值下傳，抓到的值有兩種：
      1. resolved value：是promise第一個參數是一個function，這個function給他一個參數的話，這個參數就會是.then的value。
      2. reason：rejected
   4. promises有三個狀態：
      1. fulfilled
      2. rejected
      3. pending
   5. 傳統作法JS需要code，等資料要等幾秒...等等，但是Promises不重視這些，它重視的是未來要如何回應。
   6. Promises可以做兩個動作：
      1. 一個是對抓到的資料（Promises是resolved value）做指定的function，這時用.then()。
      2. 另一個是對抓到的資料(Promises是reason)，做指定的function，通常是顯示錯誤訊息，這時用.catch()。
   7. .catch()：
      1. 只有對這一整串Promises的error執行一次，也就是整串Promises只要有一個錯，那就是錯，其他的對也沒意義。
      2. 只會抓.catch之前的error，不抓之後的。
   8. Promise.all()：
      1. 可以把一堆promise收集到一個陣列中，他會等所有資料都到了才會一次把資料傳到value中。
      2. 在設定const promise = Promise的時候，Promise就開始跑了，而不會等Promise.all才開始跑那些Promise。
7. ES8：
   1. 把asynchronous的寫法，像synchronous的寫法，但是仍然維持JavaScript的運作原理，synchronous的code全部跑完之後，才會跑asynchronous的程式碼。
   2. 一定要先包在一個async function內，所有要等的method前面通通要加上關鍵字await。
   3. 在async function和await method之間可以用try把這些await method包起來，用catch(err)來處理等不到callback時的錯誤訊息。
8. ES9：
   1. spread operator：
      1. ES6時的spread operator...主要用在array，可以把array裡的items變成逗號隔開的數字的程式碼，方便coding。
      2. ES9的spread operator...擴大到object也可以用這個功能，...rest設定了rest代表的時object剩下的所有key用逗號分開的程式碼。rest不是保留字，是新變數，可以任意取名。
   2. .finally()，不管拿到的是value或是reason都會執行。
   3. await loop：可以跑for await of