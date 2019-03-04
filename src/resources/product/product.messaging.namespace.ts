import { IWebSocketMessageEvent } from '../../utils/messaging/IWebSocketMessageEvent';

export enum Rooms { Admin }

export class ProductMessagingNamespace {
    private path: string = '/product';
    private nsp: SocketIO.Namespace;


    constructor(io: SocketIO.Server) {
        this.nsp = io.of(this.path);
    }

    sendNameSpaceMessage<T>(message: IWebSocketMessageEvent<T>) {
        this.nsp.emit(message.messageName, message.payLoad);
    }
    sendRoomMessage<T>(message: IWebSocketMessageEvent<T>, room: Rooms) {
        this.nsp.to(room.toString()).emit(message.messageName, message.payLoad);
    }
    
}