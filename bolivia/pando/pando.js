// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pando","repository":"america","path":"bolivia/pando","depth":2,"parent":"bolivia","children":["cobija"]});
export const childModules = Object.freeze({"cobija":"./cobija/cobija.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
