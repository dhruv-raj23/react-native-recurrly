//t.s doesnt know how to handle image imports do this file helps to tell t.s that when it sees an import of a .png, .jpg, .jpeg, .svg, or .gif file, it should treat it as a module and allow it to be imported without throwing an error. The value of the imported image will be of type 'any', which means it can be used in the code without type checking. This is useful for projects that use images as part of their assets and want to import them directly into their TypeScript files.
//image.d.ts - d means declaration file (its related to constants folder)

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}
declare module "*.gif" {
  const value: any;
  export default value;
}
