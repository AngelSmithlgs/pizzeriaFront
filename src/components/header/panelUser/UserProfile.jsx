import React from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { user, logOut, updateUserProfile } = useUserAuth();
  const [editMode, setEditMode] = React.useState(false);
  const [phone, setPhone] = React.useState(user?.phone || '');
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    updateUserProfile({ phone });
    setEditMode(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/'); // Redirige al usuario a la página de inicio después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {editMode ? (
        <div>
          <label>Teléfono: </label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <p>Teléfono: {user?.phone}</p>
      )}
      <button onClick={handleEditClick} disabled={editMode}>
        Editar Perfil
      </button>
      <Link to="/" onClick={handleLogout}>
        Cerrar Sesión
      </Link>
    </div>
  );
};

export default UserProfile;
