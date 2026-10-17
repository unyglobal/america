// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hacienda-santa-fe","repository":"america","path":"mexico/jalisco/hacienda-santa-fe","depth":3,"parent":"mexico/jalisco","children":["las-luces"]});
export const childModules = Object.freeze({"las-luces":"./las-luces/las-luces.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
