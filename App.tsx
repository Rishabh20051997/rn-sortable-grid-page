
import SortableList from './src/sortable-list';

const arr = [{
  id: 0,
  color: 'red'
},
{
  id: 1,
  color: 'green'
},
{
  id: 2,
  color: 'blue'
},
{
  id: 3,
  color: 'black'
},
{
  id: 4,
  color: 'aqua'
},
{
  id: 5,
  color: 'yellow'
},
{
  id: 6,
  color: 'orange'
},
{
  id: 7,
  color: 'purple'
},
{
  id: 8,
  color: 'olive'
},
{
  id: 9,
  color: 'navy'
}]

function App(): JSX.Element | null {
return <SortableList list={arr} numOfColumn={4}/>

}



export default App;
