import {BaseService} from "./base/base.service";
import {SourceEnum} from "./base/source.enum";
import {SearchRequestModel} from "../interface/rapidApi/search.request.interface";
import {ReviewRequestModel} from "../interface/rapidApi/review.request.interface";
import {SearchResponseModel} from "../interface/rapidApi/search.response.interface";

export abstract class RapidApiService {
    static async searchApp(request:SearchRequestModel) {
         let response:SearchResponseModel = await BaseService.getInstance(SourceEnum.rapidApi)!.get(
            "/search",{params:{
                    term:request.term,
                    store:request.store,
                    language:request.language
                }}
        );
        return response;
    }
    static async getReviews(request:ReviewRequestModel) {
        let response:any = BaseService.getInstance(SourceEnum.rapidApi)!.get(
            "/reviews",{params:{
                    id:request.id,
                    store:request.store,
                    language:request.language
                }}
        );
        return response;
    }
}
