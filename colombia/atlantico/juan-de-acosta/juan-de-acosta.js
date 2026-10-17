// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"juan-de-acosta","repository":"america","path":"colombia/atlantico/juan-de-acosta","depth":3,"parent":"colombia/atlantico","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
