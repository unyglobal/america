// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cambridge","repository":"america","path":"canada/ontario/cambridge","depth":3,"parent":"canada/ontario","children":["downtown-cambridge"]});
export const childModules = Object.freeze({"downtown-cambridge":"./downtown-cambridge/downtown-cambridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
