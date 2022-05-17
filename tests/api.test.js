const request = require("supertest");
const mongoose = require("mongoose");
const { deleteOne } = require("../models/submissions");
const server = require("../server");

jest.mock("axios");

describe("API testing", () => {
  // test if a post request to /api/speed/submission is successful
  it("POST api/speed/submission - Correct Payload", async () => {
    await request(server)
      .post("/api/speed/submission")
      .send({
        title: "test",
        authors: "test",
        journal: "test",
        year: 2001,
        volume: 1,
        numberOfPages: 2,
        DOI: "test",
        claims: "test",
        methodology: "test"
      })
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
  it("POST api/speed/submission - Incorrect Payload", async () => {
    await request(server)
      .post("/api/speed/submission")
      .send({
        "Incorrect Payload": "incorrect"
      })
      .then((response) => {
        expect(response.status).toBe(400);
      });
  });
});
