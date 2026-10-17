// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pablo","repository":"america","path":"costa-rica/heredia-province/san-pablo","depth":3,"parent":"costa-rica/heredia-province","children":["uriche"]});
export const childModules = Object.freeze({"uriche":"./uriche/uriche.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
