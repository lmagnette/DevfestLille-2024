import {ResponseResource} from "./response-resource";

export interface ChatExchange {
    id: string,
    prompt: string,
    response: string,
    resources: ResponseResource[]
}