// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morrisania","repository":"america","path":"united-states/new-york/morrisania","depth":3,"parent":"united-states/new-york","children":["daniel-webster-houses","forest-houses"]});
export const childModules = Object.freeze({"daniel-webster-houses":"./daniel-webster-houses/daniel-webster-houses.js","forest-houses":"./forest-houses/forest-houses.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
