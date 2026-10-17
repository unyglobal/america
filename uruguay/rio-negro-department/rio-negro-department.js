// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-negro-department","repository":"america","path":"uruguay/rio-negro-department","depth":2,"parent":"uruguay","children":["fray-bentos","young"]});
export const childModules = Object.freeze({"fray-bentos":"./fray-bentos/fray-bentos.js","young":"./young/young.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
