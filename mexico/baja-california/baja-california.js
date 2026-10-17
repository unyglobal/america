// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baja-california","repository":"america","path":"mexico/baja-california","depth":2,"parent":"mexico","children":["ciudad-guadalupe-victoria","ensenada","la-joya","las-delicias","lazaro-cardenas","mexicali","porticos-de-san-antonio","rodolfo-sanchez-taboada","rosarito","santa-isabel","tecate","terrazas-del-valle","tijuana"]});
export const childModules = Object.freeze({"ciudad-guadalupe-victoria":"./ciudad-guadalupe-victoria/ciudad-guadalupe-victoria.js","ensenada":"./ensenada/ensenada.js","la-joya":"./la-joya/la-joya.js","las-delicias":"./las-delicias/las-delicias.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","mexicali":"./mexicali/mexicali.js","porticos-de-san-antonio":"./porticos-de-san-antonio/porticos-de-san-antonio.js","rodolfo-sanchez-taboada":"./rodolfo-sanchez-taboada/rodolfo-sanchez-taboada.js","rosarito":"./rosarito/rosarito.js","santa-isabel":"./santa-isabel/santa-isabel.js","tecate":"./tecate/tecate.js","terrazas-del-valle":"./terrazas-del-valle/terrazas-del-valle.js","tijuana":"./tijuana/tijuana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
