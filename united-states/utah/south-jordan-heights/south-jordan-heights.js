// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-jordan-heights","repository":"america","path":"united-states/utah/south-jordan-heights","depth":3,"parent":"united-states/utah","children":["bonanza-acres","cherry-hill-estates"]});
export const childModules = Object.freeze({"bonanza-acres":"./bonanza-acres/bonanza-acres.js","cherry-hill-estates":"./cherry-hill-estates/cherry-hill-estates.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
