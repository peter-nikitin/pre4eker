import convertXML2JSON from "./xml2json";
import {
  requestExample,
  responseExample,
  responseExampleNoCustomer,
  responseExampleNoOrder,
} from "./mockData";

describe("requestToJSON ", () => {
  it("should return request JSON which match with example", async () => {
    const JSONFromXML = await convertXML2JSON(requestExample.xml);
    const exampleJson = JSON.parse(requestExample.json);

    expect(JSON.parse(JSONFromXML)).toStrictEqual(exampleJson);
  });
});

describe("responseToJSON", () => {
  it("should return response JSON which match with example", async () => {
    const JSONFromXML = await convertXML2JSON(responseExample.xml);
    const exampleJson = JSON.parse(responseExample.json);

    expect(JSON.parse(JSONFromXML)).toStrictEqual(exampleJson);
  });

  it("without customer should return response JSON which match with example", async () => {
    const JSONFromXML = await convertXML2JSON(responseExampleNoCustomer.xml);
    const exampleJson = JSON.parse(responseExampleNoCustomer.json);

    expect(JSON.parse(JSONFromXML)).toStrictEqual(exampleJson);
  });
  it("without order should return response JSON which match with example", async () => {
    const JSONFromXML = await convertXML2JSON(responseExampleNoOrder.xml);
    const exampleJson = JSON.parse(responseExampleNoOrder.json);

    expect(JSON.parse(JSONFromXML)).toStrictEqual(exampleJson);
  });
});
