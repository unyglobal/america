// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hidalgo","repository":"america","path":"mexico/hidalgo","depth":2,"parent":"mexico","children":["huejutla-de-reyes","ixmiquilpan","la-providencia-siglo-xxi","mixquiahuala-de-juarez","pachuca-de-soto","progreso-de-obregon","santiago-tulantepec","tepeapulco","tepeji-del-rio-de-ocampo","tizayuca","tula-de-allende","tulancingo","zacualtipan"]});
export const childModules = Object.freeze({"huejutla-de-reyes":"./huejutla-de-reyes/huejutla-de-reyes.js","ixmiquilpan":"./ixmiquilpan/ixmiquilpan.js","la-providencia-siglo-xxi":"./la-providencia-siglo-xxi/la-providencia-siglo-xxi.js","mixquiahuala-de-juarez":"./mixquiahuala-de-juarez/mixquiahuala-de-juarez.js","pachuca-de-soto":"./pachuca-de-soto/pachuca-de-soto.js","progreso-de-obregon":"./progreso-de-obregon/progreso-de-obregon.js","santiago-tulantepec":"./santiago-tulantepec/santiago-tulantepec.js","tepeapulco":"./tepeapulco/tepeapulco.js","tepeji-del-rio-de-ocampo":"./tepeji-del-rio-de-ocampo/tepeji-del-rio-de-ocampo.js","tizayuca":"./tizayuca/tizayuca.js","tula-de-allende":"./tula-de-allende/tula-de-allende.js","tulancingo":"./tulancingo/tulancingo.js","zacualtipan":"./zacualtipan/zacualtipan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
