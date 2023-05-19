
interface InstanceData {
	idInstance: number;
	wid: string;
	typeInstance: string;
}

interface SenderData {
	chatId: string;
	sender: string;
	senderName: string;
}

interface TextMessageData {
	textMessage: string;
}

interface MessageData {
	typeMessage: string;
	textMessageData: TextMessageData;
}

interface Body {
	typeWebhook?: string;
	instanceData?: InstanceData;
	timestamp?: number;
	idMessage?: string;
	senderData?: SenderData;
	messageData?: MessageData;
}

export interface IMessageResponse {
	receiptId: number;
	body: Body;
	idMessage?: string
}