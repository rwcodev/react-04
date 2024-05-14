import { useEffect, useState } from 'react'
import './App.css'
import userCrud from './hooks/userCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [userSelected, setUserSelected] = useState()
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [ users, getUsers, createUser, deleteUser, updateUser ] = userCrud('/users/')

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setFormIsOpen(true);
  };

  return(
    <div className='container'>
      <h1>User CRUD</h1>
        <button onClick={handleOpenForm}>Create New User</button>  
            <FormUser 
              createUser={createUser}
              deleteUser={deleteUser}
              updateUser={updateUser}
              setUserSelected={setUserSelected}
              formIsOpen={formIsOpen}
              setFormIsOpen={setFormIsOpen}
              userSelected={userSelected}
            />
      <div className="user-container">
        {users?.map((user) => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserSelected={setUserSelected}
              setFormIsOpen={setFormIsOpen}
            />        
          ))
        }
      </div>
    </div>
  );
}

export default App