// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tolima-department","repository":"america","path":"colombia/tolima-department","depth":2,"parent":"colombia","children":["anaime","chaparral","espinal","flandes","fresno","guamo","honda","ibague","lerida","libano","melgar","natagaima","padua","payande","planadas","purificacion","rioblanco","rovira","san-sebastian-de-mariquita"]});
export const childModules = Object.freeze({"anaime":"./anaime/anaime.js","chaparral":"./chaparral/chaparral.js","espinal":"./espinal/espinal.js","flandes":"./flandes/flandes.js","fresno":"./fresno/fresno.js","guamo":"./guamo/guamo.js","honda":"./honda/honda.js","ibague":"./ibague/ibague.js","lerida":"./lerida/lerida.js","libano":"./libano/libano.js","melgar":"./melgar/melgar.js","natagaima":"./natagaima/natagaima.js","padua":"./padua/padua.js","payande":"./payande/payande.js","planadas":"./planadas/planadas.js","purificacion":"./purificacion/purificacion.js","rioblanco":"./rioblanco/rioblanco.js","rovira":"./rovira/rovira.js","san-sebastian-de-mariquita":"./san-sebastian-de-mariquita/san-sebastian-de-mariquita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
