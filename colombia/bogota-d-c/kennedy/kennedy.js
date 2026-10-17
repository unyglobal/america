// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kennedy","repository":"america","path":"colombia/bogota-d-c/kennedy","depth":3,"parent":"colombia/bogota-d-c","children":["carimagua","timiza"]});
export const childModules = Object.freeze({"carimagua":"./carimagua/carimagua.js","timiza":"./timiza/timiza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
