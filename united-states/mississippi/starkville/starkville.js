// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"starkville","repository":"america","path":"united-states/mississippi/starkville","depth":3,"parent":"united-states/mississippi","children":["pecan-acres","pleasant-acres","southdale","stonegate","wellborn-subdivision"]});
export const childModules = Object.freeze({"pecan-acres":"./pecan-acres/pecan-acres.js","pleasant-acres":"./pleasant-acres/pleasant-acres.js","southdale":"./southdale/southdale.js","stonegate":"./stonegate/stonegate.js","wellborn-subdivision":"./wellborn-subdivision/wellborn-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
