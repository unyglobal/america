// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-ana-department","repository":"america","path":"el-salvador/santa-ana-department","depth":2,"parent":"el-salvador","children":["chalchuapa","metapan","santa-ana"]});
export const childModules = Object.freeze({"chalchuapa":"./chalchuapa/chalchuapa.js","metapan":"./metapan/metapan.js","santa-ana":"./santa-ana/santa-ana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
