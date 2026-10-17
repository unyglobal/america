// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nutana-sector","repository":"america","path":"canada/saskatchewan/nutana-sector","depth":3,"parent":"canada/saskatchewan","children":["adelaide-churchill"]});
export const childModules = Object.freeze({"adelaide-churchill":"./adelaide-churchill/adelaide-churchill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
