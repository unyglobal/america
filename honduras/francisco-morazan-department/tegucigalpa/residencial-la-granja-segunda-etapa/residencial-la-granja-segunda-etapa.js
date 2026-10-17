// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"residencial-la-granja-segunda-etapa","repository":"america","path":"honduras/francisco-morazan-department/tegucigalpa/residencial-la-granja-segunda-etapa","depth":4,"parent":"honduras/francisco-morazan-department/tegucigalpa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
