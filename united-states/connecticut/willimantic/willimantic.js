// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"willimantic","repository":"america","path":"united-states/connecticut/willimantic","depth":3,"parent":"united-states/connecticut","children":["johnson-park"]});
export const childModules = Object.freeze({"johnson-park":"./johnson-park/johnson-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
