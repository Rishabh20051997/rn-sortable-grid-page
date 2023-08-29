import useSortableBlockItemController from "./sortable-block-item-controller";
import SortableBlockItemView from "./sortable-block-item-view";


const SortableBlockItem = (props: ISortableBlockItem): JSX.Element => {

    const controllerProps = useSortableBlockItemController(props)

    return (
        <SortableBlockItemView {...controllerProps}/>

    );
}

export default SortableBlockItem