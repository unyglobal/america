// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-grullo","repository":"america","path":"mexico/jalisco/el-grullo","depth":3,"parent":"mexico/jalisco","children":["centro","colonia-del-sur","el-alamo","el-cerrito","la-quinta","oriente-primera-seccion","pocito-santo","santa-cecilia"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colonia-del-sur":"./colonia-del-sur/colonia-del-sur.js","el-alamo":"./el-alamo/el-alamo.js","el-cerrito":"./el-cerrito/el-cerrito.js","la-quinta":"./la-quinta/la-quinta.js","oriente-primera-seccion":"./oriente-primera-seccion/oriente-primera-seccion.js","pocito-santo":"./pocito-santo/pocito-santo.js","santa-cecilia":"./santa-cecilia/santa-cecilia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
