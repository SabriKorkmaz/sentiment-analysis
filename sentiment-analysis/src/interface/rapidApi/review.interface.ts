import {ContentModel} from "./content.interface";

export interface ReviewInterface {
    id: string,
    link: string,
    rating:number,
    content:ContentModel,

}
