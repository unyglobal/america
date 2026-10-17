// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guarico","repository":"america","path":"venezuela/guarico","depth":2,"parent":"venezuela","children":["altagracia-de-orituco","calabozo","camaguan","chaguaramas","el-sombrero","san-juan-de-los-morros","tucupido","valle-de-la-pascua","zaraza"]});
export const childModules = Object.freeze({"altagracia-de-orituco":"./altagracia-de-orituco/altagracia-de-orituco.js","calabozo":"./calabozo/calabozo.js","camaguan":"./camaguan/camaguan.js","chaguaramas":"./chaguaramas/chaguaramas.js","el-sombrero":"./el-sombrero/el-sombrero.js","san-juan-de-los-morros":"./san-juan-de-los-morros/san-juan-de-los-morros.js","tucupido":"./tucupido/tucupido.js","valle-de-la-pascua":"./valle-de-la-pascua/valle-de-la-pascua.js","zaraza":"./zaraza/zaraza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
