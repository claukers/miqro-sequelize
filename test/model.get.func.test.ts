import {resolve} from "path";
import {expect} from "chai";
import {before, describe, it} from "mocha";

import {Util} from "@miqro/core";

process.env.NODE_ENV = "test";
process.env.MIQRO_DIRNAME = resolve(__dirname, "data");
Util.loadConfig();

let dbLoaded = false;

describe("ModelService Func Tests", function() {
  this.timeout(100000);

  before((done) => {
    (async () => {
      const {migrate, seed, initDBConfig} = require("../src");
      process.chdir(process.env.MIQRO_DIRNAME);
      if (!dbLoaded) {
        dbLoaded = true;
        await initDBConfig();
        await migrate();
        await seed();
      }
    })().then(done).catch(done);
  });

  it("case 1 get with pagination and order  but no params 1", (done) => {
    (async () => {
      const {Database, ModelService} = require("../src");
      const db = Database.getInstance();
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
      expect(result.count).to.be.equals(4);
      expect(result.rows.length).to.be.equals(2);
    })().then(done).catch(done);
  });

  it("case 2 get with pagination and order and params 1", (done) => {
    (async () => {
      const {Database, ModelService} = require("../src");
      const db = Database.getInstance();
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
      expect(result.count).to.be.equals(2);
      expect(result.rows.length).to.be.equals(2);
    })().then(done).catch(done);
  });

  it("case 2 get with pagination and order and params 2", (done) => {
    (async () => {
      const {Database, ModelService} = require("../src");
      const db = Database.getInstance();
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
      expect(result.count).to.be.equals(2);
      expect(result.rows.length).to.be.equals(2);
    })().then(done).catch(done);
  });
});
