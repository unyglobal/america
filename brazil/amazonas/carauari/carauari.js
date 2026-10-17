// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carauari","repository":"america","path":"brazil/amazonas/carauari","depth":3,"parent":"brazil/amazonas","children":["ponte-do-futuro"]});
export const childModules = Object.freeze({"ponte-do-futuro":"./ponte-do-futuro/ponte-do-futuro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
