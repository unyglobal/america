// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"choco","repository":"america","path":"colombia/choco","depth":2,"parent":"colombia","children":["pizarro","quibdo","tado"]});
export const childModules = Object.freeze({"pizarro":"./pizarro/pizarro.js","quibdo":"./quibdo/quibdo.js","tado":"./tado/tado.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
