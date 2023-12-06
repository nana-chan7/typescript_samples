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