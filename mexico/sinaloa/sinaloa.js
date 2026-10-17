// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sinaloa","repository":"america","path":"mexico/sinaloa","depth":2,"parent":"mexico","children":["costa-rica","culiacan","el-rosario","escuinapa-de-hidalgo","gabriel-leyva-solano","guamuchil","guasave","juan-jose-rios","la-cruz","licenciado-benito-juarez","los-mochis","mazatlan","navolato"]});
export const childModules = Object.freeze({"costa-rica":"./costa-rica/costa-rica.js","culiacan":"./culiacan/culiacan.js","el-rosario":"./el-rosario/el-rosario.js","escuinapa-de-hidalgo":"./escuinapa-de-hidalgo/escuinapa-de-hidalgo.js","gabriel-leyva-solano":"./gabriel-leyva-solano/gabriel-leyva-solano.js","guamuchil":"./guamuchil/guamuchil.js","guasave":"./guasave/guasave.js","juan-jose-rios":"./juan-jose-rios/juan-jose-rios.js","la-cruz":"./la-cruz/la-cruz.js","licenciado-benito-juarez":"./licenciado-benito-juarez/licenciado-benito-juarez.js","los-mochis":"./los-mochis/los-mochis.js","mazatlan":"./mazatlan/mazatlan.js","navolato":"./navolato/navolato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
