// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolivar","repository":"america","path":"colombia/bolivar","depth":2,"parent":"colombia","children":["arjona","cartagena","el-carmen-de-bolivar","magangue","mahates","maria-la-baja","mompos","pinillos","san-estanislao","san-jacinto","san-juan-nepomuceno","san-pablo","santa-rosa","simiti","tiquisio","turbaco"]});
export const childModules = Object.freeze({"arjona":"./arjona/arjona.js","cartagena":"./cartagena/cartagena.js","el-carmen-de-bolivar":"./el-carmen-de-bolivar/el-carmen-de-bolivar.js","magangue":"./magangue/magangue.js","mahates":"./mahates/mahates.js","maria-la-baja":"./maria-la-baja/maria-la-baja.js","mompos":"./mompos/mompos.js","pinillos":"./pinillos/pinillos.js","san-estanislao":"./san-estanislao/san-estanislao.js","san-jacinto":"./san-jacinto/san-jacinto.js","san-juan-nepomuceno":"./san-juan-nepomuceno/san-juan-nepomuceno.js","san-pablo":"./san-pablo/san-pablo.js","santa-rosa":"./santa-rosa/santa-rosa.js","simiti":"./simiti/simiti.js","tiquisio":"./tiquisio/tiquisio.js","turbaco":"./turbaco/turbaco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
