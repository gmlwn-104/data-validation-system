import { useEffect, useState } from "react";
import { Container, Typography, Button, TextField, Card, CardContent, Snackbar, Alert } from "@mui/material";

import UserTable from "../components/UserTable";
import { getUsers, addUser, deleteUser } from "../api/userApi";

function UsersPage() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setAge(user.age);
    };

const updateUser = () => {

  fetch(`http://localhost:8080/users/${editId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      age: Number(age)
    })
  })
  .then(() => {
  setEditId(null);
  setName("");
  setAge("");
  loadUsers();

  setSnackbarMessage("User updated successfully");
  setSnackbarOpen(true);
});

};

const handleCancel = () => {
  setEditId(null);
  setName("");
  setAge("");
};

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers().then(data => setUsers(data));
  };

  const handleAddUser = () => {
  addUser({
    name: name,
    age: Number(age)
  }).then(() => {
    setName("");
    setAge("");
    loadUsers();

    setSnackbarMessage("User added successfully");
    setSnackbarOpen(true);
  });
};

  const handleDelete = (id) => {
  deleteUser(id).then(() => {
    loadUsers();

    setSnackbarMessage("User deleted successfully");
    setSnackbarOpen(true);
  });
};

  return (
    <Container>

      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        User Management
      </Typography>

      <Card sx={{ mb: 4 }}>
  <CardContent>

    <Typography variant="h6" sx={{ mb: 2 }}>
      {editId ? "Edit User" : "Add User"}
    </Typography>

    <TextField
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      sx={{ mr: 2 }}
    />

    <TextField
      label="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      sx={{ mr: 2 }}
    />

    <Button
      variant="contained"
      onClick={editId ? updateUser : handleAddUser}
      sx={{ mr: 2 }}
    >
      {editId ? "Update User" : "Add User"}
    </Button>

    {editId && (
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    )}

  </CardContent>
</Card>

      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    <Snackbar
    open={snackbarOpen}
    autoHideDuration={3000}
    onClose={() => setSnackbarOpen(false)}
    >

    <Alert severity="success">
        {snackbarMessage}
    </Alert>

    </Snackbar>
    </Container>
  );
  
}

export default UsersPage;