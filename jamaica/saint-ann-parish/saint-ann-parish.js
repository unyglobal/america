// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-ann-parish","repository":"america","path":"jamaica/saint-ann-parish","depth":2,"parent":"jamaica","children":["ocho-rios"]});
export const childModules = Object.freeze({"ocho-rios":"./ocho-rios/ocho-rios.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
