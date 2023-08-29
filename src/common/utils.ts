export const getXYPosition = ({
    index = 0,
    blockCountInRow = 0,
    blockWidth = 0,
    blockHeight = 0

}) => {
    const itemColumnPosition = (index) % blockCountInRow
    const itemRowPosition = Math.floor(index / blockCountInRow)
    const xPosition = itemColumnPosition * blockWidth
    const yPosition = itemRowPosition * blockHeight
  
    return {
      xPosition,
      yPosition
    }
}