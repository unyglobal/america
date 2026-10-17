// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"embu-guacu","repository":"america","path":"brazil/sao-paulo/embu-guacu","depth":3,"parent":"brazil/sao-paulo","children":["jardim-emilia"]});
export const childModules = Object.freeze({"jardim-emilia":"./jardim-emilia/jardim-emilia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
