// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"artemisa","repository":"america","path":"cuba/artemisa","depth":2,"parent":"cuba","children":["alquizar","bahia-honda","bauta","guanajay","guira-de-melena","mariel","san-antonio-de-los-banos","san-cristobal"]});
export const childModules = Object.freeze({"alquizar":"./alquizar/alquizar.js","bahia-honda":"./bahia-honda/bahia-honda.js","bauta":"./bauta/bauta.js","guanajay":"./guanajay/guanajay.js","guira-de-melena":"./guira-de-melena/guira-de-melena.js","mariel":"./mariel/mariel.js","san-antonio-de-los-banos":"./san-antonio-de-los-banos/san-antonio-de-los-banos.js","san-cristobal":"./san-cristobal/san-cristobal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
