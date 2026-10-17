// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiguayante","repository":"america","path":"chile/biobio/chiguayante","depth":3,"parent":"chile/biobio","children":["la-leonera"]});
export const childModules = Object.freeze({"la-leonera":"./la-leonera/la-leonera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
