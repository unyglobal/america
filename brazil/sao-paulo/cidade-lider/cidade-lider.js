// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cidade-lider","repository":"america","path":"brazil/sao-paulo/cidade-lider","depth":3,"parent":"brazil/sao-paulo","children":["parque-savoy"]});
export const childModules = Object.freeze({"parque-savoy":"./parque-savoy/parque-savoy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
