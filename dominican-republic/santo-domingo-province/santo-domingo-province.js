// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-domingo-province","repository":"america","path":"dominican-republic/santo-domingo-province","depth":2,"parent":"dominican-republic","children":["boca-chica","santo-domingo-este","santo-domingo-oeste"]});
export const childModules = Object.freeze({"boca-chica":"./boca-chica/boca-chica.js","santo-domingo-este":"./santo-domingo-este/santo-domingo-este.js","santo-domingo-oeste":"./santo-domingo-oeste/santo-domingo-oeste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
