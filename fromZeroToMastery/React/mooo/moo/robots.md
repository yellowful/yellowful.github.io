## Robots的作法 ##
1. 新增app：
   1. npx create-react-app myrobots
   2. cd myrobots
   3. npm start
2. 新增最頂端的App.js：
   1. 把App設成Component的subclass
   2. 要有render()
3. 建立searchbox和cardlist的component：
   1. 可以裝上tachyon
   2. cardlist是由其他的card的Component組成的
4. 在render裡放上title、searchbox、cardlist
5. 建立robots資料
6. 設定好各個Component的import、export、props
7. 設定constructor
   1. super()
   2. this.state
8. 設定更新：
   1. setState()
   2. this.state
   3. 把DOM的event和fuction連在一起，在最頂的App中定義這個function，當成一個Component的props傳下去，讓JSX的一個event指定執行這個function。
   4. 把robots的資料filter出來，並render的component指定到這個filter的robots
9.  componentDidMount
   5.  fetch網路資料
   6.  then
   7.  .jason
   8.  setState()
10. 其他：
    1.  加上fetch太久的話，顯示loading
    2.  加上scroll
    3.  this.state太多次，很雜的話，可以destructure掉
    4.  npm run biuld，建立精簡過的檔案。
    5.  加上Error Boundary In React