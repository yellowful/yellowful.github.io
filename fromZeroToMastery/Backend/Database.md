#Database
1. 為什麼不用後端直接儲存資料而要用資料庫儲存資料呢？
   1. 如果後端寫了一個object或array來放資料，他們只有存在記憶體中，server重開機的話，資料就忘光光了。
   2. 非常簡單的資料當然也可以後端寫入一個檔案，要用的時候再讀取。
   3. 很多資料的話，要自己去搞資料結構太麻煩了，所以當然要用別人寫好的資料庫系統，直接做存取最快。
2. 種類：
   1. 關聯式資料庫
      1. 已經知道自己要的存取方式，預先設計好資料的存取結構，才能存取
      2. 結構：
         1. 每一個table包含很多columns，每一個column包含很多rows，例如：twitter有以下table：
            1. users
            2. tweets
            3. followings
         2. column儲存一些特定的資訊，例如users的table中，有name、address、phone numbers等columns
         3. rows儲存內容(entry)
         4. field：columns和rows
         5. schema：指的就是table和field之間的關聯，例如：users table中的column有一個是username，tweets的各種columns中，其中一種和users的username相同，那就把他們兩個之間關聯起來。
         6. foreign key是兩個table之間相同的column。
         7. primaryi key是用來區分同一個table內，不同的row所用的key。
      3. 牌子：
         1. PostgreSQL
         2. Oracle Database
         3. Microsoft SQLServer
         4. Microsoft Access
         5. MySQL
         6. MariaDB
         7. IBM DB2
         8. SQLite
      4. 相對於mongoDB，需要叫出所有某設計好的欄位，就很快。
      5. Database自訂每個欄位的格式，例如2 byte的smallint整數，容量很小，速度很快。
      6. 每一個table越小越好，然後再把每個table關聯起來，這樣速度快，擴充性好。
   2. 非關聯式資料庫
      1. 還不確定自己要解決的問題，不是預先設計好的，可以任意存取。
      2. 牌子：
         1. mongoDB
            1. Document Oriented
            2. 一個使用者一個檔案，所以要叫出所有的某欄位，就得去把每一個檔案找出來，集結起來。
            3. GUI可以用PSequel，mac和pc都相容，免費。
         2. redis
3. PostgreSQL：
   1. 安裝：
      1. 先安裝GUI：建議DBeaver(或是PSequel)
         1. brew cask install dbeaver-community
         2. 到launchpad執行dbeaver
         3. 無法執行，會被要求安裝JDK14，去官網下載安裝。
         4. 執行時，會被要求安裝PosgreSQL的driver
      2. brew install postgresql：安裝
      3. brew services start postgresql：啟動server
      4. brew services stop postgresql：關閉server
      5. createdb 'test'：用標準port 5432打開test資料庫
      6. psql 'test'：連接test資料庫
   2. 命令、操作：
      1. 通常命令用大寫，名稱用小寫，比較容易讀，但是小寫一樣可以執行命令。但是名稱或內容大小寫就有區別，所以常都會全部轉小寫才存資料庫中。
      2. 命令可以多行，讀到分號才會執行，所以結尾一定要加分號。
      3. 要會以下常用的操作：
         1. 刪掉資料庫：
            1. DROP database_name
            2. 如果有其他連線：
                SELECT pg_terminate_backend (pg_stat_activity.pid)
                FROM pg_stat_activity
                WHERE pg_stat_activity.datname = 'database_name'; 
         2. 建立table (column, row )
            1. CREATE TABLE table_name (column1 dada_type1, column2 data_type2, ...);
            2. https://www.techonthenet.com/postgresql/datatypes.php
               1. 不准空白：NOT NULL
               2. 內部唯一序號，可以達到快速檢索：PRIMARY KEY
               3. 可以指定長度的字：VARCHAR(長度)
               4. 不重複：UNIQUE
               5. 日期使用是要加單引號，是一種字串：DATE
               6. 年齡、分數等小整數：SMALL INT
         3. 列出tables：\d
         4. 退出database：\q
         5. 取消前面命令，不執行，重新輸入，快速鍵：^c
         6. 在table插入 column和row：
            1. INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
            2. value如果是字串要用''
            3. VALUES記得要加S
         7.  找出來某個table或某個row：
            4. SELECT (colum1, column2) FROM table_name;
            5. SELECT * FROM table_name;
         8.  修改table：
            6. 增減column：
               1. 一次增加兩個column：
                    ALTER TABLE table_name
                    ADD column3 data_type3,
                    ADD column4 data_type4;
               2. 砍掉一個column：
                    ALTER TABLE table_name
                    DROP column3;
            7. 修改column的名稱：
                ALTER TABLE table_name
                RENAME old_column1
                TO new_column1
            8. 修改column屬性：
                ALTER TABLE table_name
                ALTER COLUMN column1
                TYPE bigint
            9.  修改值：
               3. 同時修改兩個column的值：注意只有一個SET，然後WHERE前沒有逗號
                    UPDATE table_name
                    SET column3 = value3,
                    column4 = value4
                    WHERE column1 = value1;
               4. 同時修改兩個row的值：注意要用OR
                    UPDATE table_name
                    SET column3 = value3
                    WHERE column1 = value1_1
                    OR column1 = value1_2;
            10. 刪除列：DELETE FROM是接table_name，WHERE是接條件
               5. 刪除一整列：1個條件
                    DELETE FROM table_name
                    WHERE column1 = value1;
               6. 刪除一整列：2個條件
                    DELETE FROM table_name
                    WHERE column1 = value1
                    AND column2 = value 2;
            11. 刪除一個table：DROP TABLE table_name;
         9.  搜尋：
            12. 找出A開頭的人的資料
                SELECT * FROM table_name
                WHERE column1 LIKE 'A%';
            13. 找出A結尾的人的資料
                SELECT * FROM table_name
                WHERE column1 LIKE '%A'
         10. 依分數的順序列出資料：
            SELECT * FROM table_name
            ORDER BY column1 DESC(或是ASC);
         11. 運用function：平均AVG、總和SUM、計數COUNT
             1.  SELECT AVG(column2) FROM table_name;
             2.  SELECT SUM(column3) FROM table_name;
             3.  SELECT COUNT(colum4) FROM table_name;
         12. 關聯兩個table：
            1. SELECT * FROM table_name1
                 JOIN table_name2
                 ON table_name1.column3 = table_name2.column2;
            2. 上面程式碼，只有相同名字的才會在新的表裡面
            3. 這個出現的表，並不是產生了一個新的table，而是顯示成新的table，難怪是用SELECT指令。
         13. 可以練習的網站：
             1.  https://www.khanacademy.org/computing/computer-programming/sql
             2.  https://www.codecademy.com/learn/learn-sql
         14. 
             




先建立兩個tables
users
id SERIAL PRIMARY KEY
name VARCHAR(100)
email TEXT UNIQUE NOT NULL 
entries BIGINT DEFAULT 0
joined TIMESTAMP NOT NULL

login 
id SERIAL PRIMARY KEY
hash VARCHAR(100) NOT NULL 
email TEXT UNIQUE NOT NULL

KNEX.JS最好用
pg-promise 語法簡單，類似sql語法

KNEX連接database，記得server送出給postgresql的reques要有password，即使是空字串也沒關係。

不是http送，所以不需要透過.jason()轉換。

利用postman送request給server
然後觸發後端，用.insert去連database

用.returning讓database回傳

catch error小心不要洩漏資訊

entries計算次數

register 同時 login
用transaction防止同時access兩個以上資料庫造成inconsistency

trx
into 第一頁
return trx 第二頁
trx.commit

連接signin

可以改進的地方：
再次到訪不用再login
後端可以刪除使用者




