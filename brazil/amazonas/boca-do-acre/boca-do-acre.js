// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boca-do-acre","repository":"america","path":"brazil/amazonas/boca-do-acre","depth":3,"parent":"brazil/amazonas","children":["rabo-da-cobra"]});
export const childModules = Object.freeze({"rabo-da-cobra":"./rabo-da-cobra/rabo-da-cobra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
