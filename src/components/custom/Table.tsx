import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableComponent() {
  const tableHead = [
    'Admin IDNum', 'Admin Last Name', 'Admin First Name', 'Admin Birthday Date',
    'Admin Business Unit', 'Admin Cost Center', 'Admin Address', 'Admin City',
    'Admin Region', 'Admin Postal Code', 'Admin Country', 'Admin Email',
    'Admin Phone', 'Password', 'User Level', 'Activated', 'Entity ID',
    'Parent Entity', 'Entity Name', 'Admin IDKey', 'User ID'
  ];

  const tableData = [
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    ['Admin00012105', 'Developer LN', 'Developer FN', '1/1/60',
     'Business Unit 1', 'Cost Center 1', 'Address 1', 'City 1',
     'Region 1', 'Postal Code 1', 'Country 1', 'admin@example.com',
     '123-456-7890', '********', 'Level 1', 'Yes', 'Entity ID 1',
     'Parent Entity 1', 'Entity Name 1', 'IDKey 1', 'User ID 1'],
    // Add more rows as needed
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30, },
  head: { height: 40,  },
  text: { margin: 6 },
});
