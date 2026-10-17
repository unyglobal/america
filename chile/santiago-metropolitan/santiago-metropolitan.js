// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-metropolitan","repository":"america","path":"chile/santiago-metropolitan","depth":2,"parent":"chile","children":["batuco","buin","chicureo","colina","curacavi","el-monte","la-pintana","lampa","lo-prado","maipu","melipilla","nunoa","padre-hurtado","paine","penaflor","penalolen","puente-alto","quilicura","renca","san-bernardo","santiago","talagante"]});
export const childModules = Object.freeze({"batuco":"./batuco/batuco.js","buin":"./buin/buin.js","chicureo":"./chicureo/chicureo.js","colina":"./colina/colina.js","curacavi":"./curacavi/curacavi.js","el-monte":"./el-monte/el-monte.js","la-pintana":"./la-pintana/la-pintana.js","lampa":"./lampa/lampa.js","lo-prado":"./lo-prado/lo-prado.js","maipu":"./maipu/maipu.js","melipilla":"./melipilla/melipilla.js","nunoa":"./nunoa/nunoa.js","padre-hurtado":"./padre-hurtado/padre-hurtado.js","paine":"./paine/paine.js","penaflor":"./penaflor/penaflor.js","penalolen":"./penalolen/penalolen.js","puente-alto":"./puente-alto/puente-alto.js","quilicura":"./quilicura/quilicura.js","renca":"./renca/renca.js","san-bernardo":"./san-bernardo/san-bernardo.js","santiago":"./santiago/santiago.js","talagante":"./talagante/talagante.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
