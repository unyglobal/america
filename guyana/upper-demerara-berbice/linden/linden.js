// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linden","repository":"america","path":"guyana/upper-demerara-berbice/linden","depth":3,"parent":"guyana/upper-demerara-berbice","children":["mackenzie","wismar"]});
export const childModules = Object.freeze({"mackenzie":"./mackenzie/mackenzie.js","wismar":"./wismar/wismar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
