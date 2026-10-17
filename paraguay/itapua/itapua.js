// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itapua","repository":"america","path":"paraguay/itapua","depth":2,"parent":"paraguay","children":["encarnacion"]});
export const childModules = Object.freeze({"encarnacion":"./encarnacion/encarnacion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
