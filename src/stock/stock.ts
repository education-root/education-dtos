export class StockDto{
    id?:string;
    name: string=""
    type: 1 | 2 | 3=1 // 1-练习题库， 2-模拟真题， 3-ai批改
}

export class QueryStockDto{
    page: number=1;
    pageSize: number=10;
    name?: string;
    type? : 1|2|3;
}