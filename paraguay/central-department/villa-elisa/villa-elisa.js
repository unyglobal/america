// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-elisa","repository":"america","path":"paraguay/central-department/villa-elisa","depth":3,"parent":"paraguay/central-department","children":["sol-de-america"]});
export const childModules = Object.freeze({"sol-de-america":"./sol-de-america/sol-de-america.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
