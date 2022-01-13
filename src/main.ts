const properties = PropertiesService.getScriptProperties().getProperties();
const { CHATWORK_API_TOKEN, CHAT_ROOM_ID } = properties;

function sendReport(e) {

  // 【編集対象】Googleフォームの項目に合わせる
  const date: string = e.namedValues['タイムスタンプ'];
  const type: string = e.namedValues['お問い合わせ種類'];
  const content: string = e.namedValues['お問い合わせ内容'];

  // 【編集対象】Googleフォームの項目に合わせる
  var message: string = '';
  message += "[info][title]お問い合わせが来ました[/title]";
  message += "依頼日時: " + date + "\n";
  message += "お問い合わせ種類: " + type + "\n";
  message += "お問い合わせ内容: " + content;
  message += "[/info]";

  // Chatworkへ送信
  var client = ChatWorkClient.factory({ token: CHATWORK_API_TOKEN })
  client.sendMessage({ room_id: CHAT_ROOM_ID, body: message });
}
