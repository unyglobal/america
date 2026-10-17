// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coquimbo-region","repository":"america","path":"chile/coquimbo-region","depth":2,"parent":"chile","children":["coquimbo","illapel","la-serena","los-vilos","ovalle","vicuna"]});
export const childModules = Object.freeze({"coquimbo":"./coquimbo/coquimbo.js","illapel":"./illapel/illapel.js","la-serena":"./la-serena/la-serena.js","los-vilos":"./los-vilos/los-vilos.js","ovalle":"./ovalle/ovalle.js","vicuna":"./vicuna/vicuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
