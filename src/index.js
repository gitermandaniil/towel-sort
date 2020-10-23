module.exports = (matrix = []) => {
  return matrix.flatMap((row, index) => {
    return index % 2 === 0 ? row : row.reverse()
  })
}
