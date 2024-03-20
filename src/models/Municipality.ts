import Province from "./Province";

interface Municipality{
    id: number;
    name: string;
    province: Province;
    province_Id: number;
}

export default Municipality;