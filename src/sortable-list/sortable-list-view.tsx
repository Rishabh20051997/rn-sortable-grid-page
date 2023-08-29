import { GestureHandlerRootView } from "react-native-gesture-handler"
import SortableBlockItem from "../sortable-block-item"

const SortableListView = ({
    dataList = [],
    blockWidth,
    blockHeight,
    totalColumnCount,
    numOfColumn,
    onValueUpdate
}: ISortableListControllerProps): JSX.Element => {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
                {dataList.map((item, index) => {
                    return <SortableBlockItem
                        key={item.color + index + ''}
                        item={item}
                        index={index}
                        onValueUpdate={onValueUpdate}
                        blockCountInRow={numOfColumn}
                        blockWidth={blockWidth}
                        blockHeight={blockHeight}
                        totalColumnCount={totalColumnCount}
                    />
                })}
        </GestureHandlerRootView>

    );
}

export default SortableListView