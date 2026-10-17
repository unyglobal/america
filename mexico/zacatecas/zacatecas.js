// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zacatecas","repository":"america","path":"mexico/zacatecas","depth":2,"parent":"mexico","children":["fresnillo","jerez-de-garcia-salinas","loreto","nochistlan-de-mejia","rio-grande","sombrerete","tlaltenango-de-sanchez-roman","victor-rosales"]});
export const childModules = Object.freeze({"fresnillo":"./fresnillo/fresnillo.js","jerez-de-garcia-salinas":"./jerez-de-garcia-salinas/jerez-de-garcia-salinas.js","loreto":"./loreto/loreto.js","nochistlan-de-mejia":"./nochistlan-de-mejia/nochistlan-de-mejia.js","rio-grande":"./rio-grande/rio-grande.js","sombrerete":"./sombrerete/sombrerete.js","tlaltenango-de-sanchez-roman":"./tlaltenango-de-sanchez-roman/tlaltenango-de-sanchez-roman.js","victor-rosales":"./victor-rosales/victor-rosales.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
