// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loma-bonita","repository":"america","path":"mexico/oaxaca/loma-bonita","depth":3,"parent":"mexico/oaxaca","children":["ejidal","el-conejo","juan-lopez-cruz","la-escobeta","las-delicias","las-flores","ninos-heroes","oaxaquenos-ilustres","obrera"]});
export const childModules = Object.freeze({"ejidal":"./ejidal/ejidal.js","el-conejo":"./el-conejo/el-conejo.js","juan-lopez-cruz":"./juan-lopez-cruz/juan-lopez-cruz.js","la-escobeta":"./la-escobeta/la-escobeta.js","las-delicias":"./las-delicias/las-delicias.js","las-flores":"./las-flores/las-flores.js","ninos-heroes":"./ninos-heroes/ninos-heroes.js","oaxaquenos-ilustres":"./oaxaquenos-ilustres/oaxaquenos-ilustres.js","obrera":"./obrera/obrera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
