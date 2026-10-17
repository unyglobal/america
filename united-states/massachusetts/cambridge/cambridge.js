// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cambridge","repository":"america","path":"united-states/massachusetts/cambridge","depth":3,"parent":"united-states/massachusetts","children":["mid-cambridge"]});
export const childModules = Object.freeze({"mid-cambridge":"./mid-cambridge/mid-cambridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
