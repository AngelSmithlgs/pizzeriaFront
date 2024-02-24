import React, { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';


const EditProfile = () => {
  const { user, updateUserProfile } = useUserAuth();


  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');

  const handleSave = () => {

    updateUserProfile({ phoneNumber });

    history.push('/user-profile');
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <label>
        Número de teléfono:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>

      <button onClick={handleSave}>Guardar Cambios</button>
    </div>
  );
}

export default EditProfile;
