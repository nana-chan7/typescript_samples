// 2023-12-06 4.week2

// 配列
var itemNames:string[] = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(itemNames)

// オブジェクト配列
var item1 = {
    id: 1,
    name: "コーヒー",
    price: 350,
}
var item2 = {
    id: 2,
    name: "紅茶",
    price: 400,
}
var item3 = {
    id: 3,
    name: "ほうじ茶",
    // price: "aaa", // ↓ エラーになる
    price: 300,
}
// var items: object[] = [item1, item2, item3]; // ← あまりよくない書き方
var items = [item1, item2, item3]; 
console.log(items, typeof items);

var borderPrice = 350;
// 型推論だと動くが、型を明示的に定義するとエラーになる (item.price)
var filterItems = items.filter((item) => item.price <= borderPrice);
console.log(filterItems);