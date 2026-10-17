// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matanzas","repository":"america","path":"cuba/matanzas-province/matanzas","depth":3,"parent":"cuba/matanzas-province","children":["pueblo-nuevo"]});
export const childModules = Object.freeze({"pueblo-nuevo":"./pueblo-nuevo/pueblo-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
