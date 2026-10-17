// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madre-de-dios","repository":"america","path":"peru/madre-de-dios","depth":2,"parent":"peru","children":["puerto-maldonado","tambopata"]});
export const childModules = Object.freeze({"puerto-maldonado":"./puerto-maldonado/puerto-maldonado.js","tambopata":"./tambopata/tambopata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
