// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ponta-grossa","repository":"america","path":"brazil/parana/ponta-grossa","depth":3,"parent":"brazil/parana","children":["vila-leomar"]});
export const childModules = Object.freeze({"vila-leomar":"./vila-leomar/vila-leomar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
