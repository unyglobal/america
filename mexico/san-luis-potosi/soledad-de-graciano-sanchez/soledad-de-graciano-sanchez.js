// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soledad-de-graciano-sanchez","repository":"america","path":"mexico/san-luis-potosi/soledad-de-graciano-sanchez","depth":3,"parent":"mexico/san-luis-potosi","children":["las-flores","las-higueras","los-angeles","maria-fernanda","pipila","privada-nuestra-senora-de-la-soledad","residencial-las-flores","san-gerardo","urbana-la-constancia","urbana-textil","villas-del-sol"]});
export const childModules = Object.freeze({"las-flores":"./las-flores/las-flores.js","las-higueras":"./las-higueras/las-higueras.js","los-angeles":"./los-angeles/los-angeles.js","maria-fernanda":"./maria-fernanda/maria-fernanda.js","pipila":"./pipila/pipila.js","privada-nuestra-senora-de-la-soledad":"./privada-nuestra-senora-de-la-soledad/privada-nuestra-senora-de-la-soledad.js","residencial-las-flores":"./residencial-las-flores/residencial-las-flores.js","san-gerardo":"./san-gerardo/san-gerardo.js","urbana-la-constancia":"./urbana-la-constancia/urbana-la-constancia.js","urbana-textil":"./urbana-textil/urbana-textil.js","villas-del-sol":"./villas-del-sol/villas-del-sol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
