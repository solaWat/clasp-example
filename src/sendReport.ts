import { SendReportMapper } from './sendReportMapper';

const properties = PropertiesService.getScriptProperties().getProperties();
const { CHATWORK_API_TOKEN, CHAT_ROOM_ID } = properties;

function sendReport(e: any) {
  sendMessage(SendReportMapper.toMessage(e));
  transcribeToSheet(e);
}

function sendMessage(message: string) {
  // Chatworkへ送信
  const client = ChatWorkClient.factory({ token: CHATWORK_API_TOKEN });
  const res_sendMessage = client.sendMessage({ room_id: CHAT_ROOM_ID, body: message });
  console.log("res_sendMessage: ", res_sendMessage);
}

function transcribeToSheet(e: any) {
  // Googleフォームの項目に合わせる
  const inquiry_date: string = e.namedValues['タイムスタンプ'];
  const inquiry_type: string = e.namedValues['お問い合わせ種類'];
  const inquiry_content: string = e.namedValues['お問い合わせ内容'];

  // 個別のシートへ転記
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(inquiry_type);
  if (sheet == null) {
    sheet = ss.insertSheet();
    sheet.setName(inquiry_type);
    sheet.appendRow(["タイムスタンプ", "お問い合わせ種類", "お問い合わせ内容"]);
  }
  sheet.appendRow([String(inquiry_date), String(inquiry_type), String(inquiry_content)]);
}
