// 2023-12-06 4.week2

// union型
var unionData: string | number;
unionData = "Tokyo";
unionData = 100;
// unionData = true; // :error

console.log(unionData, typeof unionData);

// any型 = JavaScript（動的型付けで決定）
var data: any;
data = 10;
data = "Hello";
data = true;
// data = undefined;
// data = null;

console.log(data, typeof data);

// union型と any型は何が入るかわからないのであまり使うべきではない
// ↑ でも、どうしようもない時などには実際の現場でも使われることがある
// any型は typeScriptにする意味がない