// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz-xoxocotlan","repository":"america","path":"mexico/oaxaca/santa-cruz-xoxocotlan","depth":3,"parent":"mexico/oaxaca","children":["arboledas-villas-zaachila","el-rosario","guadalupe","insurgentes","los-huamuches","palestina","paraguito"]});
export const childModules = Object.freeze({"arboledas-villas-zaachila":"./arboledas-villas-zaachila/arboledas-villas-zaachila.js","el-rosario":"./el-rosario/el-rosario.js","guadalupe":"./guadalupe/guadalupe.js","insurgentes":"./insurgentes/insurgentes.js","los-huamuches":"./los-huamuches/los-huamuches.js","palestina":"./palestina/palestina.js","paraguito":"./paraguito/paraguito.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
