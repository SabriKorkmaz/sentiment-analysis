import {BaseService} from "./base/base.service";
import {SourceEnum} from "./base/source.enum";
import {SearchRequestModel} from "../interface/rapidApi/search.request.interface";
import {ReviewRequestModel} from "../interface/rapidApi/review.request.interface";
import {SentimentRequestModel, SentimentResponseModel} from "../interface/azure/sentiment.request.interface";

export abstract class AzureService {

    static async sentimentRequest(request:SentimentRequestModel) {
        let response:SentimentResponseModel = await BaseService.getInstance(SourceEnum.rapidApi)!.post(
            "",request)
        return response;
    }
}
