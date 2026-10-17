// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"havelock","repository":"america","path":"united-states/north-carolina/havelock","depth":3,"parent":"united-states/north-carolina","children":["havelock-manor","manteo"]});
export const childModules = Object.freeze({"havelock-manor":"./havelock-manor/havelock-manor.js","manteo":"./manteo/manteo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
