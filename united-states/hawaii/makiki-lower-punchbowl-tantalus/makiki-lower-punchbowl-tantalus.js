// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"makiki-lower-punchbowl-tantalus","repository":"america","path":"united-states/hawaii/makiki-lower-punchbowl-tantalus","depth":3,"parent":"united-states/hawaii","children":["makiki-heights"]});
export const childModules = Object.freeze({"makiki-heights":"./makiki-heights/makiki-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
