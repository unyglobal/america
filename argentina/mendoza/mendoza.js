// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mendoza","repository":"america","path":"argentina/mendoza","depth":2,"parent":"argentina","children":["ciudad-de-las-heras","general-alvear","malargue","perdriel","rivadavia","rodeo-del-medio","san-martin","san-rafael","tunuyan","tupungato"]});
export const childModules = Object.freeze({"ciudad-de-las-heras":"./ciudad-de-las-heras/ciudad-de-las-heras.js","general-alvear":"./general-alvear/general-alvear.js","malargue":"./malargue/malargue.js","perdriel":"./perdriel/perdriel.js","rivadavia":"./rivadavia/rivadavia.js","rodeo-del-medio":"./rodeo-del-medio/rodeo-del-medio.js","san-martin":"./san-martin/san-martin.js","san-rafael":"./san-rafael/san-rafael.js","tunuyan":"./tunuyan/tunuyan.js","tupungato":"./tupungato/tupungato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
