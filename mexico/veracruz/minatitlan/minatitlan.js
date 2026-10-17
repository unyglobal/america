// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minatitlan","repository":"america","path":"mexico/veracruz/minatitlan","depth":3,"parent":"mexico/veracruz","children":["buenavista-norte"]});
export const childModules = Object.freeze({"buenavista-norte":"./buenavista-norte/buenavista-norte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
