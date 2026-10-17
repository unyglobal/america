// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-yuba-city","repository":"america","path":"united-states/california/south-yuba-city","depth":3,"parent":"united-states/california","children":["south-yuba-city-historical"]});
export const childModules = Object.freeze({"south-yuba-city-historical":"./south-yuba-city-historical/south-yuba-city-historical.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
