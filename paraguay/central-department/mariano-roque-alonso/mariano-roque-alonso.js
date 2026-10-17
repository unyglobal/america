// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mariano-roque-alonso","repository":"america","path":"paraguay/central-department/mariano-roque-alonso","depth":3,"parent":"paraguay/central-department","children":["central"]});
export const childModules = Object.freeze({"central":"./central/central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
