// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tarija","repository":"america","path":"bolivia/tarija-department/tarija","depth":3,"parent":"bolivia/tarija-department","children":["la-terminal","las-pandosas","virgen-de-fatima"]});
export const childModules = Object.freeze({"la-terminal":"./la-terminal/la-terminal.js","las-pandosas":"./las-pandosas/las-pandosas.js","virgen-de-fatima":"./virgen-de-fatima/virgen-de-fatima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
