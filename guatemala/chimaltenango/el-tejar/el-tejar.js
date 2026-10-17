// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-tejar","repository":"america","path":"guatemala/chimaltenango/el-tejar","depth":3,"parent":"guatemala/chimaltenango","children":["colonia-santo-domingo","plan-de-rosales"]});
export const childModules = Object.freeze({"colonia-santo-domingo":"./colonia-santo-domingo/colonia-santo-domingo.js","plan-de-rosales":"./plan-de-rosales/plan-de-rosales.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
