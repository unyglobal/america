// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-antonio","repository":"america","path":"paraguay/central-department/san-antonio","depth":3,"parent":"paraguay/central-department","children":["acosta-nu","puerta-del-sol"]});
export const childModules = Object.freeze({"acosta-nu":"./acosta-nu/acosta-nu.js","puerta-del-sol":"./puerta-del-sol/puerta-del-sol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
