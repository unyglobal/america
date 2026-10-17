// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-rinconada","repository":"america","path":"peru/puno/la-rinconada","depth":3,"parent":"peru/puno","children":["ananea"]});
export const childModules = Object.freeze({"ananea":"./ananea/ananea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
