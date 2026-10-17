// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"florence-graham","repository":"america","path":"united-states/california/florence-graham","depth":3,"parent":"united-states/california","children":["nadeau"]});
export const childModules = Object.freeze({"nadeau":"./nadeau/nadeau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
