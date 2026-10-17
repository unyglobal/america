// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mid-city","repository":"america","path":"united-states/california/mid-city","depth":3,"parent":"united-states/california","children":["picfair-village"]});
export const childModules = Object.freeze({"picfair-village":"./picfair-village/picfair-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
