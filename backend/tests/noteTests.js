import request from "supertest";
import app from "../server.js";

describe("Notes API", () => {
  it("should create a note", async () => {
    const res = await request(app).post("/api/notes").send({ title: "Test", content: "This is a test" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test");
  });

  it("should get all notes", async () => {
    const res = await request(app).get("/api/notes");
    expect(res.statusCode).toBe(200);
  });
});
