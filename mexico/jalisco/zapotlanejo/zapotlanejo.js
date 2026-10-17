// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zapotlanejo","repository":"america","path":"mexico/jalisco/zapotlanejo","depth":3,"parent":"mexico/jalisco","children":["bellavista","centro","huisquilco","jardines-del-paraiso","loma-dorada","lomas-de-huisquilco","lomas-de-san-martin","presidentes","sagrado-corazon","san-felipe","san-francisco","santa-cecilia","santa-tere","santuario","tabachines"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","centro":"./centro/centro.js","huisquilco":"./huisquilco/huisquilco.js","jardines-del-paraiso":"./jardines-del-paraiso/jardines-del-paraiso.js","loma-dorada":"./loma-dorada/loma-dorada.js","lomas-de-huisquilco":"./lomas-de-huisquilco/lomas-de-huisquilco.js","lomas-de-san-martin":"./lomas-de-san-martin/lomas-de-san-martin.js","presidentes":"./presidentes/presidentes.js","sagrado-corazon":"./sagrado-corazon/sagrado-corazon.js","san-felipe":"./san-felipe/san-felipe.js","san-francisco":"./san-francisco/san-francisco.js","santa-cecilia":"./santa-cecilia/santa-cecilia.js","santa-tere":"./santa-tere/santa-tere.js","santuario":"./santuario/santuario.js","tabachines":"./tabachines/tabachines.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
