// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oregon","repository":"america","path":"united-states/oregon","depth":2,"parent":"united-states","children":["oregon-city","pendleton","roseburg","the-dalles","tigard","troutdale","tualatin","west-linn","wilsonville","woodburn"]});
export const childModules = Object.freeze({"oregon-city":"./oregon-city/oregon-city.js","pendleton":"./pendleton/pendleton.js","roseburg":"./roseburg/roseburg.js","the-dalles":"./the-dalles/the-dalles.js","tigard":"./tigard/tigard.js","troutdale":"./troutdale/troutdale.js","tualatin":"./tualatin/tualatin.js","west-linn":"./west-linn/west-linn.js","wilsonville":"./wilsonville/wilsonville.js","woodburn":"./woodburn/woodburn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
