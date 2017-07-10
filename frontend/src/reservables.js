import React from 'react';
import { List, Datagrid, TextField, EditButton} from 'admin-on-rest';
//TODO expose icon
//export PostIcon from 'material-ui/svg-icons/action/book';

export const ReservableList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <EditButton basePath="/" />
    </Datagrid>
  </List>
);

