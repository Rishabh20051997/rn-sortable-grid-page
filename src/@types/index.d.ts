type PanGesture = import('react-native-gesture-handler').PanGesture
type SharedValueNumeric = import('react-native-reanimated').SharedValue<number>
type SharedValueBoolean = import('react-native-reanimated').SharedValue<boolean>

interface LooseObject {
    [key: string]: any;
}

interface IDataList extends LooseObject {
    id: string | number
}

interface ISortableList {
    list: IDataList[]
    numOfColumn: number
}

interface ISortableListControllerProps {
    dataList: IDataList[]
    numOfColumn: number
    blockWidth: number
    blockHeight: number
    totalColumnCount: number
    onValueUpdate: (oldIndex: number, newIndex: number) => void
}

interface ISortableBlockItem {
    item: IDataList
    index: number
    blockCountInRow: number
    blockWidth: number
    blockHeight: number
    totalColumnCount: number
    onValueUpdate: (oldIndex: number, newIndex: number) => void
}

interface ISortableBlockItemControllerProps {
    item: IDataList
    index: number
    blockWidth: number
    blockHeight: number
    xPosition: SharedValueNumeric
    yPosition: SharedValueNumeric
    isScrolling: SharedValueBoolean
    panGesture: PanGesture
}