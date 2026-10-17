// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ano-de-juarez","repository":"america","path":"mexico/coahuila/ramos-arizpe/ano-de-juarez","depth":4,"parent":"mexico/coahuila/ramos-arizpe","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
