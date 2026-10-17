// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moeda-de-bronze-campo-da-monta","repository":"america","path":"brazil/pernambuco/jaboatao-dos-guararapes/moeda-de-bronze-campo-da-monta","depth":4,"parent":"brazil/pernambuco/jaboatao-dos-guararapes","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
