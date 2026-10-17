// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northwest-territories","repository":"america","path":"canada/northwest-territories","depth":2,"parent":"canada","children":["yellowknife"]});
export const childModules = Object.freeze({"yellowknife":"./yellowknife/yellowknife.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
