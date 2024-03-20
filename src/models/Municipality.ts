import { Province } from "./Province";

export interface Municipality{
    id: number;
    name: string;
    province: Province;
    province_Id: number;
}