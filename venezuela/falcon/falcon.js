// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falcon","repository":"america","path":"venezuela/falcon","depth":2,"parent":"venezuela","children":["coro","dabajuro","judibana","la-vela-de-coro","mene-de-mauroa","pueblo-nuevo","puerto-cumarebo","punta-cardon","punto-fijo","santa-cruz-de-los-taques","tucacas"]});
export const childModules = Object.freeze({"coro":"./coro/coro.js","dabajuro":"./dabajuro/dabajuro.js","judibana":"./judibana/judibana.js","la-vela-de-coro":"./la-vela-de-coro/la-vela-de-coro.js","mene-de-mauroa":"./mene-de-mauroa/mene-de-mauroa.js","pueblo-nuevo":"./pueblo-nuevo/pueblo-nuevo.js","puerto-cumarebo":"./puerto-cumarebo/puerto-cumarebo.js","punta-cardon":"./punta-cardon/punta-cardon.js","punto-fijo":"./punto-fijo/punto-fijo.js","santa-cruz-de-los-taques":"./santa-cruz-de-los-taques/santa-cruz-de-los-taques.js","tucacas":"./tucacas/tucacas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
