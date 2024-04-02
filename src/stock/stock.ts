export class StockDto{
    id?:string;
    name: string=""
    type: 1 | 2=1 // 1-练习题库， 2-模拟真题
}

export class QueryStockDto{
    page: number=1;
    pageSize: number=10;
    name?: string;
}