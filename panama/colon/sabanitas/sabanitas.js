// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabanitas","repository":"america","path":"panama/colon/sabanitas","depth":3,"parent":"panama/colon","children":["barriada-el-maestro","jabon-flecha","nuevo-colon-numero-dos","nuevo-colon-numero-uno","nuevo-mexico","residencial-irving-saladino"]});
export const childModules = Object.freeze({"barriada-el-maestro":"./barriada-el-maestro/barriada-el-maestro.js","jabon-flecha":"./jabon-flecha/jabon-flecha.js","nuevo-colon-numero-dos":"./nuevo-colon-numero-dos/nuevo-colon-numero-dos.js","nuevo-colon-numero-uno":"./nuevo-colon-numero-uno/nuevo-colon-numero-uno.js","nuevo-mexico":"./nuevo-mexico/nuevo-mexico.js","residencial-irving-saladino":"./residencial-irving-saladino/residencial-irving-saladino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
