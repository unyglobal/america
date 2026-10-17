// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rego-park","repository":"america","path":"united-states/new-york/rego-park","depth":3,"parent":"united-states/new-york","children":["walden-terrace"]});
export const childModules = Object.freeze({"walden-terrace":"./walden-terrace/walden-terrace.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
