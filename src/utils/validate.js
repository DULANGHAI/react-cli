/**
 * 模版阶段，校验用户名
 * @param {string} str 
 * @returns {boolean}
 */
export function validUsername(str) {
  const validMap = ['admin', 'editor'];
  return validMap.indexOf(str.trim()) >= 0;
}
