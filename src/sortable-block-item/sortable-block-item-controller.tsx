import { runOnJS, useSharedValue } from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";
import { getXYPosition } from '../common/utils';
import { screenWidth } from '../common/metric';

const useSortableBlockItemController = ({
    item,
    index,
    blockCountInRow,
    blockWidth,
    blockHeight,
    totalColumnCount,
    onValueUpdate
}: ISortableBlockItem): ISortableBlockItemControllerProps => {

    const { xPosition: xInitialPosition, yPosition: yInitialPosition } = getXYPosition({
        index,
        blockCountInRow,
        blockHeight,
        blockWidth
    })

    const xPosition = useSharedValue(xInitialPosition);
    const yPosition = useSharedValue(yInitialPosition);

    const xLastPosition = useSharedValue(xInitialPosition);
    const yLastPosition = useSharedValue(yInitialPosition);
    const isScrolling = useSharedValue(false);

    // gesture handler
    const panGesture = Gesture.Pan()
        .onBegin(() => {

        })
        .onUpdate((e) => {
            isScrolling.value = true
            xPosition.value = xLastPosition.value + e.translationX
            yPosition.value = yLastPosition.value + e.translationY
        })
        .onEnd((e) => {
            isScrolling.value = false
            let columnNumber = 0
            let rowNumber = 0
            if (xPosition.value < 0) {
                xPosition.value = 0
                xLastPosition.value = 0
                columnNumber = 0
            } else if (xPosition.value > screenWidth) {
                xPosition.value = (blockCountInRow - 1) * blockWidth
                xLastPosition.value = (blockCountInRow - 1) * blockWidth
                columnNumber = blockCountInRow - 1
            } else {
                const nearestXIndex = Math.round(xPosition.value / blockWidth)
                xPosition.value = nearestXIndex * blockWidth
                xLastPosition.value = nearestXIndex * blockWidth
                columnNumber = nearestXIndex
            }
            if (yPosition.value < 0) {
                yPosition.value = 0
                yLastPosition.value = 0
                rowNumber = 0
            } else if (yPosition.value > totalColumnCount * blockHeight) {
                yPosition.value = totalColumnCount * blockHeight
                yLastPosition.value = totalColumnCount * blockHeight
                rowNumber = totalColumnCount
            } else {
                const nearestYIndex = Math.round(yPosition.value / blockHeight)
                yPosition.value = nearestYIndex * blockHeight
                yLastPosition.value = nearestYIndex * blockHeight
                rowNumber = nearestYIndex
            }

            console.log('Hey 1 -> ', columnNumber, rowNumber)
            const newIndex = (rowNumber * blockCountInRow) + columnNumber
            runOnJS(onValueUpdate)(index, newIndex)
        });

    return {
        item,
        index,
        blockWidth,
        blockHeight,
        xPosition,
        yPosition,
        isScrolling,
        panGesture
    }
}

export default useSortableBlockItemController