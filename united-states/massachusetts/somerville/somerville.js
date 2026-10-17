// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"somerville","repository":"america","path":"united-states/massachusetts/somerville","depth":3,"parent":"united-states/massachusetts","children":["sommerville"]});
export const childModules = Object.freeze({"sommerville":"./sommerville/sommerville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
