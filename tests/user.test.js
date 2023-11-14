const app=require('../index')
const request = require("supertest");
const User=require('../models/user')


const clearDatabase = async () => {
  let tables = [`Users`];
  tables.forEach(async (d) => {
    await User.destroy({ truncate: true, cascade: false });
  });
};

describe("Crud Api test cases", () => {


    beforeAll(async () => {
      await clearDatabase();
    });


      test("postUsers", async () => {
        const res = await request(app).post("/users").send({
          firstName: "hulk9",
          lastName: "superman",
        });
        //   console.log(res.body);
        expect(res.status).toBe(200);
      });

  test("getUsers", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });

  test("getUser", async () => {
    const res = await request(app).get("/user/1");
    // console.log(res.body);
    expect(res.body.id).toBe(1);
  });

  test("updateUser", async () => {
    const res = await request(app).patch("/user/1").send({
      firstName: "ricky pointing9",
    });
    expect(res.status).toBe(200);
  });

//   test("deleteUser", async () => {
//     const res = await request(app).delete("/user/1").send({});
//     expect(res.status).toBe(200);
//   });


//  afterAll(async () => {
//    await clearDatabase();
//  });

});