// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manaus","repository":"america","path":"brazil/amazonas/manaus","depth":3,"parent":"brazil/amazonas","children":["igarape-da-cachoeira-sao-jorge"]});
export const childModules = Object.freeze({"igarape-da-cachoeira-sao-jorge":"./igarape-da-cachoeira-sao-jorge/igarape-da-cachoeira-sao-jorge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
