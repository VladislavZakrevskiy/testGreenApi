 interface ExtendedTextMessage {
	text: string;
	description: string;
	title: string;
	previewType: string;
	jpegThumbnail: string;
	forwardingScore?: any;
	isForwarded?: any;
}

export interface IHistoryMessageResponse {
	type: 'outgoing' | 'incoming';
	idMessage: string;
	timestamp: number;
	typeMessage: string;
	chatId: string;
	textMessage: string;
	extendedTextMessage: ExtendedTextMessage;
	statusMessage: string;
	sendByApi: boolean;
	senderId?: string;
	senderName?: string;
}

export interface IHistoryIncoming {
	type: string;
	idMessage: string;
	timestamp: number;
	typeMessage: string;
	chatId: string;
	textMessage: string;
	
}