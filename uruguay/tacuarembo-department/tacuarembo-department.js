// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tacuarembo-department","repository":"america","path":"uruguay/tacuarembo-department","depth":2,"parent":"uruguay","children":["tacuarembo"]});
export const childModules = Object.freeze({"tacuarembo":"./tacuarembo/tacuarembo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
