// 判断是否威外部资源
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
