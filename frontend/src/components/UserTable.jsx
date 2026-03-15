import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogActions
} from "@mui/material";
import { useState } from "react";

function UserTable({ users, onEdit, onDelete }) {

    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>
              <Button
                size="small"
                onClick={() => onEdit(user)}
                >
                Edit
              </Button>

              <Button
                size="small"
                color="error"
                onClick={() => {
                    setSelectedId(user.id);
                    setOpen(true);
                    }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Dialog open={open} onClose={() => setOpen(false)}>

        <DialogTitle>
            Are you sure you want to delete this user?
        </DialogTitle>

        <DialogActions>

            <Button onClick={() => setOpen(false)}>
            Cancel
            </Button>

            <Button
            color="error"
            onClick={() => {
                onDelete(selectedId);
                setOpen(false);
            }}
            >
            Delete
            </Button>

        </DialogActions>

        </Dialog>

    </Table>
    
  );
}

export default UserTable;