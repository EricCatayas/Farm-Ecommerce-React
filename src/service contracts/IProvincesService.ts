import Province from "../models/Province";

export interface IProvincesService{
    fetchAllAsync: () => Promise<Province[]>;
}