// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paita","repository":"america","path":"peru/piura/paita","depth":3,"parent":"peru/piura","children":["puerto"]});
export const childModules = Object.freeze({"puerto":"./puerto/puerto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
