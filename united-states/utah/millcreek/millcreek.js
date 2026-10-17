// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"millcreek","repository":"america","path":"united-states/utah/millcreek","depth":3,"parent":"united-states/utah","children":["cleeos-acres","davis","ewell","farm-hill","hill-acres"]});
export const childModules = Object.freeze({"cleeos-acres":"./cleeos-acres/cleeos-acres.js","davis":"./davis/davis.js","ewell":"./ewell/ewell.js","farm-hill":"./farm-hill/farm-hill.js","hill-acres":"./hill-acres/hill-acres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
