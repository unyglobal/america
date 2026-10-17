// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-estrella","repository":"america","path":"colombia/antioquia/la-estrella","depth":3,"parent":"colombia/antioquia","children":["barrio-san-jose","el-pedrero"]});
export const childModules = Object.freeze({"barrio-san-jose":"./barrio-san-jose/barrio-san-jose.js","el-pedrero":"./el-pedrero/el-pedrero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
