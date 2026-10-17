// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maracay","repository":"america","path":"venezuela/aragua/maracay","depth":3,"parent":"venezuela/aragua","children":["barrio-el-carmen","barrio-libertad","urbanizacion-bermudez","urbanizacion-calicanto","urbanizacion-el-toro","urbanizacion-san-isidro"]});
export const childModules = Object.freeze({"barrio-el-carmen":"./barrio-el-carmen/barrio-el-carmen.js","barrio-libertad":"./barrio-libertad/barrio-libertad.js","urbanizacion-bermudez":"./urbanizacion-bermudez/urbanizacion-bermudez.js","urbanizacion-calicanto":"./urbanizacion-calicanto/urbanizacion-calicanto.js","urbanizacion-el-toro":"./urbanizacion-el-toro/urbanizacion-el-toro.js","urbanizacion-san-isidro":"./urbanizacion-san-isidro/urbanizacion-san-isidro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
