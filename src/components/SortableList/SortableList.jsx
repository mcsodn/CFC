import { useState, useEffect } from 'react';
import SortableListItem from './SortableListItem';

const SortableList = () => {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(responce => responce.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
    
  }, []);


  return (
    isLoading ? (
      <div>
        <p>Загрузка...</p>
      </div>
    ) : (
        <>
            <input type="button" value="Сортировать по алфавиту" 
                onClick={()=>{
                    setData([...data.sort((a,b) => a.name.localeCompare(b.name))]);
                }}
            />
            <div>
                {data.map(user => <SortableListItem userData={user} key={user.id} />)}
            </div>
        </>
    )
  );
}

export default SortableList;