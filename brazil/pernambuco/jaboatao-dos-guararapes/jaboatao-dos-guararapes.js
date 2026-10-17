// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaboatao-dos-guararapes","repository":"america","path":"brazil/pernambuco/jaboatao-dos-guararapes","depth":3,"parent":"brazil/pernambuco","children":["moeda-de-bronze-campo-da-monta"]});
export const childModules = Object.freeze({"moeda-de-bronze-campo-da-monta":"./moeda-de-bronze-campo-da-monta/moeda-de-bronze-campo-da-monta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
