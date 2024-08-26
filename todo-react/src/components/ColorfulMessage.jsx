export const ColorfulMessage = (props) => {
    const { color, children } = props; // 分割代入をすると次以降でpropsを何度も書かなくて良い．
    const contentStyleA = {
        color, // 省略
        fontSize: "18px"
    };

    return (
        <p style={contentStyleA}>{children}</p> // タグで囲ったものはchildrenと決まっている．
    )
}