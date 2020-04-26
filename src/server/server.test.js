const request = require("supertest");
const app = require("./main");

describe("GET main endpoint ", () => {
  it("should handle request", async () => {
    const res = await request(app).get("/").send();
    expect(res.statusCode).toEqual(200);
  });
});
