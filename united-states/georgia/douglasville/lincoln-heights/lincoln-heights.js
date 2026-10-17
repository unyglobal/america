// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lincoln-heights","repository":"america","path":"united-states/georgia/douglasville/lincoln-heights","depth":4,"parent":"united-states/georgia/douglasville","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
