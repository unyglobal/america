// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-elsdon","repository":"america","path":"united-states/illinois/west-elsdon","depth":3,"parent":"united-states/illinois","children":["elsdon"]});
export const childModules = Object.freeze({"elsdon":"./elsdon/elsdon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
