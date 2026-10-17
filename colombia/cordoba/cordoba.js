// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cordoba","repository":"america","path":"colombia/cordoba","depth":2,"parent":"colombia","children":["ayapel","cerete","chinu","cienaga-de-oro","cotorra","lorica","momil","montelibano","monteria","planeta-rica","sahagun","san-antero","san-carlos","tierralta"]});
export const childModules = Object.freeze({"ayapel":"./ayapel/ayapel.js","cerete":"./cerete/cerete.js","chinu":"./chinu/chinu.js","cienaga-de-oro":"./cienaga-de-oro/cienaga-de-oro.js","cotorra":"./cotorra/cotorra.js","lorica":"./lorica/lorica.js","momil":"./momil/momil.js","montelibano":"./montelibano/montelibano.js","monteria":"./monteria/monteria.js","planeta-rica":"./planeta-rica/planeta-rica.js","sahagun":"./sahagun/sahagun.js","san-antero":"./san-antero/san-antero.js","san-carlos":"./san-carlos/san-carlos.js","tierralta":"./tierralta/tierralta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
