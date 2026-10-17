// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nord-est","repository":"america","path":"haiti/nord-est","depth":2,"parent":"haiti","children":["terrier-rouge"]});
export const childModules = Object.freeze({"terrier-rouge":"./terrier-rouge/terrier-rouge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
