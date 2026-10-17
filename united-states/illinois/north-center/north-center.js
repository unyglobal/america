// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-center","repository":"america","path":"united-states/illinois/north-center","depth":3,"parent":"united-states/illinois","children":["cuyler"]});
export const childModules = Object.freeze({"cuyler":"./cuyler/cuyler.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
