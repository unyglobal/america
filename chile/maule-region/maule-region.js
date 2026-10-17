// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maule-region","repository":"america","path":"chile/maule-region","depth":2,"parent":"chile","children":["cauquenes","colbun","constitucion","curico","linares","longavi","molina","parral","sagrada-familia","san-clemente","san-javier","talca"]});
export const childModules = Object.freeze({"cauquenes":"./cauquenes/cauquenes.js","colbun":"./colbun/colbun.js","constitucion":"./constitucion/constitucion.js","curico":"./curico/curico.js","linares":"./linares/linares.js","longavi":"./longavi/longavi.js","molina":"./molina/molina.js","parral":"./parral/parral.js","sagrada-familia":"./sagrada-familia/sagrada-familia.js","san-clemente":"./san-clemente/san-clemente.js","san-javier":"./san-javier/san-javier.js","talca":"./talca/talca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
