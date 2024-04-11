import React from 'react';
import "./cons.css";
import { useState, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import MUIDataTable from "mui-datatables";
import { fetchCons,addCons , deleteCons} from '../../../../Services/ConsService';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import MedicationIcon from '@mui/icons-material/Medication';
import TopDoctor from '../../topbarD/TopDoctor';
function Consultation() {

  const {id} = useParams();
  const [cons, setCons] = useState([]);

   const navigate = useNavigate();
//delete consultation 
    const delcons = async (_id) => {
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
  //delete consultation 

  //preparer les columns
  const columns = [
    {
      name: "_id",
      label: "Num Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "patientID",
      label: "Num Fiche",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (pat) => (
          pat && pat.numfiche ? pat.numfiche : null
        ),
      },
    },
    {
      name: "DateCons",
      label: "Date Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "MotifCons",
      label: "Motif Cons",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "AntécedentsMédecaux",
      label: "Antécedents Médecaux",
      options: {
        filter: true,
        sort: false,
       }
    },
     {
      name: "PoisPatient" ,
      label: "Pois",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "TaillePatient",
      label: "Taille",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "tension",
      label: "tension",
      options: {
        filter: true,
        sort: false,
       }   
    },
    {
      name: "Température",
      label: "Température",
      options: {
        filter: true,
        sort: false,
       }   
    },
    {
      name: "_id",
      label: "Details",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
              <IconButton >
              {<Link to={value}  > 
           
                <InfoIcon  />
              </Link>
              }
              </IconButton>
          </div>

        )
      }
    },
    {
      name: "_id",
      label: "Modifier",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton>
            {/* /Patient/:patientid/cons/edit/:consid */}
              {<Link to = {`/patient/${id}/cons/edit/${value}`}  > 
           
                <EditIcon color='secondary'   />
              </Link>
              }
              </IconButton>
            
              <IconButton onClick={() => { delcons(value) }}>
              <DeleteIcon   sx={{ color: pink[500] }} />
            </IconButton>

          </div>

        )
      }
    },
    {
      name: "_id",
      label: "Ordonnance",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton >
            {<Link to={`/patient/${id}/cons/ord/${value}`} >
           
                <MedicationIcon fontSize='large'  />
              </Link>
              }
              </IconButton>
            
          </div>

        )
      }
    },
  ];
  const options = {
    filterType: 'checkbox',
    // maxHeight: '500px',
    // minwidth: '500px',
    rowHeight: '50px',
    setCellProps: () => ({ style: { fontSize: '16px', padding: '8px' } }),
  };

  return (
    <div>

            <TopDoctor/>
            <div style={{ padding: 2, margin: 2 }}>
        <Button
      color="success"
          // startIcon={<AddCircleIcon />}
          size="large"
          startIcon={<PersonAddIcon    />}
          variant="contained"
        > {<Link to={`/Patient/cons/${id}/insert`} 
          style={{
            textDecoration:
              "none", color: "white" 
          }}>
            Ajouter Consultation
          </Link> 
          }
        </Button>
      </div>
    <div className="tiltle">   
    <h1 className='H1'>Gestion de consultation </h1>
    </div>
     <br/>
     <br/>
  
      <div>
  

  <MUIDataTable
    title={"Liste des Consultation"}
    data={cons}
    columns={columns}
     options={options}
  />
</div>




    </div>
  );
}

export default Consultation;
