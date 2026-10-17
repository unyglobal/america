// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-ignacio-de-sabaneta","repository":"america","path":"dominican-republic/santiago-rodriguez/san-ignacio-de-sabaneta","depth":3,"parent":"dominican-republic/santiago-rodriguez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
