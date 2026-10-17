// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salta","repository":"america","path":"argentina/salta","depth":2,"parent":"argentina","children":["cafayate","embarcacion","general-guemes","general-mosconi","joaquin-v-gonzalez","pichanal","profesor-salvador-mazza","rosario-de-la-frontera","rosario-de-lerma","san-jose-de-los-cerrillos","san-jose-de-metan","san-ramon-de-la-nueva-oran","tartagal"]});
export const childModules = Object.freeze({"cafayate":"./cafayate/cafayate.js","embarcacion":"./embarcacion/embarcacion.js","general-guemes":"./general-guemes/general-guemes.js","general-mosconi":"./general-mosconi/general-mosconi.js","joaquin-v-gonzalez":"./joaquin-v-gonzalez/joaquin-v-gonzalez.js","pichanal":"./pichanal/pichanal.js","profesor-salvador-mazza":"./profesor-salvador-mazza/profesor-salvador-mazza.js","rosario-de-la-frontera":"./rosario-de-la-frontera/rosario-de-la-frontera.js","rosario-de-lerma":"./rosario-de-lerma/rosario-de-lerma.js","san-jose-de-los-cerrillos":"./san-jose-de-los-cerrillos/san-jose-de-los-cerrillos.js","san-jose-de-metan":"./san-jose-de-metan/san-jose-de-metan.js","san-ramon-de-la-nueva-oran":"./san-ramon-de-la-nueva-oran/san-ramon-de-la-nueva-oran.js","tartagal":"./tartagal/tartagal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
