// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waverly","repository":"america","path":"united-states/michigan/waverly","depth":3,"parent":"united-states/michigan","children":["bretton-woods"]});
export const childModules = Object.freeze({"bretton-woods":"./bretton-woods/bretton-woods.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
