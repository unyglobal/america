// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sierra-vista","repository":"america","path":"united-states/arizona/sierra-vista","depth":3,"parent":"united-states/arizona","children":["fry"]});
export const childModules = Object.freeze({"fry":"./fry/fry.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
