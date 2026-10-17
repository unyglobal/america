// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heroica-ciudad-de-tlaxiaco","repository":"america","path":"mexico/oaxaca/heroica-ciudad-de-tlaxiaco","depth":3,"parent":"mexico/oaxaca","children":["benito-juarez","centro","italu","mixteca","morelos","quetzalcoatl","ricardo-flores-magon","san-miguel","san-nicolas"]});
export const childModules = Object.freeze({"benito-juarez":"./benito-juarez/benito-juarez.js","centro":"./centro/centro.js","italu":"./italu/italu.js","mixteca":"./mixteca/mixteca.js","morelos":"./morelos/morelos.js","quetzalcoatl":"./quetzalcoatl/quetzalcoatl.js","ricardo-flores-magon":"./ricardo-flores-magon/ricardo-flores-magon.js","san-miguel":"./san-miguel/san-miguel.js","san-nicolas":"./san-nicolas/san-nicolas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
