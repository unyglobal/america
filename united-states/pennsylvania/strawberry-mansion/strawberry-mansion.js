// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"strawberry-mansion","repository":"america","path":"united-states/pennsylvania/strawberry-mansion","depth":3,"parent":"united-states/pennsylvania","children":["brewerytown"]});
export const childModules = Object.freeze({"brewerytown":"./brewerytown/brewerytown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
