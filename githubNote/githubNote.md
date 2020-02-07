# github筆記

## 為什麼要用github？
1. 不用自己管理、存檔、備份各種不同版本
2. 直接管理整個資料夾，而不是單一檔案的版本

## 平常建立新專案時常用步驟

*最常用的會是步驟4、5、6*

1. 在github上開啟一個新的repository(專案)，把網站上的資料clone下來：
    1.  取repository的名字，例如homeworkgit
    2.  點initialize this repository with a README
    3.  步驟1的右邊有網下載網址可以複製。
    4.  在本地下資料夾下指令：git clone https://github.com/yellowful/homeworkgit.git，網址請替換成自己複製的網址。

2. 要寫的程式、筆記、檔案存在這個資料夾中

3. 把更動的歷史儲存，只有一個句點代表這個資料夾的所有檔。
    >git add .

4. 在本機建立一個版本，並為版本寫下一行的說明  
    >git commit -m '一行說明'  
    注意要有單引號

5. 若沒有下參數-m，則會進入多行的說明模式，這是vim的環境。  
    >i進入編輯模式  
按esc鍵會進入命令模式  
命令模式下:wq，就是存檔離開

6. 上傳指令：
   >git push

7. 要更新github上的版本，就重覆步驟4、5、6，要看現在的更動狀態的話：
   >git status

8. 步驟1可以改成：
   1.  開完新的repository後，把github提供的命令先複製起來放著  
    >git remote add origin https://github.com/yellowful/note.git  
    git push -u origin master
   2. 在本機開一個和專案名稱相同的資料夾，並到到該資料夾中，下命令
    >git init
   3. 步驟6之前下先前複製的命令： 
    >git remote add origin https://github.com/yellowful/note.git
    >git push -u origin master

## 開branch
1. 開新branch，例如名稱設為branch1
   > git branch branch1
2. 把現在狀態移到branch裡
   > git checkout branch1
3. 開始工作，改你的檔案，改完存檔。
4. 將這個版本上傳github：
   1. 進度存檔：
    >git add .
    git commit -m 'first branch update' 
   2. 因為是這個branch1第一次上傳，所以要下github端的起始指令：
    > git push --set-upstream origin branch1
   3. 之後這個branch要上傳都不用了下這個指令了，而是直接下：
    > git push
   4. 想把主線的工作，別人新加的功能加回來這個branch的話。
      1. 切到master：
       >git checkout master
      2. 抓回主線的進度：
       > git pull 
      3. 切回branch：
       >git chechout branch1
      4. 把master整合進來：
       > git merge master
      5. 檢視衝突的地方，修改檔案，存檔。
      6. 儲存進度：
       > git add .
       git commit -m 'first merge'
      8. 上傳：(假如這個branch第一次上傳，請參考第2點)
       >git push
      9. 到githb上點新的pull request。
      10. repository的管理者就可以點同意merge，或點comment，要求修改。或在本地端：
       > git checkout master
        git merge --no-ff branch1
        git push origin master



## 第一次使用的常用步驟

1. 首先下載git，並安裝
    >https://git-scm.com/

2. 到github上註冊
    >https://github.com/

3. 在本機上設定username和email
    > git config --global user.name "yellowful"
git config --global user.email "richenyou@gmail.com"

## 如果和線上版本衝突
下載
> git pull

git會做記號，刪除不要的，保留要的，解決衝突
> git add .
git commit -m '一行說明'
git push

## 編輯時常用markdown語法

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
