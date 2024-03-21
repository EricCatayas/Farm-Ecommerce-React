import Municipality from "../models/Municipality";

export interface IMunicipalitiesService {
    fetchFromProvinceAsync: (province_Id: number) => Promise<Municipality[]>;
}