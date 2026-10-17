// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rocha-department","repository":"america","path":"uruguay/rocha-department","depth":2,"parent":"uruguay","children":["rocha"]});
export const childModules = Object.freeze({"rocha":"./rocha/rocha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
