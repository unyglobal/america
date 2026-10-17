// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valverde-province","repository":"america","path":"dominican-republic/valverde-province","depth":2,"parent":"dominican-republic","children":["esperanza","mao"]});
export const childModules = Object.freeze({"esperanza":"./esperanza/esperanza.js","mao":"./mao/mao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
