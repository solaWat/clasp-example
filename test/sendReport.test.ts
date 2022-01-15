import { SendReportMapper } from "../src/sendReportMapper";
const data = require("./data/sendReport.test.json");

describe(SendReportMapper.toMessage.name, () => {
  it("should return toMessage()", () => {
    const message: string = SendReportMapper.toMessage(data);
    const expected_message: string = "[info][title]お問い合わせが来ました[/title]依頼日時: 2022/01/14 22:05:53\nお問い合わせ種類: その他のお問い合わせ\nお問い合わせ内容: ほげほげ[/info]"
    expect(message).toBe(expected_message);
  });
});
