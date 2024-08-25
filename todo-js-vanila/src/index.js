const onClickAdd = () => {
    //テキストボックスの値を取得
    const inputText = document.getElementById("add-text").value;
    //テキストボックスの値を初期化
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p")
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "done";
    console.log(completeButton);
    completeButton.addEventListener("click", () =>{
        alert("done");
    })

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
        alert("delete");
    })

    // 階層構造
    div.appendChild(p); // divの子がp
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div); // liの子がdiv
    // どちらが先でも結果は同じだが，この順番のほうが早い．

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

}

// id add-buttonが押されたとき，clickを検知して，onClickAdd()を実行
document.getElementById("add-button").addEventListener("click", onClickAdd);