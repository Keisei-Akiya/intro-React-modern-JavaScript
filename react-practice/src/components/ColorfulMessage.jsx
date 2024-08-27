export const ColorfulMessage = (props) => {
    console.log("--ColorfulMessage--");
    const { color, children } = props;
    const contentStyleA = {
        color,
        fontSize: "18px"
    };

    return <p style={contentStyleA}>{children}</p>;
};
