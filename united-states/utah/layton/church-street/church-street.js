// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"church-street","repository":"america","path":"united-states/utah/layton/church-street","depth":4,"parent":"united-states/utah/layton","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
