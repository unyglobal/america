// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-diego","repository":"america","path":"united-states/california/san-diego","depth":3,"parent":"united-states/california","children":["county-center","downtown"]});
export const childModules = Object.freeze({"county-center":"./county-center/county-center.js","downtown":"./downtown/downtown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
