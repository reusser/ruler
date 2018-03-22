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

export const addClass = function (el, className) {
  if (!el || !className) return
  className = className.trim()
  const classList = className.split(' ')
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].includes(' ')) throw new Error('className can not contain space!')
    el.className += ` ${classList[i]}`
  }
}

export const removeClass = function (el, className) {
  if (!el || !className) return
  className = className.trim()
  const classList = className.split(' ')
  let nowClassName = ` ${el.className} `
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].includes(' ')) throw new Error('className can not contain space!')
    if (nowClassName.includes(classList[i])) nowClassName = nowClassName.replace(` ${classList[i]} `, ' ')
  }
  el.className = nowClassName.trim()
}