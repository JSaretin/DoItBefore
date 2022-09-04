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
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const TodoIntput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-co452d{width:100%;display:flex;background-color:rgb(255, 255, 255);border-radius:.5rem;overflow:hidden}input.svelte-co452d{padding:.6rem;outline:none;border:none}input[type='text'].svelte-co452d{flex:1;background-color:transparent}input.svelte-co452d:last-child{background-color:rgb(239, 101, 101);cursor:pointer;transition:all ease 300ms}input.svelte-co452d:last-child:hover{background-color:red}",
  map: null
};
const TodoIntput = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  $$result.css.add(css$1);
  return `<div class="${"svelte-co452d"}"><input type="${"text"}" class="${"svelte-co452d"}"${(0, import_chunks.d)("value", todo.title, 0)}>
	<input type="${"button"}" value="${"delete"}" class="${"svelte-co452d"}">
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-15e2udt.svelte-15e2udt{max-width:500px;width:100%;margin:auto;display:flex;flex-direction:column;gap:1rem;box-shadow:1px 3px 8px rgba(41, 2, 63, 0.2);border-radius:0.5rem;padding:2rem;font-family:'Poppins', sans-serif}label.svelte-15e2udt.svelte-15e2udt{width:100%;display:flex;flex-direction:column;gap:1rem}label.svelte-15e2udt>.svelte-15e2udt{width:100%}.todos.svelte-15e2udt.svelte-15e2udt{width:100%;display:flex;flex-direction:column;gap:1rem}input[aria-label='add-todo'].svelte-15e2udt.svelte-15e2udt{align-self:flex-end;width:100%;padding:0.4rem;background-color:transparent;border:none;outline:1px solid gray;transition:all ease 300ms;cursor:pointer}input[aria-label='add-todo'].svelte-15e2udt.svelte-15e2udt:hover{background-color:black;color:#fff}textarea.svelte-15e2udt.svelte-15e2udt{background-color:rgb(255, 255, 255);padding:1rem;resize:none;border-radius:0.4rem;border:none;outline:none;color:rgb(17, 1, 28);font-weight:400;font-size:14px}button.svelte-15e2udt.svelte-15e2udt{width:100%;padding:0.6rem;border-radius:0.6rem;background-color:rgb(81, 3, 133);color:#fff;border:none;outline:none;cursor:pointer}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let data = { deadline: "", description: "", todos: [] };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form action="${""}" class="${"svelte-15e2udt"}"><label class="${"svelte-15e2udt"}">description
		<textarea cols="${"30"}" rows="${"10"}" placeholder="${"write something"}" required class="${"svelte-15e2udt"}">${""}</textarea></label>
	<div class="${"todos svelte-15e2udt"}">${(0, import_chunks.f)(data.todos, (todo) => {
      return `${(0, import_chunks.v)(TodoIntput, "TodoIntput").$$render(
        $$result,
        { todo },
        {
          todo: ($$value) => {
            todo = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}
		<input type="${"button"}" value="${"add todo"}" aria-label="${"add-todo"}" class="${"svelte-15e2udt"}"></div>
	<label class="${"svelte-15e2udt"}">delivery day
		<input type="${"datetime-local"}" required class="${"svelte-15e2udt"}"${(0, import_chunks.d)("value", data.deadline, 0)}></label>
	<button class="${"svelte-15e2udt"}">start countdown</button>
</form>`;
  } while (!$$settled);
  return $$rendered;
});
