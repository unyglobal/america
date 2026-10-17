// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuiaba","repository":"america","path":"brazil/mato-grosso/cuiaba","depth":3,"parent":"brazil/mato-grosso","children":["bandeirantes","centro-norte"]});
export const childModules = Object.freeze({"bandeirantes":"./bandeirantes/bandeirantes.js","centro-norte":"./centro-norte/centro-norte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
