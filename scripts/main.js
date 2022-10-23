

/* 
    var 和 let 區別是：var 能多次聲明相同變量，後者不能。
    js 是動態語言，無需聲明數據類型。
*/
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let iceCream = 'chocolate';
if (iceCream == 'chocolate') {
    alert('like巧克力');
} else {
    alert('哦哦');
}

// // 這是匿名函數，無名函數
// document.querySelector('html').onclick = function() {
//     alert("戳我。");
// }

// // 和上面效果一樣，不過上面更簡潔
// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {
//     console.log("點擊了一次，繁瑣但容易理解的寫法。");
// };

// // 匿名函數另一種寫法
// document.querySelector('html').addEventListener('click', () => {
//     console.log("箭頭匿名函數。");
//   });


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// Uncaught ReferenceError: num is not defined，結果原因是把num1寫成num
// TypeError: results is undefined，不管了沒影響
console.log(multiply(4, 7));
console.log(multiply(0.4, 0.7));
console.log("4444");    /* 最簡易的測試方法 */

// 個性化歡迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('請輸入你的名字。');        // 調用輸入框
    localStorage.setItem('name', myName);           // API，保存輸入框輸入的數據
    myHeading.textContent = 'Mozilla 酷斃了, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷斃了, ' + storedName;
}

myButton.onclick = function calls() {
    setUserName();
}
