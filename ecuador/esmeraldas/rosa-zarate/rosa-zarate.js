// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rosa-zarate","repository":"america","path":"ecuador/esmeraldas/rosa-zarate","depth":3,"parent":"ecuador/esmeraldas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
