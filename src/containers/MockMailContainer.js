"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMailContainer = void 0;
var MockMailComponent_1 = require("../components/MockMailComponent");
var react_1 = __importStar(require("react"));
var MockMailContainer = function (_a) {
    var loggedIn = _a.loggedIn, currentLoggedInUser = _a.currentLoggedInUser;
    console.log('loggedIn:', loggedIn);
    console.log('currentLoggedInUser:', currentLoggedInUser);
    // Add Overflow Body CSS
    (0, react_1.useEffect)(function () {
        document.body.id = 'body-mock-mail';
        return function () {
            document.body.id = 'body';
        };
    }, []);
    return (react_1.default.createElement(MockMailComponent_1.MockMail, { loggedIn: loggedIn, currentLoggedInUser: currentLoggedInUser }));
};
exports.MockMailContainer = MockMailContainer;
