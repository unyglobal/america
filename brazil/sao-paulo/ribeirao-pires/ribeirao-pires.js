// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ribeirao-pires","repository":"america","path":"brazil/sao-paulo/ribeirao-pires","depth":3,"parent":"brazil/sao-paulo","children":["vila-dionisio"]});
export const childModules = Object.freeze({"vila-dionisio":"./vila-dionisio/vila-dionisio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
