// 2023-12-06 4.week2

// 型を明示的に定義
// var user: {
//     id: number,
//     email: string,
//     isActive: boolean,
// } = {
//     id: 1,
//     email: "test@test.com",
//     isActive: true,
// }
// ↑ あまりこの書き方はしない
// user.id = 7;

// 型推論で定義
var user = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo" 
    },
    email: "test@test.com",
    isActive: true,
}
// ↓ 型推論は一度決まってしまうと変えられない
// user.name.first = 7;
console.log(user);

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
    price: 300,
}
var items: object[] = [item1, item2, item3]; // ← あまりよくない書き方
console.log(items, typeof items);