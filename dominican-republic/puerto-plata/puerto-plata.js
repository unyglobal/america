// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-plata","repository":"america","path":"dominican-republic/puerto-plata","depth":2,"parent":"dominican-republic","children":["monte-llano","rio-grande"]});
export const childModules = Object.freeze({"monte-llano":"./monte-llano/monte-llano.js","rio-grande":"./rio-grande/rio-grande.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
