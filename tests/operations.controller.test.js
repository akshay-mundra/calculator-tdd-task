const request = require('supertest');
const app = require('../index.js');


describe("Test calculate controller", () => {

  test("POST /api/operations all correct data", async () => {
    const res = await request(app)
      .post("/api/operations?email=a@gmail.com")
      .expect("Content-Type", /json/)
      .send({
      	"input1": 4,
      	"input2": 5,
      	"operator": "*"
      });

    expect(200);
    expect(res.body.data).toEqual({result: 20, input1: 4, input2: 5});
  });


  test("POST /api/operations throw error on invalid inputs", async () => {
    const res = await request(app)
      .post("/api/operations?email=a@gmail.com")
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
      .post("/api/operations?email=a@gmail.com")
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



describe("Test showHistory controller", () => {	

  test("GET /api/operations should work properly", async () => {
    const res = await request(app)
      .get("/api/operations?email=a@gmail.com")
      .expect("Content-Type", /json/)
    expect(200)
    expect(Array.isArray(res.body.data)).toBe(true);
  });


  test("GET /api/operations throw error message on invalid email", async () => {
    const res = await request(app)
      .get("/api/operations?email=agmail.com")
      .expect("Content-Type", /json/)
    expect(400)
    expect(res.body.message).toEqual("Invalid Email");
  });

});



describe('Test delete one and all history', () => {

  test("Delete /api/operations Delete single recent history properly", async () => {
    const res = await request(app)
      .delete("/api/operations?email=a@gmail.com&type=one")
      .expect("Content-Type", /json/)
    expect(200)
    expect(res.body.message).toBe("one cleared")
  });


  test("Delete /api/operations Delete single recent history properly", async () => {
    const res = await request(app)
      .delete("/api/operations?email=a@gmail.com&type=all")
      .expect("Content-Type", /json/)
    expect(200)
    expect(res.body.message).toBe("all cleared")
  });


  test("Delete /api/operations throw error message on invalid clear type", async () => {
    const res = await request(app)
      .delete("/api/operations?email=a@gmail.com&type=two")
      .expect("Content-Type", /json/)
    expect(400)  
    expect(res.body.message).toBe("clear type must be one of one, all")
  });

})



