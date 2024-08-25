// console.log("Script loaded");

// const onClickAdd = () => {
//     console.log("Button clicked");
//     const inputText = document.getElementById("add-text").value;
//     alert(inputText);
// }

// // id add-buttonが押されたとき，clickを検知して，onClickAdd()を実行
// document.getElementById("add-button").addEventListener("click", onClickAdd);

document.addEventListener('DOMContentLoaded', function() {
    const onClickAdd = () => {
        const inputText = document.getElementById("add-text").value;
        alert(inputText);
    }

    const addButton = document.getElementById("add-button");
    if (addButton) {
        addButton.addEventListener("click", onClickAdd);
        console.log("Event listener added");
    } else {
        console.error("Button not found");
    }
});