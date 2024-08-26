const onClickAdd = () => {
    //テキストボックスの値を取得
    const inputText = document.getElementById("add-text").value;
    //テキストボックスの値を初期化
    document.getElementById("add-text").value = "";

    // 未完了リストに追加
    createIncompleteTodo(inputText);
}

// 渡された引数を元に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p")
    p.className = "todo-item";
    p.innerText = todo;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "done";
    console.log(completeButton);
    completeButton.addEventListener("click", () =>{
        // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove(); // 完了ボタンの次(delete)を削除
        completeButton.remove();

        // 戻すボタンを生成してdivタグ配下に設定
        const backButton = document.createElement("button");
        backButton.innerText = "return";
        backButton.addEventListener("click", () => {
            // to-doの内容を取得し，未完了リストに追加
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText); // 再帰
            // 押された戻すボタンの親にあるliタグを削除
            backButton.closest("li").remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);

        // 完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget); // 未完了のliを取得して完了の子にする
    })

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li"); // 一番近いliを探す
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // 階層構造
    div.appendChild(p); // divの子にpを追加
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div); // liの子にdivを追加
    // どちらが先でも結果は同じだが，この順番のほうが早い．

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);


};

// id add-buttonが押されたとき，clickを検知して，onClickAdd()を実行
document.getElementById("add-button").addEventListener("click", onClickAdd);