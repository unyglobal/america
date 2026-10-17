// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-leonard","repository":"america","path":"canada/quebec/saint-leonard","depth":3,"parent":"canada/quebec","children":["grande-prairie"]});
export const childModules = Object.freeze({"grande-prairie":"./grande-prairie/grande-prairie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
