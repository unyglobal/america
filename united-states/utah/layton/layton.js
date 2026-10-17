// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"layton","repository":"america","path":"united-states/utah/layton","depth":3,"parent":"united-states/utah","children":["brookhurst","church-street","cook","ellison","gill","glendale-gardens","hodson-estates","homeplace","jo-lu","simmons","spring-hollow","spurlock-circle","victory-park"]});
export const childModules = Object.freeze({"brookhurst":"./brookhurst/brookhurst.js","church-street":"./church-street/church-street.js","cook":"./cook/cook.js","ellison":"./ellison/ellison.js","gill":"./gill/gill.js","glendale-gardens":"./glendale-gardens/glendale-gardens.js","hodson-estates":"./hodson-estates/hodson-estates.js","homeplace":"./homeplace/homeplace.js","jo-lu":"./jo-lu/jo-lu.js","simmons":"./simmons/simmons.js","spring-hollow":"./spring-hollow/spring-hollow.js","spurlock-circle":"./spurlock-circle/spurlock-circle.js","victory-park":"./victory-park/victory-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
