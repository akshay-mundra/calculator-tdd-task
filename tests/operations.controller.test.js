const request = require('supertest');
const app = require('../index.js');

const operation = jest.fn();

describe("Test create operations controller", () => {

  test("POST /api/operations all correct data", async () => {
    const res = await request(app)
      .post("/api/operations")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
      .send({
      	"input1": 4,
      	"input2": 5,
      	"operator": "*"
      });

    expect(201);
    expect(res.body.data).toEqual({result: 20, input1: 4, input2: 5});
  });


  test("POST /api/operations throw error on invalid inputs", async () => {
    const res = await request(app)
      .post("/api/operations")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
      .send({
      	"input1": "4",
      	"input2": 5,
      	"operator": "*"
      })

    expect(400)
    expect(res.body.message).toEqual("Input must be number")
  });


  test("POST /api/operations throw error on no email", async () => {
    const res = await request(app)
      .post("/api/operations")
      .expect("Content-Type", /json/)
      .send({
        "input1": 4,
        "input2": 5,
        "operator": "*"
      })

    expect(400)
    expect(res.body.message).toEqual("Email not defined")
  });


  test("POST /api/operations throw error on invalid operator", async () => {
    const res = await request(app)
      .post("/api/operations")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
      .send({
        "input1": 4,
        "input2": 5,
        "operator": "#"
      })
    expect(400)
    expect(res.body.message).toEqual("Operator must be one of +, -, * and /")

  });

});



describe("Test get operations controller", () => {	

  test("GET /api/operations should work properly", async () => {
    const res = await request(app)
      .get("/api/operations")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
    expect(200)
    expect(Array.isArray(res.body.data)).toBe(true);
  });


  test("GET /api/operations throw error message on invalid email", async () => {
    const res = await request(app)
      .get("/api/operations")
      .set("Authorization", `Email acgmail.com`)
      .expect("Content-Type", /json/)
    expect(400)
    expect(res.body.message).toEqual("Invalid Email");
  });

});



describe('Test remove operation controller', () => {

  test("Delete /api/operations Delete single recent history properly", async () => {
    const res = await request(app)
      .delete("/api/operations/670e5d1d2f8af583eb2e1bff")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
    expect(200)
  });

})


describe('Test remove operations controller', () => {

  test("Delete /api/operations Delete all history properly", async () => {
    const res = await request(app)
      .delete("/api/operations/reset")
      .set("Authorization", `ac@gmail.com`)
      .expect("Content-Type", /json/)
    expect(200)
  });
})






