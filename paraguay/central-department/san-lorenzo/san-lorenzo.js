// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-lorenzo","repository":"america","path":"paraguay/central-department/san-lorenzo","depth":3,"parent":"paraguay/central-department","children":["san-pedro"]});
export const childModules = Object.freeze({"san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
