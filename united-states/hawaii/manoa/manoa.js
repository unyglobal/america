// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manoa","repository":"america","path":"united-states/hawaii/manoa","depth":3,"parent":"united-states/hawaii","children":["upper-manoa"]});
export const childModules = Object.freeze({"upper-manoa":"./upper-manoa/upper-manoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
