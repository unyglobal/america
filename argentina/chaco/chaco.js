// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chaco","repository":"america","path":"argentina/chaco","depth":2,"parent":"argentina","children":["barranqueras","charata","fontana","general-jose-de-san-martin","general-pinedo","juan-jose-castelli","las-brenas","machagai","presidencia-roque-saenz-pena","quitilipi","resistencia","tres-isletas","villa-angela"]});
export const childModules = Object.freeze({"barranqueras":"./barranqueras/barranqueras.js","charata":"./charata/charata.js","fontana":"./fontana/fontana.js","general-jose-de-san-martin":"./general-jose-de-san-martin/general-jose-de-san-martin.js","general-pinedo":"./general-pinedo/general-pinedo.js","juan-jose-castelli":"./juan-jose-castelli/juan-jose-castelli.js","las-brenas":"./las-brenas/las-brenas.js","machagai":"./machagai/machagai.js","presidencia-roque-saenz-pena":"./presidencia-roque-saenz-pena/presidencia-roque-saenz-pena.js","quitilipi":"./quitilipi/quitilipi.js","resistencia":"./resistencia/resistencia.js","tres-isletas":"./tres-isletas/tres-isletas.js","villa-angela":"./villa-angela/villa-angela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
