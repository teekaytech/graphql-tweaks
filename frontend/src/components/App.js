import { useState } from 'react';
import Users from './Users';
import User from './User';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => (setSelectedUser(user));

  return (
    <div className='container mx-auto px-4'>
      {selectedUser ? (
        <User user={selectedUser} selectUser={selectUser} />
      ) : (
        <Users selectUser={selectUser} />
      )}
    </div>
  );
}

export default App;
