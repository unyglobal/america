// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"remedios-de-escalada-de-san-martin","repository":"america","path":"argentina/buenos-aires/remedios-de-escalada-de-san-martin","depth":3,"parent":"argentina/buenos-aires","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
