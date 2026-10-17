// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cotia","repository":"america","path":"brazil/sao-paulo/cotia","depth":3,"parent":"brazil/sao-paulo","children":["nova-coimbra"]});
export const childModules = Object.freeze({"nova-coimbra":"./nova-coimbra/nova-coimbra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
