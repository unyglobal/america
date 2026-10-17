// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suchitepeque","repository":"america","path":"guatemala/suchitepeque","depth":2,"parent":"guatemala","children":["chicacao","mazatenango","patulul","san-francisco-zapotitlan","san-pablo-jocopilas","santa-barbara"]});
export const childModules = Object.freeze({"chicacao":"./chicacao/chicacao.js","mazatenango":"./mazatenango/mazatenango.js","patulul":"./patulul/patulul.js","san-francisco-zapotitlan":"./san-francisco-zapotitlan/san-francisco-zapotitlan.js","san-pablo-jocopilas":"./san-pablo-jocopilas/san-pablo-jocopilas.js","santa-barbara":"./santa-barbara/santa-barbara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
