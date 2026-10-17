// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reynosa","repository":"america","path":"mexico/tamaulipas/reynosa","depth":3,"parent":"mexico/tamaulipas","children":["altamira","anzalduas","bella-vista","el-maestro","ferrocarril-zona-centro","flovigar","longoria","rodriguez","tamaulipas"]});
export const childModules = Object.freeze({"altamira":"./altamira/altamira.js","anzalduas":"./anzalduas/anzalduas.js","bella-vista":"./bella-vista/bella-vista.js","el-maestro":"./el-maestro/el-maestro.js","ferrocarril-zona-centro":"./ferrocarril-zona-centro/ferrocarril-zona-centro.js","flovigar":"./flovigar/flovigar.js","longoria":"./longoria/longoria.js","rodriguez":"./rodriguez/rodriguez.js","tamaulipas":"./tamaulipas/tamaulipas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
