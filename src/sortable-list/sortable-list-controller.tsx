import { useRef, useState } from "react"
import { screenWidth } from "../common/metric"

const useSortableListController = ({
    list = [],
    numOfColumn = 4
}: ISortableList): ISortableListControllerProps => {
    
    const [dataList, updateDataList] = useState(list)

    const blockWidth = useRef(Math.floor(screenWidth / numOfColumn)).current

    const blockHeight = useRef(blockWidth).current

    const totalColumnCount = useRef(Math.floor(list.length / numOfColumn)).current

    const onValueUpdate = (oldIndex: number, newIndex: number) => {
        let updatedDataList = [...dataList]

        if (oldIndex < newIndex) {
            const leftArray = updatedDataList.slice(0, oldIndex)
            const middleArray = updatedDataList.slice(oldIndex + 1, newIndex + 1)
            const displacedItemArray = [updatedDataList[oldIndex]]
            const rightArray = updatedDataList.slice(newIndex + 1, updatedDataList.length)
            updatedDataList = [...leftArray, ...middleArray, ...displacedItemArray, ...rightArray]
        } else if (oldIndex > newIndex) {
            const leftArray = updatedDataList.slice(0, newIndex)
            const displacedItemArray = [updatedDataList[oldIndex]]
            const middleArray = updatedDataList.slice(newIndex, oldIndex)
            const rightArray = updatedDataList.slice(oldIndex + 1, updatedDataList.length)
            updatedDataList = [...leftArray, ...displacedItemArray, ...middleArray, ...rightArray]
        }

        updateDataList(updatedDataList)
    }

    return {
        dataList,
        numOfColumn,
        blockHeight,
        blockWidth,
        totalColumnCount,
        onValueUpdate
    }
}

export default useSortableListController