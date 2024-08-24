/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)

// let val2 = "let variable";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2)

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const variable";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// // constは再宣言不可能
// const val3 = "constを再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "じゃけえ",
//     age: 31
// };
// console.log(val4);
// val4.name = "jak";
// console.log(val4)

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Kei";
// const age = 21;

// // my name is kei. i'm 21 years old.

// // 従来の方法
// const message1 = "my name is " + name + ". I'm " + age + " years old.";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//     return str;
// }
// console.log(func1("test"));
// const func1 = function (str) {
//     return str;
// };
// console.log(func1("test"))

// アロー関数
// const func2 = (str) => str;
// console.log(func2("test"));

// 2つの引数を受け取って，足し算と引き算をして返す関数．
// const additon = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(additon(6, 7));

// const subtraction = (num1, num2) => {
//     return num1 - num2
// };
// console.log(subtraction(6, 7));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "Keisei",
//     age: 21
// };
// const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`;
// console.log(message1);
// // いちいちmyProfileを書くのがめんどくさいので，
// const { name, age } = myProfile;
// const message2 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message2);

// const myProfile = ["Keisei", 21];
// const message3 = `My name is ${myProfile[0]}. I'm ${myProfile[1]} years old.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message4);

/**
 * デフォルト値(引数，分割代入)
 */
// const sayHello = (name = "guest") => console.log(`Hello ${name}!`);
// sayHello();

// const myProfile = {
//     age: 21
// };
// const { age, name = "guest" } = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */
// const name = "Keisei";
// const age = 21;

// const myProfile = {
//     name,
//     age
// };
// console.log(myProfile);

/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);    // 配列が出る．
// console.log(...arr1); // 中身がそのままでる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; // 分割代入
// console.log(num1);
// console.log(num2);
// console.log(arr3); // 配列をまとめて受け取っている事がわかる．

// 配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6)

// const arr7 = [...arr4, ...arr5]; // スプレッド構文を使わなかったら結合出来なかった．
// console.log(arr7);

// const arr8 = arr4; // スプレッド構文を使わない場合，参照を引き継ぐ．
// arr8[0] = 100;     // arr8を変えた場合，arr4も変わってしまう．
// console.log(arr4);

/**
 * map, filterを使った配列の処理
 */
const nameArr = ["Akiya", "Yamaguchi", "Tanaka"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => { //map()の中でアロー関数を使っている．
//     return name; // 戻り値で配列を作成している．
// })
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です．`));
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1; // ===でも==でもできた．
// })
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
    if (name === "Akiya") {
        return name;
    } else {
        return `${name}さん`;
    }
});
console.log(newNameArr);