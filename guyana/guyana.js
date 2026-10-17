// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guyana","repository":"america","path":"guyana","depth":1,"parent":"","children":["demerara-mahaica","east-berbice-corentyne","upper-demerara-berbice"]});
export const childModules = Object.freeze({"demerara-mahaica":"./demerara-mahaica/demerara-mahaica.js","east-berbice-corentyne":"./east-berbice-corentyne/east-berbice-corentyne.js","upper-demerara-berbice":"./upper-demerara-berbice/upper-demerara-berbice.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
