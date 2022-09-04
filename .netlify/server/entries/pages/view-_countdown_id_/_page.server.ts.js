var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  POST: () => POST,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_deta = require("../../../chunks/deta.js");
var import_index2 = require("../../../chunks/index2.js");
var import_deta2 = require("deta");
const load = async ({ params }) => {
  const countdown = await import_deta.b.get(params.countdown_id);
  if (!countdown) {
    throw (0, import_index2.e)(404, "countdown not found");
  }
  return countdown;
};
const POST = async ({ request, params }) => {
  const data = await request.json();
  await import_deta.b.update({ todos: data }, params.countdown_id);
};
