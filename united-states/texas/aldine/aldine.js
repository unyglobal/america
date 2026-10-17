// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aldine","repository":"america","path":"united-states/texas/aldine","depth":3,"parent":"united-states/texas","children":["aldine-meadows"]});
export const childModules = Object.freeze({"aldine-meadows":"./aldine-meadows/aldine-meadows.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
