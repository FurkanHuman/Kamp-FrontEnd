import { product } from "./Product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel
{
    data:product[]
}