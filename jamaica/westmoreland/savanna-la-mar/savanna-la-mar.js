// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savanna-la-mar","repository":"america","path":"jamaica/westmoreland/savanna-la-mar","depth":3,"parent":"jamaica/westmoreland","children":["dunbars-river"]});
export const childModules = Object.freeze({"dunbars-river":"./dunbars-river/dunbars-river.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
