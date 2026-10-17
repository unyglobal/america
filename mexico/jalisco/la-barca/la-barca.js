// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-barca","repository":"america","path":"mexico/jalisco/la-barca","depth":3,"parent":"mexico/jalisco","children":["ejidal","el-abrevadero","la-joyita","la-trinidad","magueyera","san-isidro","santa-cecilia","santa-monica"]});
export const childModules = Object.freeze({"ejidal":"./ejidal/ejidal.js","el-abrevadero":"./el-abrevadero/el-abrevadero.js","la-joyita":"./la-joyita/la-joyita.js","la-trinidad":"./la-trinidad/la-trinidad.js","magueyera":"./magueyera/magueyera.js","san-isidro":"./san-isidro/san-isidro.js","santa-cecilia":"./santa-cecilia/santa-cecilia.js","santa-monica":"./santa-monica/santa-monica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
