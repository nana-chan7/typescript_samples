// 2023-12-06 4.week2

// データ型に関するモジュール
export type User = {
    id: number;
    name: {
        first: string;
        last: string;
    },
    email: string;
    isActive: boolean;
}

export type Item = {
    id: number;
    name: string;
    price: number;
    isSale: boolean;
}

// インターフェース
// export interface User {
//     id: number;
//     name: {
//         first: string;
//         last: string;
//     },
//     email: string;
//     isActive: boolean;
// }

// 設計
// あらかじめ設計しておくことで、後で間違えを検知しやすくなる