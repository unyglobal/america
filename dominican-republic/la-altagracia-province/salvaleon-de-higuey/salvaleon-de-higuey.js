// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salvaleon-de-higuey","repository":"america","path":"dominican-republic/la-altagracia-province/salvaleon-de-higuey","depth":3,"parent":"dominican-republic/la-altagracia-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
