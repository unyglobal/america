// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abbotsford","repository":"america","path":"canada/british-columbia/abbotsford","depth":3,"parent":"canada/british-columbia","children":["mckee"]});
export const childModules = Object.freeze({"mckee":"./mckee/mckee.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
