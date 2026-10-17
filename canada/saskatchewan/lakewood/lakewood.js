// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lakewood","repository":"america","path":"canada/saskatchewan/lakewood","depth":3,"parent":"canada/saskatchewan","children":["wildwood"]});
export const childModules = Object.freeze({"wildwood":"./wildwood/wildwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
