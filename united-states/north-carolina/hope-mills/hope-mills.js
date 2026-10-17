// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hope-mills","repository":"america","path":"united-states/north-carolina/hope-mills","depth":3,"parent":"united-states/north-carolina","children":["clifton-forge"]});
export const childModules = Object.freeze({"clifton-forge":"./clifton-forge/clifton-forge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
