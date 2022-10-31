import StandardResponse from "./StandardResponse";

export default interface PagingResponse extends StandardResponse
{
    maxPage:number;
    total:number;
}