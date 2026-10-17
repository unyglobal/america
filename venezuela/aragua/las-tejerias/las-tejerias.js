// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-tejerias","repository":"america","path":"venezuela/aragua/las-tejerias","depth":3,"parent":"venezuela/aragua","children":["barrio-leonardo-ruiz-pineda"]});
export const childModules = Object.freeze({"barrio-leonardo-ruiz-pineda":"./barrio-leonardo-ruiz-pineda/barrio-leonardo-ruiz-pineda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
