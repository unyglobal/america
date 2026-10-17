// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-berbice-corentyne","repository":"america","path":"guyana/east-berbice-corentyne","depth":2,"parent":"guyana","children":["new-amsterdam"]});
export const childModules = Object.freeze({"new-amsterdam":"./new-amsterdam/new-amsterdam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
