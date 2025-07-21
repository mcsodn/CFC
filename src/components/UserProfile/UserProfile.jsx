import { useState, useEffect } from 'react';

const UserProfile = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(responce => responce.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error))
  }, []);


  return (
    isLoading ? (
      <div>
        <p>Загрузка...</p>
      </div>
    ) : (
      <div>
        {JSON.stringify(data)}
      </div>
    )
  );
}

export default UserProfile;