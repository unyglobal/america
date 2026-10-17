// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nochistlan-de-mejia","repository":"america","path":"mexico/zacatecas/nochistlan-de-mejia","depth":3,"parent":"mexico/zacatecas","children":["bugambilias","centro","el-bajio","la-quinta","loma-bonita","quinta-los-sauces"]});
export const childModules = Object.freeze({"bugambilias":"./bugambilias/bugambilias.js","centro":"./centro/centro.js","el-bajio":"./el-bajio/el-bajio.js","la-quinta":"./la-quinta/la-quinta.js","loma-bonita":"./loma-bonita/loma-bonita.js","quinta-los-sauces":"./quinta-los-sauces/quinta-los-sauces.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
