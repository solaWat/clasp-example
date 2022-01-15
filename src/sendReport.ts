import { SendReportMapper } from './sendReportMapper';

const properties = PropertiesService.getScriptProperties().getProperties();
const { CHATWORK_API_TOKEN, CHAT_ROOM_ID } = properties;

function sendReport(e: any) {
  const message: string = SendReportMapper.toMessage(e);
  sendMessage(message);
}

function sendMessage(message: string) {
  // Chatworkへ送信
  const client = ChatWorkClient.factory({ token: CHATWORK_API_TOKEN });
  client.sendMessage({ room_id: CHAT_ROOM_ID, body: message });
}
