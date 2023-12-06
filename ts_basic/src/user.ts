// 2023-12-06 4.week2

// types.tsの Userモジュールを読み込み
import {User} from './types'

var user: User = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo" 
    },
    email: "test@test.com",
    isActive: true,
}

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
// var user = {
//     id: 1,
//     name: {
//         first: "Taro",
//         last: "Tokyo" 
//     },
//     email: "test@test.com",
//     isActive: true,
// }
// ↓ 型推論は一度決まってしまうと変えられない
// user.name.first = 7;
console.log(user);

