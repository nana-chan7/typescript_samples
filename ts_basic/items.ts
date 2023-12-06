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

// function
// function calculateTotalPrice(price, amount) { //: runtime error any型のため
// function calculateTotalPrice(price: number, amount: number): number { // 型を付ける
//     var totalPrice = price * amount;
//     return totalPrice;  
// }

// anonymus function
// const calculateTotalPrice = function(price:number, amount:number): number {
//    var totalPrice = price * amount; 
//    return totalPrice; 
// }

//anonymus function
const calculateTotalPrice = (price:number, amount:number): number => {
    var totalPrice = price * amount; 
    return totalPrice;
}

function findItem(id: number) {
    var result = items.find((item) => item.id == id);
    return result;
    // if (result) {
    //     return result;
    // } else {
    //     return { id: 0, name: "", price: 0 };
    // }
}

var amount = 5;
var totalPrice = calculateTotalPrice(item1.price, amount); 
console.log(totalPrice);

var itemId = 1;
// var itemId = 5; // :undefined
var selectItem = findItem(itemId);
console.log(selectItem);

// undefined: 未定義
// implicitly: 暗黙的
// 可読性のあるプログラムを書く