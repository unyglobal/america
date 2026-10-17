// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"napa","repository":"america","path":"united-states/california/napa","depth":3,"parent":"united-states/california","children":["napa-abajo"]});
export const childModules = Object.freeze({"napa-abajo":"./napa-abajo/napa-abajo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
