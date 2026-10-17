// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mayabeque","repository":"america","path":"cuba/mayabeque","depth":2,"parent":"cuba","children":["bejucal","guines","jaruco","la-salud","madruga","san-jose-de-las-lajas","santa-cruz-del-norte"]});
export const childModules = Object.freeze({"bejucal":"./bejucal/bejucal.js","guines":"./guines/guines.js","jaruco":"./jaruco/jaruco.js","la-salud":"./la-salud/la-salud.js","madruga":"./madruga/madruga.js","san-jose-de-las-lajas":"./san-jose-de-las-lajas/san-jose-de-las-lajas.js","santa-cruz-del-norte":"./santa-cruz-del-norte/santa-cruz-del-norte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
