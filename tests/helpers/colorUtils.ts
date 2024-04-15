export function rgbToHex(rgb: string):string {
  const colorVals = rgb.slice(4, rgb.length - 1).split(',')
  let hexStr = '#'
  colorVals.forEach(val => {
    const hexVal = parseInt(val, 10).toString(16)
    hexStr+=hexVal.length===1?`0${hexVal}`:hexVal
  })
  return hexStr
}