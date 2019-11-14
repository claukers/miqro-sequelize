import {expect} from "chai";
import {after, before, describe, it} from "mocha";
import * as rewiremock from "rewiremock";
import {fake} from "sinon";

describe("DeletedServiceModel Unit Tests", function() {
  this.timeout(10000);

  let msGetMockImpl = null;
  let msPatchMockImpl = null;
  let msDeleteMockImpl = null;
  let msPostMockImpl = null;

  class PostListModelServiceMock {
    // noinspection JSUnusedGlobalSymbols
    public async get(args) {
      return msGetMockImpl(args);
    }

    // noinspection JSUnusedGlobalSymbols
    public async patch(args) {
      return msPatchMockImpl(args);
    }

    // noinspection JSUnusedGlobalSymbols
    public async delete(args) {
      return msDeleteMockImpl(args);
    }

    // noinspection JSUnusedGlobalSymbols
    public async post(args) {
      return msPostMockImpl(args);
    }
  }

  before((done) => {
    msGetMockImpl = null;
    msPatchMockImpl = null;
    msDeleteMockImpl = null;
    msPostMockImpl = null;
    rewiremock.default.disable();
    rewiremock.default.enable();
    rewiremock.default.disable();
    rewiremock.default("./postlist").with({
      PostListModelService: PostListModelServiceMock
    });
    rewiremock.default.enable();
    done();
  });
  after((done) => {
    rewiremock.default.disable();
    done();
  });

  it("get adds deleted param happy path", (done) => {
    (async () => {
      const fakeId = "bla";
      const args = {
        params: {
          id: fakeId
        }
      };
      const retMock = "bla";
      msGetMockImpl = fake(async (input) => {
        expect(input.params.id).to.be.equals(fakeId);
        expect(input.params.deleted).to.be.equals(false);
        return retMock;
      });
      const {DeletedModelService} = require("../src/service/deleted");
      const instance = new DeletedModelService();
      const ret = await instance.get(args);
      expect(ret).to.be.equals(retMock);
      expect(msGetMockImpl.callCount).to.be.equals(1);
    })().then(done).catch(done);
  });

  it("get adds deleted param with empty params", (done) => {
    (async () => {
      const args = {
        params: {}
      };
      const retMock = "bla";
      msGetMockImpl = fake(async (input) => {
        expect(input.params.id).to.be.equals(undefined);
        expect(input.params.deleted).to.be.equals(false);
        return retMock;
      });
      const {DeletedModelService} = require("../src/service/deleted");
      const instance = new DeletedModelService();
      const ret = await instance.get(args);
      expect(ret).to.be.equals(retMock);
      expect(msGetMockImpl.callCount).to.be.equals(1);
    })().then(done).catch(done);
  });

  it("delete adds deleted body and calls patch happy path", (done) => {
    (async () => {
      const fakeId = "bla";
      const args = {
        params: {
          id: fakeId
        },
        body: {}
      };
      const retMock = "bla";
      msPatchMockImpl = fake(async (input) => {
        expect(input.params.id).to.be.equals(fakeId);
        expect(input.body.deleted).to.be.equals(true);
        return retMock;
      });
      const {DeletedModelService} = require("../src/service/deleted");
      const instance = new DeletedModelService();
      const ret = await instance.delete(args);
      expect(ret).to.be.equals(retMock);
      expect(msPatchMockImpl.callCount).to.be.equals(1);
    })().then(done).catch(done);
  });

  it("patch deletes deleted body patch happy path", (done) => {
    (async () => {
      const fakeId = "bla";
      const args = {
        params: {
          id: fakeId
        },
        body: {
          deleted: "ble2"
        }
      };
      const retMock = "bla";
      msPatchMockImpl = fake(async (input) => {
        expect(input.params.id).to.be.equals(fakeId);
        expect(input.body.deleted).to.be.equals(undefined);
        return retMock;
      });
      const {DeletedModelService} = require("../src/service/deleted");
      const instance = new DeletedModelService();
      const ret = await instance.patch(args);
      expect(ret).to.be.equals(retMock);
      expect(msPatchMockImpl.callCount).to.be.equals(1);
    })().then(done).catch(done);
  });

  it("post adds deleted body happy path", (done) => {
    (async () => {

    })().then(done).catch(done);
  });

  it("post adds deleted to array body happy path", (done) => {
    (async () => {

    })().then(done).catch(done);
  });
});
