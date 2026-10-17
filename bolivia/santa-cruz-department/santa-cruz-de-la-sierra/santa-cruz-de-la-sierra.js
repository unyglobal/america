// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz-de-la-sierra","repository":"america","path":"bolivia/santa-cruz-department/santa-cruz-de-la-sierra","depth":3,"parent":"bolivia/santa-cruz-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
