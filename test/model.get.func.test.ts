import { Util } from "@miqro/core";
import { strictEqual } from "assert";
import { before, describe, it } from "mocha";
import { resolve } from "path";
import { Database, FakeDeleteModelService, getDB, ModelService } from "../src";


process.env.NODE_ENV = "test";
process.env.MIQRO_DIRNAME = resolve(__dirname, "data");
Util.loadConfig();

let dbLoaded = false;

describe("ModelService Func Tests", function () {
  this.timeout(100000);

  before((done) => {
    (async () => {
      const { migrate, seed, initDBConfig } = require("../src/db");
      process.chdir(process.env.MIQRO_DIRNAME as string);
      if (!dbLoaded) {
        dbLoaded = true;
        await initDBConfig();
        await migrate();
        await seed();
      }
    })().then(done).catch(done);
  });

  it("case 1 get with pagination and order  but no params 1 with getDB", (done) => {
    (async () => {
      const db = getDB();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {},
        query: {
          pagination: JSON.stringify({
            limit: 2,
            offset: 1
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 4);
        strictEqual(result.rows.length, 2);
      } else {
        strictEqual(true, false);
      }

    })().then(done).catch(done);
  });

  it("case 1 get sum group by name with pagination", (done) => {
    (async () => {
      const db = getDB();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {},
        query: {
          attributes: JSON.stringify([
            "name",
            {
              fn: "sum",
              col: "amount",
              name: "total"
            }
          ]),
          group: JSON.stringify(["name"]),
          pagination: JSON.stringify({
            limit: 10,
            offset: 1
          }),
          order: JSON.stringify([
            ["name", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        if(result.count instanceof Array) {
          strictEqual(result.count.length, 3);
          strictEqual(result.rows.length, 2);
          strictEqual((result.rows[0] as any).dataValues.total, 60);
          strictEqual((result.rows[1] as any).dataValues.total, 10);
        } else {
          strictEqual(true, false);
        }
      } else {
        strictEqual(true, false);
      }

    })().then(done).catch(done);
  });

  it("case 1 get sum group by name", (done) => {
    (async () => {
      const db = getDB();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {},
        query: {
          attributes: JSON.stringify([
            "name",
            {
              fn: "sum",
              col: "amount",
              name: "total"
            }
          ]),
          group: JSON.stringify(["name"]),
          order: JSON.stringify([
            ["name", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(true, false);
      } else {
        strictEqual(result.length, 3);
        strictEqual((result[0] as any).dataValues.total, 30);
        strictEqual((result[1] as any).dataValues.total, 60);
        strictEqual((result[2] as any).dataValues.total, 10);
      }

    })().then(done).catch(done);
  });

  it("case 1 get sum", (done) => {
    (async () => {
      const db = getDB();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {},
        query: {
          attributes: JSON.stringify([
            {
              fn: "sum",
              col: "amount",
              name: "total"
            }
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(true, false);
      } else {
        strictEqual(result.length, 1);
        strictEqual((result[0] as any).dataValues.total, 100);
      }

    })().then(done).catch(done);
  });


  it("deleted happy path", (done) => {
    (async () => {
      const db = getDB();
      const service = new FakeDeleteModelService(db.models.post2);
      const result = await service.get({
        params: {},
        query: {
          pagination: JSON.stringify({
            limit: 2,
            offset: 0
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 1);
        strictEqual(result.rows.length, 1);
      } else {
        strictEqual(true, false);
      }

    })().then(done).catch(done);
  });

  it("case 1 get with pagination and order  but no params 1", (done) => {
    (async () => {
      const db = new Database();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {},
        query: {
          pagination: JSON.stringify({
            limit: 2,
            offset: 1
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 4);
        strictEqual(result.rows.length, 2);
      } else {
        strictEqual(true, false);
      }

    })().then(done).catch(done);
  });

  it("case 2 get with pagination and order and params 1", (done) => {
    (async () => {
      const db = new Database();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {
          name: "user2"
        },
        query: {
          pagination: JSON.stringify({
            limit: 10,
            offset: 0
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 2);
        strictEqual(result.rows.length, 2);
      } else {
        strictEqual(true, false);
      }
    })().then(done).catch(done);
  });

  it("case 2 get with pagination and order and params 1 and search query", (done) => {
    (async () => {
      const db = new Database();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {
          name: "user2"
        },
        query: {
          pagination: JSON.stringify({
            limit: 10,
            offset: 0,
            search: {
              query: "email3",
              columns: ["email", "name"]
            }
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 1);
        strictEqual(result.rows.length, 1);
      } else {
        strictEqual(true, false);
      }
    })().then(done).catch(done);
  });

  it("case 2 get with pagination and order and params 2", (done) => {
    (async () => {
      const db = new Database();
      const service = new ModelService(db.models.post);
      const result = await service.get({
        params: {
          email: "email1"
        },
        query: {
          pagination: JSON.stringify({
            limit: 10,
            offset: 0
          }),
          order: JSON.stringify([
            ["createdAt", "DESC"]
          ])
        },
        body: {}
      });
      if (!(result instanceof Array)) {
        strictEqual(result.count, 2);
        strictEqual(result.rows.length, 2);
      } else {
        strictEqual(true, false);
      }
    })().then(done).catch(done);
  });
});
