
 export function capitalizeNames(names) {
  return names.map(name => {
    const lo = name.toLowerCase();
    return lo.charAt(0).toUpperCase() + lo.slice(1); 
  });
}
console.log(capitalizeNames(["john", "DANIEL", "jinGleHeimer", "schmidt"]));
