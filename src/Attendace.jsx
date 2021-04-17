import React , {useState , useEffect} from 'react';
import {Table} from "antd";
import 'antd/dist/antd.css';
import fetch from "unfetch";

 
function Attendance(props) {

    /**const getData = () => fetch("http://localhost:8081/attendances").then(res => res.json()); **/
    const [names , setNames] = useState([]);
    
    const getNames = async () => {
        try {
            const response = await fetch("http://attendancea.herokuapp.com/attendances");
            const dataJson = await response.json();
            setNames(dataJson);
            console.log(dataJson);
            
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getNames();
    },[]);   // [] are to make sure that we make only one request 
    const dataSource = [
        {
          
          key: 'Tanner Linsley',
          id: 1,
          date : '2020-02-02'
         
        },
       
      ];

      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Key',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Date',
          dataIndex: 'date',
           key: 'date',
          },
       
      ];
      
     
    
    return (
        <div>
          <Table dataSource={names} columns={columns} ></Table>
            </div>
    )
}


export default Attendance;