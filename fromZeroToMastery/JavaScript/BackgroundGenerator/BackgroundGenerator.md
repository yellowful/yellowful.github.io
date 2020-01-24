# 筆記：
1. 重點在於知道是用background:linear-gradient(方向,第一顏色,第二顏色);這個function的用法。
2. . 要用JavaScript改寫css，是用「.style.屬性」去改寫，後面的linear-gradient()是字串。
3. 叫出顏色選擇器的方法是iput，type是color。
4. 我random顏色的方式是用16進位，這是個井字號加0~F組成的七個字的字串，我讓後面6個字母random出現。
5. javascript中，字串可以用類似array的方式顯示某個字母，例如：'#33EEFF'要顯現第三個字母就xxx[2]，可以顯現，這部份和python一樣。甚至var a = ['first','word']，可以用a[1][2]來叫出r這個字母。但是和python不一樣的是，這並不是真的array，如果用a[1][2]=‘z’;並不能讓這個字母變成z。
6. 所以顏色的字串如果要random就要先拆成array來處理，最後面用.joint('')組合回字串。
7. css在用first-child和nth-child()時，數目是包含不同tag的element，如果選不到可改用first-of-type，就只會挑那一類的。
8. Math.random()是0-1的浮點數，所以要乘上要的範圍，再加上Math.floor()，才會變整數。
9. 要頁面一載入就印出數值，就要在addEventListener之外，執行一次印出。

# 問題：
1. 多個p時，理論上可以用first-child和nth-child()來選，但是為什麼我卻選不到？