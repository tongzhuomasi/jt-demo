// 获取临时缓存
export const getCache = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}
// 设置临时缓存
export const setCache = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}
// 删除临时缓存
export const removeCache = (name) => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
// 获取本地缓存
export const getLocalCache = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
// 设置本地缓存
export const setLocalCache = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
// 删除本地缓存
export const removeLocalCache = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}
