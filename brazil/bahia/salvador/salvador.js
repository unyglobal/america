// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salvador","repository":"america","path":"brazil/bahia/salvador","depth":3,"parent":"brazil/bahia","children":["baixa-do-formoso","baixa-do-tubo","centro-social-urbano","cosme-de-farias","matatu","santo-agostinho","vila-laura","vila-xurupita"]});
export const childModules = Object.freeze({"baixa-do-formoso":"./baixa-do-formoso/baixa-do-formoso.js","baixa-do-tubo":"./baixa-do-tubo/baixa-do-tubo.js","centro-social-urbano":"./centro-social-urbano/centro-social-urbano.js","cosme-de-farias":"./cosme-de-farias/cosme-de-farias.js","matatu":"./matatu/matatu.js","santo-agostinho":"./santo-agostinho/santo-agostinho.js","vila-laura":"./vila-laura/vila-laura.js","vila-xurupita":"./vila-xurupita/vila-xurupita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
