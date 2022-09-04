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
var import_chunks = require("../../../chunks/index.js");
var import_stores = require("../../../chunks/stores.js");
const renderRemainingTime = (deadline) => {
  const second = 1e3, minute = second * 60, hour = minute * 60, day = hour * 24;
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const diff = deadlineDate.getTime() - now.getTime();
  if (diff < 1)
    return "TIMEDOUT";
  const zfill = (num) => Number(num).toString().padStart(2, "0");
  const days = zfill(Math.floor(diff / day)), hours = zfill(Math.floor(diff % day / hour)), minutes = zfill(Math.floor(diff % hour / minute)), seconds = zfill(Math.floor(diff % minute / second));
  return {
    days,
    hours,
    minutes,
    seconds
  };
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1ungrq8.svelte-1ungrq8{display:flex;flex-direction:column;max-width:800px;margin:auto;width:100%;gap:2rem}span.svelte-1ungrq8.svelte-1ungrq8{font-style:oblique;font-size:20px;font-family:'Germania One', cursive;font-weight:400;color:rgb(1, 85, 0);letter-spacing:0}.countdown.svelte-1ungrq8.svelte-1ungrq8{font-size:5.5em;font-family:'Bangers', cursive;word-break:keep-all;white-space:nowrap;letter-spacing:0.1rem}@media(max-width: 1000px){.countdown.svelte-1ungrq8.svelte-1ungrq8{font-size:3.75rem}}@media(max-width: 600px){.countdown.svelte-1ungrq8.svelte-1ungrq8{font-size:2.5rem}}.content.svelte-1ungrq8.svelte-1ungrq8{width:100%;display:flex;gap:2rem;flex-direction:column;font-family:'Poppins', sans-serif}.config.svelte-1ungrq8.svelte-1ungrq8{width:100%;display:flex;justify-content:space-between;color:rgb(161, 161, 161);font-style:italic}.config.svelte-1ungrq8 label.svelte-1ungrq8{cursor:pointer}.config.svelte-1ungrq8 input.svelte-1ungrq8{cursor:pointer}.sumary.svelte-1ungrq8.svelte-1ungrq8{border-radius:1rem;padding:1rem;width:100%;background-color:rgba(0, 0, 255, 0.202);margin:auto}.todos.svelte-1ungrq8.svelte-1ungrq8{width:100%;display:flex;flex-direction:column;gap:1rem}.todo.svelte-1ungrq8.svelte-1ungrq8{width:100%;display:flex;padding:1rem;border-radius:0.5rem}.pending.svelte-1ungrq8.svelte-1ungrq8{background-color:rgb(8, 121, 147)}.done.svelte-1ungrq8.svelte-1ungrq8{background-color:rgb(15, 147, 8);text-decoration:line-through}.todo.svelte-1ungrq8 p.svelte-1ungrq8{flex:1;color:#fff}.todo.svelte-1ungrq8 input.svelte-1ungrq8{cursor:pointer}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.b)(import_stores.p, (value) => value);
  let { data } = $$props;
  let timeLeft = renderRemainingTime(data.deadline);
  setInterval(
    () => {
      timeLeft = renderRemainingTime(data.deadline);
    },
    1e3
  );
  let showInfo = true;
  let showTodos = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"container svelte-1ungrq8"}"><h1 class="${"countdown svelte-1ungrq8"}">${!timeLeft ? `Time dose not exist` : `${typeof timeLeft == "string" ? `${(0, import_chunks.e)(timeLeft)}` : `${(0, import_chunks.e)(timeLeft.days)} <span class="${"svelte-1ungrq8"}">days</span> : ${(0, import_chunks.e)(timeLeft.hours)} <span class="${"svelte-1ungrq8"}">hours</span> : ${(0, import_chunks.e)(timeLeft.minutes)}
			<span class="${"svelte-1ungrq8"}">minutes</span>
			: ${(0, import_chunks.e)(timeLeft.seconds)} <span class="${"svelte-1ungrq8"}">seconds</span>`}`}</h1>

	<div class="${"config svelte-1ungrq8"}"><label class="${"svelte-1ungrq8"}">show description
			<input type="${"checkbox"}" class="${"svelte-1ungrq8"}"${(0, import_chunks.d)("checked", showInfo, 1)}></label>

		${data.todos.length > 0 && showInfo ? `<label class="${"svelte-1ungrq8"}">show todos
				<input type="${"checkbox"}" class="${"svelte-1ungrq8"}"${(0, import_chunks.d)("checked", showTodos, 1)}></label>` : ``}</div>

	${`<div class="${"content svelte-1ungrq8"}"><p class="${"sumary svelte-1ungrq8"}">${(0, import_chunks.e)(data.description)}</p>

			${data.todos.length > 0 && showTodos ? `<div class="${"todos svelte-1ungrq8"}"><h3>Milestones</h3>
					${(0, import_chunks.f)(data.todos, (todo) => {
    return `<div class="${(0, import_chunks.e)((0, import_chunks.h)("todo " + (todo.completed ? "done" : "pending")), true) + " svelte-1ungrq8"}"><p class="${"svelte-1ungrq8"}">${(0, import_chunks.e)(todo.title)}</p>
							<input type="${"checkbox"}" class="${"svelte-1ungrq8"}"${(0, import_chunks.d)("checked", todo.completed, 1)}>
						</div>`;
  })}</div>` : ``}</div>`}
</div>`;
});
