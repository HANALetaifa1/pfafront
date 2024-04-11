import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./cons.css";
import { useState, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import MUIDataTable from "mui-datatables";
import { fetchCons,addCons , deleteCons} from '../../../../Services/ConsService';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import MedicationIcon from '@mui/icons-material/Medication';
import TopDoctor from '../../topbarD/TopDoctor';





export default function Cons() {
    const {id} = useParams();
    const [cons, setCons] = useState([]);
    const navigate = useNavigate();

    const delcons  = async (_id) => {
        await deleteCons(_id)
        var newcons = cons.filter((item) => {
          return item._id !== _id
        })
        setCons(newcons);
      }
  
   //affiche consultation
    useEffect(() => {
      GetListCons();
    }, []);
    const GetListCons = async () => {
  
      //affiche les consultation 
  
      await fetchCons(id)
        .then((res) => {
          setCons(res.data);
        });
    }


    const columns = [
        { field: 'numfiche', 
        headerName: 'Num Fiche', 
        width: 90 },
        {
          field: '',
          headerName: 'Date consultation',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];




  return (
    <>
    <div className="tiltle">   
    <h1> Gestion de consultation </h1>
    </div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        // rows={cons}
      data={cons}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  );
}