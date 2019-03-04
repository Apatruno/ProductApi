export interface IWebSocketMessageEvent<T> {
    messageName: string;
    payLoad: T;
}