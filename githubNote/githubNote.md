# github筆記

## 為什麼要用github？
1. 不用自己管理、存檔、備份各種不同版本
2. 直接管理整個資料夾，而不是單一檔案的版本

## 平常建立新專案時常用步驟

*最常用的會是步驟4、5、8*

1. 在github上開啟一個新的專案  
    可以把github提供的命令先複製起來放著  
>git remote add origin https://github.com/yellowful/note.git  
git push -u origin master

2. 在本機開一個和專案名稱相同的資料夾，並到到該資料夾中，下命令  
>git init

3. 要寫的程式、筆記、檔案存檔

4. 更新到暫存區    
>git add 檔名

5. 在本機建立一個版本，並為版本寫下一行的說明  
>git commit -m '一行說明'  
    注意要有單引號

6. 若沒有下參數-m，則會進入多行的說明模式，這是vim的環境。  
>i進入編輯模式  
按esc鍵會進入命令模式  
命令模式下:wq，就是存檔離開

7. 下步驟1複製的第一個命令  
>git remote add origin https://github.com/yellowful/note.git

8. 下步驟 1複製的第二個命令  
>git push -u origin master

9. 要更新github上的版本，就重覆步驟4、5、8


## 第一次使用的常用步驟

1. 首先下載git，並安裝
>https://git-scm.com/

2. 到github上註冊
>https://github.com/

3. 在本機上設定username和email
> git config --global user.name "yellowful"
> git config --global user.email "richenyou@gmail.com"

## 如果和線上版本衝突
> git pull
git會做記號，刪除不要的，保留要的，解決衝突

## 編輯時常用markdown語言

| 用途：           | 命令             |
|:----------------|:----------------|
| 標題第一階        | \#space         |
| 標題第二階        | \#\#space       |
| 換行             | 兩個space再enter |
| 程式碼要用的縮排： | \>              |
| 一般的向右縮排：   | 四個space       |
| 數字項目：        | 數字、句點、空白  |

## 個人網頁可以善用github pages

1. 像開新專案一樣，只是命名要命成  
使用者名稱.github.io

2. setting裡選擇你要的theme

4. 本地端同樣要在資料夾中新建專案  
然後要把遠地端的「使用者名稱.github.io」資料夾抓下來(把yellowful替換成你自己的使用者名稱)  
> git clone https://github.com/yellowful/yellowful.github.io

3. 和一般專案一樣上傳  
例如，本地端放在資料夾中的檔：  
/yellowful/githubNote.md  
和一般專案一樣上傳後  
網址會是：  
https://yellowful.github.io/githubNote  
如果你的資料夾裡面有index.html作為首頁，例如：  
yellowful/index.html  
那麼以下網址就會直接打開你的網站了：  
https://yellowful.github.io/

4. 首頁得自己做  
以前github有The Automatic Page Generator的按鈕可以用  
現在看起來只給企業用戶使用  
或是可以去jekyll用：  
https://jekyllrb.com
