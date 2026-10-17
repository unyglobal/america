// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arraijan","repository":"america","path":"panama/panama-oeste-province/arraijan","depth":3,"parent":"panama/panama-oeste-province","children":["barriada-la-paz","el-llano","la-polvadera","las-sardinas","valle-de-las-rosas"]});
export const childModules = Object.freeze({"barriada-la-paz":"./barriada-la-paz/barriada-la-paz.js","el-llano":"./el-llano/el-llano.js","la-polvadera":"./la-polvadera/la-polvadera.js","las-sardinas":"./las-sardinas/las-sardinas.js","valle-de-las-rosas":"./valle-de-las-rosas/valle-de-las-rosas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
