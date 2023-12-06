"use strict";
// 2023-11-29 4.week1
var message = "Hello!!!";
console.log(message);
// ※代入しないとすべて any型
// var id;
// var email;
// var isActive;
// var none;
// 型推論 (Type Inference): 明示的に型を書かないで代入によって決まる
var id = 1;
var email = "test@test.com";
var isActive = true;
var none;
// ↓ 型が決まると別の型で代入できなくなる (※代入した時点で型が決まるので)
// id = "YSE";
// ↓ any型はなんでも代入できる (※便利だけど間違えると危険)
// none = "OK";
// none = 1000;
// 型定義 (Type Inference): 明示的に型を記述する
// var id:number = 1;
// var email:string = "test@test.com";
// var isActive:boolean = true;
// var none:any;
// 型の確認
console.log(id, typeof id);
console.log(email, typeof email);
console.log(isActive, typeof isActive);
console.log(none, typeof none);
