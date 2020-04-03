Backend
1. backend大致有兩種：
   1. Apache Server：跑一些基本的http協定，有一些基本的網頁功能，用PHP跑一些server的邏輯，向mySQL資料庫要求儲存客戶資料。
   2. Node Server：可以透過Ajax,JSON等處理server和browser之間的溝通，可以跑Web App，資料量小、更快、效率高，可以做出更多功能。用和JavaScript相同語法的Node.js處理Server端的邏輯，並且和PostgreSQL和MongoDB溝通。
2. 比較大的系統，會用多台Node Server處理request；再更大，就會在backend前面放balance的server；再更大Database會有多台備份。
3. API：
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