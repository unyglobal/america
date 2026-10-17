// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neembucu-department","repository":"america","path":"paraguay/neembucu-department","depth":2,"parent":"paraguay","children":["pilar"]});
export const childModules = Object.freeze({"pilar":"./pilar/pilar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
