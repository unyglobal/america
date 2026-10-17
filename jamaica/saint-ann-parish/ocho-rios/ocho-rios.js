// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ocho-rios","repository":"america","path":"jamaica/saint-ann-parish/ocho-rios","depth":3,"parent":"jamaica/saint-ann-parish","children":["eden-bower"]});
export const childModules = Object.freeze({"eden-bower":"./eden-bower/eden-bower.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
