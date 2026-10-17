// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-paraiso-department","repository":"america","path":"honduras/el-paraiso-department","depth":2,"parent":"honduras","children":["danli","el-paraiso","moroceli","teupasenti"]});
export const childModules = Object.freeze({"danli":"./danli/danli.js","el-paraiso":"./el-paraiso/el-paraiso.js","moroceli":"./moroceli/moroceli.js","teupasenti":"./teupasenti/teupasenti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
