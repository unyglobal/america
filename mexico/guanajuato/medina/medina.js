// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medina","repository":"america","path":"mexico/guanajuato/medina","depth":3,"parent":"mexico/guanajuato","children":["canada-de-alfaro","jardines-de-maravillas","la-huerta","loma-de-los-naranjos","maravillas","maravillas-ii","predio-san-bernardo-norte"]});
export const childModules = Object.freeze({"canada-de-alfaro":"./canada-de-alfaro/canada-de-alfaro.js","jardines-de-maravillas":"./jardines-de-maravillas/jardines-de-maravillas.js","la-huerta":"./la-huerta/la-huerta.js","loma-de-los-naranjos":"./loma-de-los-naranjos/loma-de-los-naranjos.js","maravillas":"./maravillas/maravillas.js","maravillas-ii":"./maravillas-ii/maravillas-ii.js","predio-san-bernardo-norte":"./predio-san-bernardo-norte/predio-san-bernardo-norte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
