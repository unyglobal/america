// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-george-parish","repository":"america","path":"dominica/saint-george-parish","depth":2,"parent":"dominica","children":["roseau"]});
export const childModules = Object.freeze({"roseau":"./roseau/roseau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
