// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pueblo-nuevo","repository":"america","path":"cuba/matanzas-province/matanzas/pueblo-nuevo","depth":4,"parent":"cuba/matanzas-province/matanzas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
