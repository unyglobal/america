// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greater-napanee","repository":"america","path":"canada/ontario/greater-napanee","depth":3,"parent":"canada/ontario","children":["napanee-downtown","skatepark"]});
export const childModules = Object.freeze({"napanee-downtown":"./napanee-downtown/napanee-downtown.js","skatepark":"./skatepark/skatepark.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
