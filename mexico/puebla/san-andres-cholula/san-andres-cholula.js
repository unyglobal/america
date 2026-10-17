// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-andres-cholula","repository":"america","path":"mexico/puebla/san-andres-cholula","depth":3,"parent":"mexico/puebla","children":["la-aureola","la-santisima","las-americas","lumaha","san-andresito","santa-maria","santa-maria-cuaco","santo-nino","xico-tenco","zona-de-profesores"]});
export const childModules = Object.freeze({"la-aureola":"./la-aureola/la-aureola.js","la-santisima":"./la-santisima/la-santisima.js","las-americas":"./las-americas/las-americas.js","lumaha":"./lumaha/lumaha.js","san-andresito":"./san-andresito/san-andresito.js","santa-maria":"./santa-maria/santa-maria.js","santa-maria-cuaco":"./santa-maria-cuaco/santa-maria-cuaco.js","santo-nino":"./santo-nino/santo-nino.js","xico-tenco":"./xico-tenco/xico-tenco.js","zona-de-profesores":"./zona-de-profesores/zona-de-profesores.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
