export class StockDto{
    id?:string;
    name: string=""
}

export class QueryStockDto{
    page: number=1;
    pageSize: number=10;
    name?: string;
}