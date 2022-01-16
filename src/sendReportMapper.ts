export namespace SendReportMapper {
  export function toMessage(e: {
    namedValues: { [x: string]: string };
  }): string {
    // Googleフォームの項目に合わせる
    const inquiry_date: string = e.namedValues["タイムスタンプ"];
    const inquiry_type: string = e.namedValues["お問い合わせ種類"];
    const inquiry_content: string = e.namedValues["お問い合わせ内容"];

    let message = "";
    message += "[info][title]お問い合わせが来ました[/title]";
    message += "依頼日時: " + inquiry_date + "\n";
    message += "お問い合わせ種類: " + inquiry_type + "\n";
    message += "お問い合わせ内容: " + inquiry_content;
    message += "[/info]";

    return message;
  }
}
