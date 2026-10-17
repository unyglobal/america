// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amazonas-department","repository":"america","path":"colombia/amazonas-department","depth":2,"parent":"colombia","children":["leticia"]});
export const childModules = Object.freeze({"leticia":"./leticia/leticia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
