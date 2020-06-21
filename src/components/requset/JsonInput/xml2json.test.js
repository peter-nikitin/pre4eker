import { requestToJSON } from "./xml2json";
import example from "./mockData";

describe("converToJSON ", () => {
  it("should return JSON which match with example", async () => {
    const JSONFromXML = await requestToJSON(example.xml);
    const exampleJson = JSON.parse(example.json);

    expect(JSONFromXML).toStrictEqual(exampleJson);
  });
});
