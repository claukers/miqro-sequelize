import {expect} from "chai";
import {after, before, describe, it} from "mocha";
import * as rewiremock from "rewiremock";
import {fake} from "sinon";

describe("PostListModelService Unit Tests", function() {
  this.timeout(10000);
  let msPostMockImpl = null;

  class ModelServiceMock {
    // noinspection JSUnusedGlobalSymbols
    public async post(args) {
      return msPostMockImpl(args);
    }
  }

  const UtilMock = {
    parseOptions: null
  };

  before((done) => {
    msPostMockImpl = null;
    UtilMock.parseOptions = null;
    rewiremock.default.disable();
    rewiremock.default.enable();
    rewiremock.default.disable();
    rewiremock.default("./model").with({
      ModelService: ModelServiceMock
    });
    rewiremock.default("miqro-core").with({
      Util: UtilMock
    });
    rewiremock.default.enable();
    done();
  });
  after((done) => {
    rewiremock.default.disable();
    done();
  });

  it("post can accept a list as a body happy path", (done) => {
    (async () => {
      const {PostListModelService} = require("../src/service/postlist");
      const arg1 = "bla1";
      const arg2 = "bla2";
      const body = [arg1, arg2];
      const retMock = "bla";
      UtilMock.parseOptions = fake(() => {
        return;
      });
      const instance = new PostListModelService();
      instance.model = {};
      instance.model.bulkCreate = fake(async (input) => {
        if (instance.model.bulkCreate.callCount === 1) {
          expect(input).to.be.equals(body);
        } else {
          done(new Error(`unhandled call count`));
        }
        return retMock;
      });
      const ret = await instance.post({
        params: [],
        query: [],
        body
      });
      expect(ret).to.be.equals(retMock);
      expect(instance.model.bulkCreate.callCount).to.be.equals(1);
      expect(UtilMock.parseOptions.callCount).to.be.equals(2);
    })().then(done).catch(done);
  });

  it("post can accept a normal body happy path", (done) => {
    (async () => {
      const {PostListModelService} = require("../src/service/postlist");
      const arg1 = "bla1";
      const retMock = "bla";
      msPostMockImpl = fake(async (input) => {
        if (msPostMockImpl.callCount === 1) {
          expect(input.body).to.be.equals(arg1);
        } else {
          done(new Error(`unhandled call count`));
        }
        return retMock;
      });
      const instance = new PostListModelService();
      const ret1 = await instance.post({
        body: arg1
      });
      expect(ret1).to.be.equals(retMock);
      expect(msPostMockImpl.callCount).to.be.equals(1);
    })().then(done).catch(done);
  });
});
