import {resolve} from "path";
import {Database, getDB, ModelService} from "../src";
import {before, describe, it} from "mocha";

import {Util} from "@miqro/core";
import {strictEqual} from "assert";

process.env.NODE_ENV = "test";
process.env.MIQRO_DIRNAME = resolve(__dirname, "data");
Util.loadConfig();

let dbLoaded = false;

describe("ModelService Func Tests", function () {
  this.timeout(100000);

  before((done) => {
    (async () => {
      const {migrate, seed, initDBConfig} = require("../src");
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
