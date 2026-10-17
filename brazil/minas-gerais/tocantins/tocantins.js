// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tocantins","repository":"america","path":"brazil/minas-gerais/tocantins","depth":3,"parent":"brazil/minas-gerais","children":["araguaina","araguatins","colinas-do-tocantins","dianopolis","formoso-do-araguaia","guarai","gurupi","miracema-do-tocantins","paraiso-do-tocantins","porto-nacional","tocantinopolis"]});
export const childModules = Object.freeze({"araguaina":"./araguaina/araguaina.js","araguatins":"./araguatins/araguatins.js","colinas-do-tocantins":"./colinas-do-tocantins/colinas-do-tocantins.js","dianopolis":"./dianopolis/dianopolis.js","formoso-do-araguaia":"./formoso-do-araguaia/formoso-do-araguaia.js","guarai":"./guarai/guarai.js","gurupi":"./gurupi/gurupi.js","miracema-do-tocantins":"./miracema-do-tocantins/miracema-do-tocantins.js","paraiso-do-tocantins":"./paraiso-do-tocantins/paraiso-do-tocantins.js","porto-nacional":"./porto-nacional/porto-nacional.js","tocantinopolis":"./tocantinopolis/tocantinopolis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
