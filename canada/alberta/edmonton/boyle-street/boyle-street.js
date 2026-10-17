// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boyle-street","repository":"america","path":"canada/alberta/edmonton/boyle-street","depth":4,"parent":"canada/alberta/edmonton","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
