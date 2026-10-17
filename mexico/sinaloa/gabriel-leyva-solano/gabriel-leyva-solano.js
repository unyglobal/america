// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabriel-leyva-solano","repository":"america","path":"mexico/sinaloa/gabriel-leyva-solano","depth":3,"parent":"mexico/sinaloa","children":["ampliacion-el-tajito","ampliacion-leyva-solano","el-tajito","ochenta-y-ocho"]});
export const childModules = Object.freeze({"ampliacion-el-tajito":"./ampliacion-el-tajito/ampliacion-el-tajito.js","ampliacion-leyva-solano":"./ampliacion-leyva-solano/ampliacion-leyva-solano.js","el-tajito":"./el-tajito/el-tajito.js","ochenta-y-ocho":"./ochenta-y-ocho/ochenta-y-ocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
