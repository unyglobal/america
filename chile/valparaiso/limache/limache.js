// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limache","repository":"america","path":"chile/valparaiso/limache","depth":3,"parent":"chile/valparaiso","children":["limache-viejo"]});
export const childModules = Object.freeze({"limache-viejo":"./limache-viejo/limache-viejo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
