// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nacional","repository":"america","path":"dominican-republic/nacional","depth":2,"parent":"dominican-republic","children":["bella-vista","ciudad-nueva","cristo-rey","santo-domingo","villa-consuelo","villa-francisca"]});
export const childModules = Object.freeze({"bella-vista":"./bella-vista/bella-vista.js","ciudad-nueva":"./ciudad-nueva/ciudad-nueva.js","cristo-rey":"./cristo-rey/cristo-rey.js","santo-domingo":"./santo-domingo/santo-domingo.js","villa-consuelo":"./villa-consuelo/villa-consuelo.js","villa-francisca":"./villa-francisca/villa-francisca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
