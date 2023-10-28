import React, { useState,useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setUserName } from "../redux/reducers/AuthReducer";

import { apiRequest } from "../utils/apiRequest";

import EditName from "../components/EditName";
import Account from "../components/Account";

function Profile() {
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const accounts = useSelector(state => state.accounts);

  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  /**pour edit  */
  const [localUserName, setLocalUserName] = useState('');

  useEffect(() => {
    if (user) {
      setLocalUserName(user.userName);
    }
  }, [user]);

  const handleSave = async () => {
    const dataToUpdate = {
      userName: localUserName,
    };

    try {
      await apiRequest('PUT','/profile' , token , dataToUpdate);
      handleToggleEdit();
      dispatch(setUserName(localUserName))
    } catch (error) {
      console.error("Erreur lors de la mise à jour des informations de l'utilisateur :", error);
    }
  };
  

  return (
    <>
      {user && (
        <main className="main bg-dark">
          <div className="header">
            {isEditing ? (
              <EditName
                onCancel={handleToggleEdit}
                handleSave={handleSave}
                userName={localUserName}
                firstName={user.firstName}
                lastName={user.lastName}
                setUserName={(e) => setLocalUserName(e.target.value)}
              />
            ) : (
              <>
                <h1>
                  Welcome back
                  <br />
                  {user.userName} !
                </h1>
                <button className="edit-button" onClick={handleToggleEdit}>
                  Edit Name
                </button>
              </>
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section>
            {accounts.map((account, index) => (
              <Account
                key={index}
                Name={account.name}
                Balance={account.balance}
                Type={account.type}
              />
            ))}
          </section>
        </main>
      )}
    </>
  );
}

export default Profile;
