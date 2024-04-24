"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.json());
app.get('/api/health', function (req, res) {
    res.status(200).json('ok');
});
app.use('/api', routes_1.default);
app.use(function (req, res) {
    res.status(404).json('Not found');
});
var errorHandler = function (err, req, res, next) {
    console.error(err);
    res.status(500).json('Internal server error');
};
app.use(errorHandler);
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map