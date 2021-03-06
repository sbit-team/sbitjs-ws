function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (global.DEBUG === undefined) global.DEBUG = false;

var SBitApi = function () {
    function SBitApi(ws_rpc, api_name) {
        _classCallCheck(this, SBitApi);

        this.ws_rpc = ws_rpc;
        this.api_name = api_name;
    }

    SBitApi.prototype.init = function init() {
        var _this = this;

        var self = this;
        return this.ws_rpc.call([1, this.api_name, []]).then(function (response) {
            if (DEBUG) console.log("[SBitApi.js:11] ----- SBitApi.init ----->", _this.api_name, response);
            self.api_id = response;
            return self;
        });
    };

    SBitApi.prototype.exec = function exec(method, params) {
        return this.ws_rpc.call([this.api_id, method, params]).catch(function (error) {
            if (DEBUG) console.log("!!! SBitApi error: ", method, params, error, JSON.stringify(error));
            throw error;
        });
    };

    return SBitApi;
}();

export default SBitApi;