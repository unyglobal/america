// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aysen","repository":"america","path":"chile/aysen","depth":2,"parent":"chile","children":["coyhaique","puerto-aysen"]});
export const childModules = Object.freeze({"coyhaique":"./coyhaique/coyhaique.js","puerto-aysen":"./puerto-aysen/puerto-aysen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
