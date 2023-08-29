import useSortableListController from "./sortable-list-controller"
import SortableListView from "./sortable-list-view"

const SortableList = (props: ISortableList): JSX.Element => {

    const controllerProps = useSortableListController(props)

    return (
        <SortableListView {...controllerProps}/>

    );
}

export default SortableList