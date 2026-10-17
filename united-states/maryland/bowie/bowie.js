// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bowie","repository":"america","path":"united-states/maryland/bowie","depth":3,"parent":"united-states/maryland","children":["essington","heather-hills","pin-oak-village"]});
export const childModules = Object.freeze({"essington":"./essington/essington.js","heather-hills":"./heather-hills/heather-hills.js","pin-oak-village":"./pin-oak-village/pin-oak-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
