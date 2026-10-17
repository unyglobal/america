// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"near-north-side","repository":"america","path":"united-states/illinois/near-north-side","depth":3,"parent":"united-states/illinois","children":["cabrini-addition"]});
export const childModules = Object.freeze({"cabrini-addition":"./cabrini-addition/cabrini-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
