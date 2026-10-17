// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabriel-ramos-millan","repository":"america","path":"mexico/mexico-city/iztacalco/gabriel-ramos-millan","depth":4,"parent":"mexico/mexico-city/iztacalco","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
