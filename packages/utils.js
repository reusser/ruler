export const findParentComponent = function (ctx, componentName) {
  let componentNames = Array.isArray(componentName) ? componentName : [componentName]
  let parent = ctx.$parent
  let name = parent.$options.name
  while (parent && componentNames.indexOf(name) < 0) {
    parent = parent.$parent
    name = parent ? parent.$options.name : ''
  }
  return parent
}

export const findParentComponents = function (ctx, componentName) {
  let components = []
  let parent = ctx.$parent
  while (parent) {
    componentName === parent.$options.name ? components.push(parent) : ''
    parent = parent.$parent
  }
  return components
}