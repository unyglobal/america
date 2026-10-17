// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-maldonado","repository":"america","path":"peru/madre-de-dios/puerto-maldonado","depth":3,"parent":"peru/madre-de-dios","children":["huerto-familiar"]});
export const childModules = Object.freeze({"huerto-familiar":"./huerto-familiar/huerto-familiar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
