// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rodolfo-sanchez-taboada","repository":"america","path":"mexico/baja-california/rodolfo-sanchez-taboada","depth":3,"parent":"mexico/baja-california","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
