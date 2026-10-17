// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greater-grand-crossing","repository":"america","path":"united-states/illinois/greater-grand-crossing","depth":3,"parent":"united-states/illinois","children":["brookline","park-manor","poverty-row"]});
export const childModules = Object.freeze({"brookline":"./brookline/brookline.js","park-manor":"./park-manor/park-manor.js","poverty-row":"./poverty-row/poverty-row.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
