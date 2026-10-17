// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-oro","repository":"america","path":"ecuador/el-oro","depth":2,"parent":"ecuador","children":["arenillas","guabo","huaquillas","machala","pasaje","pinas","santa-rosa"]});
export const childModules = Object.freeze({"arenillas":"./arenillas/arenillas.js","guabo":"./guabo/guabo.js","huaquillas":"./huaquillas/huaquillas.js","machala":"./machala/machala.js","pasaje":"./pasaje/pasaje.js","pinas":"./pinas/pinas.js","santa-rosa":"./santa-rosa/santa-rosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
