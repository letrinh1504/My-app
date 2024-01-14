import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../sevices/UserService'



const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    //call apis
    getUsers();

  }, [])

  const getUsers = async () => {
    let res = await fetchAllUser();
    // console.log(res)
    if (res?.data && res.data.data) {
      setListUsers(res.data.data);
    }//res?.data === res && res.data

  }
  console.log(listUsers)
  return <>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Fist name</th>

          <th>Last Name</th>

        </tr>
      </thead>
      <tbody>
        {
        listUsers && listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (<tr key={`users-${index}`}>
              <td >{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>
            )
          })
          
          }

      
        
      </tbody>
    </Table>
  </>;
};



export default TableUsers;
