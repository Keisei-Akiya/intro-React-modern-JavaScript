# ノート

- [ノート](#ノート)
  - [モダンJavaScriptとは](#モダンjavascriptとは)
  - [仮想DOM](#仮想dom)
  - [npm/yarn](#npmyarn)
  - [ECMAScript](#ecmascript)
  - [モジュールバンドラー](#モジュールバンドラー)
  - [トランスパイラ](#トランスパイラ)
  - [SPA](#spa)
  - [表示](#表示)
  - [変数](#変数)
    - [var](#var)
    - [let](#let)
    - [const](#const)
  - [テンプレート文字列](#テンプレート文字列)
  - [アロー関数](#アロー関数)
  - [分割代入](#分割代入)
    - [オブジェクトの分割代入](#オブジェクトの分割代入)
    - [配列の分割代入](#配列の分割代入)
  - [デフォルト値](#デフォルト値)
    - [ex. 1](#ex-1)
    - [ex. 2](#ex-2)
  - [オブジェクトの省略記法](#オブジェクトの省略記法)
    - [分割代入と見間違い注意](#分割代入と見間違い注意)
  - [スプレッド構文](#スプレッド構文)
    - [用途](#用途)
    - [配列をコピーする](#配列をコピーする)
    - [配列を結合する](#配列を結合する)
  - [mapやfilterを使った配列処理](#mapやfilterを使った配列処理)
    - [map](#map)
    - [filter](#filter)
  - [三項演算子](#三項演算子)
  - [論理演算子](#論理演算子)
    - [論理和｢||｣](#論理和)
    - [論理積｢\&\&｣](#論理積)
  - [デバッグ](#デバッグ)
  - [命名方法](#命名方法)

## モダンJavaScriptとは

React, Vueなど仮想DOMを用いるライブラリ/フレームワーク

## 仮想DOM

Document Object Model

変更の差分だけ変えるので良いらしい．よくわからん．

## npm/yarn

パッケージマネージャー

## ECMAScript

JSの標準規格

エクマスクリプトと読む．

## モジュールバンドラー

複数のjsファイルを一つにまとめるためのもの

細かく分けて開発したほうが良いのだが，本番環境ではまとまっていた方が良いので，依存関係を守りながらまとめるもの．

開発は効率よく，本番環境では変換

## トランスパイラ

新しいJSの記法を古い記法に変換

IEなど古いブラウザでは動かない．

BABEL, SWCがある．

SWCが主流になっていきそう．

開発は効率よく，本番環境では変換

## SPA

Single Page Application

従来のWebシステムでは，Webページにアクセスする時，サーバーからhtmlが送られる．

SPAでは，サーバーから空に近いhtmlが送られる．
画面の内容はJavaScriptで書き換えられる．
画面遷移するときは，htmlを要求しない．
次の画面ページを表示するのに必要なデータだけ要求する．

ユーザー体験も開発効率も上がる．

## 表示

`console.log();`

print()の役割．

## 変数

### var

上書き，再宣言可能な変数．

複数人で開発するとき，勝手に再宣言されちゃうこともあるので注意．

### let

上書きは可能

再宣言は不可能

VSCodeでも警告が出る．

### const

開発では**ほとんどconstを使う**

厳しい．上書き，再宣言は不可能

オブジェクトのプロパティ，配列の中身は変更追加可能．

## テンプレート文字列

変数と文字列を+で繋げなくても，${}の中にJavaScriptを書ける．

よく使う．

```{JavaScript}
const myProfile = {
    name: "Keisei",
    age: 21
};
const message1 = `My name is ${myProfile.name}. Im ${myProfile.age} years old.`;
```

## アロー関数

```{JavaScript}
const func = (str) => {
    return str;
};
```

省略もできて，

```{JavaScript}
const func = (str) => str;
```

オブジェクトを入れたい場合

```{JavaScript}
const func = (num1, num2) => ({
    hoge: num1,
    huga: num2
});
```

## 分割代入

### オブジェクトの分割代入

テンプレート文字列では

```{JavaScript}
const myProfile = {
    name: "Keisei",
    age: 21
};
const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`;
console.log(message1);
```

いちいちmyProfileを書くのがめんどくさいので，分割できる．

```{JavaScript}
const { name, age } = myProfile;
const message2 = `My name is ${name}. I'm ${age} years old.`;
console.log(message2);
```

### 配列の分割代入

配列も同様

```{JavaScript}
const myProfile = ["Keisei", 21];
const message3 = `My name is ${myProfile[0]}. I'm ${myProfile[1]} years old.`;
console.log(message3);
```

違うのは，分割をする際に変数名を与えなければならない点．

```{JavaScript}
const [name, age] = myProfile;
const message4 = `My name is ${name}. I'm ${age} years old.`;
console.log(message4);
```

## デフォルト値

### ex. 1

```{JavaScript}
const sayHello = (name = "guest") => console.log(`Hello ${name}!`);
sayHello();
```

`name = "guest"`をしないと，出力がHello undefined!になってしまう．

システム的にはマズイ．

### ex. 2

```{JavaScript}
const myProfile = {
    age: 21
};
const { age, name = "guest" } = myProfile;
console.log(age);
console.log(name);
```

オブジェクトにnameがないときに分割代入すると上同様にundefinedが代入されるので，デフォルト値を指定．

## オブジェクトの省略記法

```{JavaScript}
const name = "Keisei";
const age = 21;
```

このとき，省略せずに書くと，

```{JavaScript}
const myProfile = {
    name: name,
    age: age
};
console.log(myProfile);
```

オブジェクトの変数と変数名が同じなら省略できる．

```{JavaScript}
const myProfile = {
    name,
    age
};
```

### 分割代入と見間違い注意

オブジェクトの省略記法は分割代入と似ているのでまちがえてしまう．

- オブジェクトの省略記法

  - `const myProfile = { name, age };`

- 分割代入

  - `const { name, age } = myProfile;`

## スプレッド構文

`...` を使う．

### 用途

配列にたいして

- 展開
- まとめる
- コピー
- 結合

### 配列をコピーする

arr4をarr6にコピー

```{JavaScript}
const arr4 = [10, 20];
const arr6 = [...arr4];
```

スプレッド構文を使わない場合

arr4の参照先をarr8に代入してしまう．

arr8を編集するとarr4も変わってしまう．

```{JavaScript}
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);
```

### 配列を結合する

```{JavaScript}
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr7 = [...arr4, ...arr5];
```

## mapやfilterを使った配列処理

for loopはコードが複雑．

```{JavaScript}
const nameArr = ["Akiya", "Yamaguchi", "Tanaka"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
```

### map

map()の中でアロー関数を使う．

```{JavaScript}
const nameArr = ["Akiya", "Yamaguchi", "Tanaka"];
nameArr.map((name) => {
  return name;
});
```

新しい配列に代入も可能

```{JavaScript}
const nameArr2 = nameArr.map((name) => {
  return name;
})
```

### filter

奇数をreturn

```{JavaScript}
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; // ===でも==でもできた．
})
```

## 三項演算子

条件 ? 真のとき : 偽のとき;

```{JavaScript}
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100より大きい" : "100以下";
};
```

## 論理演算子

### 論理和｢||｣

または

左側がtruthyの時，その時点で返却する．

```{JavaScript}
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);
```

### 論理積｢&&｣

かつ

左側がfalsyの時その時点で返却

```{JavaScript}
const num2 = null;
const fee2 = num2 && "何か設定されました"
console.log(fee2);
```

## デバッグ

idとclassを間違えないように

## 命名方法
