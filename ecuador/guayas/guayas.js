// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guayas","repository":"america","path":"ecuador/guayas","depth":2,"parent":"ecuador","children":["balzar","daule","el-empalme","el-triunfo","eloy-alfaro","guayaquil","la-libertad","milagro","naranjal","naranjito","pedro-carbo","playas","posorja","samborondon","yaguachi-nuevo"]});
export const childModules = Object.freeze({"balzar":"./balzar/balzar.js","daule":"./daule/daule.js","el-empalme":"./el-empalme/el-empalme.js","el-triunfo":"./el-triunfo/el-triunfo.js","eloy-alfaro":"./eloy-alfaro/eloy-alfaro.js","guayaquil":"./guayaquil/guayaquil.js","la-libertad":"./la-libertad/la-libertad.js","milagro":"./milagro/milagro.js","naranjal":"./naranjal/naranjal.js","naranjito":"./naranjito/naranjito.js","pedro-carbo":"./pedro-carbo/pedro-carbo.js","playas":"./playas/playas.js","posorja":"./posorja/posorja.js","samborondon":"./samborondon/samborondon.js","yaguachi-nuevo":"./yaguachi-nuevo/yaguachi-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
