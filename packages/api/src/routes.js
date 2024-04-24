"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var router = express_1.default.Router();
router.post('/photos', controllers_1.createPhoto);
router.get('/photos', controllers_1.getPhotos);
router.get('/photos/:id', controllers_1.getPhoto);
router.delete('/photos/:id', controllers_1.deletePhoto);
exports.default = router;
//# sourceMappingURL=routes.js.map