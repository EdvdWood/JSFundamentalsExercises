const ftoc = function(temp) {
  return Math.round(((temp - 32)/1.8)*10)/10

}

const ctof = function(temp) {
  return Math.round((temp*1.8+32)*10)/10
}

module.exports = {
  ftoc,
  ctof
}
