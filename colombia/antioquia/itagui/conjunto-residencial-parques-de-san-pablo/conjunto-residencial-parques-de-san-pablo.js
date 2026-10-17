// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"conjunto-residencial-parques-de-san-pablo","repository":"america","path":"colombia/antioquia/itagui/conjunto-residencial-parques-de-san-pablo","depth":4,"parent":"colombia/antioquia/itagui","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
