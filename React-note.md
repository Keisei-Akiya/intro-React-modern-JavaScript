# React note

## App.jsx

なにかしたいときはApp.jsを編集する．

もともとは.jsだが，.jsxにするとロゴが変わるので，コンポーネントをつくるときは.jsx推奨．
ただしべつに性能は変わらない．

## 中括弧でJSを走らせる

.jsxの中でやる．

`<h1>Hello World</h1>`

```{JavaScript}
const contentStyle {
    color: "blue"
    fontSize: "18px"
    margin: 100
};
return (
    <h1 style={contentStyle}>Hello World</h1>
)
```

## Proops
