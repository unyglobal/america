// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huila-department","repository":"america","path":"colombia/huila-department","depth":2,"parent":"colombia","children":["campoalegre","garzon","gigante","guadalupe","isnos","la-plata","neiva","pitalito","rivera","tarqui"]});
export const childModules = Object.freeze({"campoalegre":"./campoalegre/campoalegre.js","garzon":"./garzon/garzon.js","gigante":"./gigante/gigante.js","guadalupe":"./guadalupe/guadalupe.js","isnos":"./isnos/isnos.js","la-plata":"./la-plata/la-plata.js","neiva":"./neiva/neiva.js","pitalito":"./pitalito/pitalito.js","rivera":"./rivera/rivera.js","tarqui":"./tarqui/tarqui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
