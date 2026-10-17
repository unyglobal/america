// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lerdo-de-tejada","repository":"america","path":"mexico/veracruz/lerdo-de-tejada","depth":3,"parent":"mexico/veracruz","children":["san-francisco"]});
export const childModules = Object.freeze({"san-francisco":"./san-francisco/san-francisco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
