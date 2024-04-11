import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { IconButton } from '@mui/material';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteRend , fetchRendMA } from '../../../../Services/RendServices';
import { Link, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import moment from 'moment';
import TopDoctor from '../../topbarD/TopDoctor';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import "./rdv.css";
import {  Button } from '@mui/material';
function ListRendVous() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const { id } = useParams();
  console.log(id);
  

  // const [rend, setRend] = useState([]);

  const [Rend, setRend] = React.useState([]);
  console.log(Rend)


  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {
    await fetchRendMA(id).then((res) => {
      const sortedRend = res.data.sort((a, b) => {
        const dateA = moment(a.Daterd + " " + a.timerd, 'YYYY-MM-DD HH:mm').valueOf();
        const dateB = moment(b.Daterd + " " + b.timerd, 'YYYY-MM-DD HH:mm').valueOf();
        
        if (dateA === dateB) {
          return moment(a.timerd, 'HH:mm').valueOf() - moment(b.timerd, 'HH:mm').valueOf();
                } else {
          return dateA - dateB;
        }
      });
      setRend(sortedRend);
    });
  };
  
  function renderEtat(etat) {
    if (etat === 'en attente') {
       return <span style={{ color: 'black' }}>{etat}</span>;
   }
   else  if (etat === 'accepter') {
         return <span style={{ color: 'green' }}>{etat}</span>;
       } else if (etat === 'refuser') {
         return <span style={{ color: 'red' }}>{etat}</span>;
     } else if (etat === 'cancel') {
     return <span style={{ color: 'gray' }}>{etat}</span>;
   }
   }


  const todayAppointments = Rend.filter(Rend =>
    moment(Rend.Daterd).isSame(moment(), 'day')
  );


  // delete rendez vous 
  const delRend = async (_id) => {
    await deleteRend(_id)
    var newRend = Rend.filter((item) => {
      return item._id !== _id
    })
    setRend(newRend);
  }

  return (
    <>
   <TopDoctor />
   <br />
   <Button
          // color="success"
          // startIcon={<AddCircleIcon />}
          size="large"
          variant="contained"> {<Link to={`/ListRendVous/medecin/${id}/Ajoute`}
          style={{
            textDecoration:
              "none", color: "white"
          }}
          >
          Ajouter Rendez-Vous 
        </Link>
          }
        </Button>
        <br />
        <div style={{ textAlign: 'center' }}>
        <h1>  Liste Mes Rendez vous  </h1>   <br />  <br />
      </div>
   
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" style={{fontSize:"18px"}}> Patient </StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"18px"}}> Phone </StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"18px"}}> Email	</StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"18px"}}> Date </StyledTableCell>
              <StyledTableCell align="left" style={{fontSize:"18px"}}> Heure </StyledTableCell>
              {/* <StyledTableCell align="left" style={{fontSize:"18px"}}> Etat </StyledTableCell> */}
              <StyledTableCell align="left" style={{fontSize:"18px"}}> annuler </StyledTableCell>
            </TableRow>
          </TableHead>
         <TableBody>
{todayAppointments.length > 0 ? (
  <>
    {todayAppointments.map(Rend => (
      <StyledTableRow key={Rend.id}>
        <StyledTableCell component="th" scope="row" style={{fontSize:"15px"}}>{Rend?.userID?.firstName} {Rend?.userID?.lastName}  {Rend?.firstName} {Rend?.lastName} </StyledTableCell>
        <StyledTableCell align="left" style={{fontSize:"15px"}}>{Rend?.userID?.phone} {Rend?.phone}</StyledTableCell>
        <StyledTableCell align="left"style={{fontSize:"15px"}}>{Rend?.userID?.email} {Rend?.email}</StyledTableCell>
        <StyledTableCell align="left"style={{fontSize:"15px"}}>{Rend?.Daterd}</StyledTableCell>
        <StyledTableCell align="left"style={{fontSize:"15px"}}>{Rend?.timerd}</StyledTableCell>
        {/* <StyledTableCell align="left"style={{fontSize:"15px"}}> {Rend?.optionrend} </StyledTableCell> */}
        <StyledTableCell align="left"style={{fontSize:"15px"}}>  <IconButton onClick={() => { delRend(Rend._id) }}> <HighlightOffIcon/> </IconButton></StyledTableCell>

      </StyledTableRow>
    ))}
  </>
) : (<p>Aucun rendez-vous aujourd'hui</p>)}

</TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ListRendVous






{/* <>
<TopDoctor />
<table>
  <div >
    <br />
    <h1 style={{ textAlign: 'center' }}>  Liste des Rendez vous d'aujourd'hui  </h1>
    <br />
    <br />
    <div className='TableR'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"> Patient </StyledTableCell>
              <StyledTableCell align="left">  Num Phone </StyledTableCell>
              <StyledTableCell align="left"> Date/Heure </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todayAppointments.length > 0 ? (
              <>
                {todayAppointments.map(Rend => (
                  <StyledTableRow key={Rend.id}>
                    <StyledTableCell component="th" scope="row">{Rend?.userID.firstName} {Rend?.userID.lastName}</StyledTableCell>
                    <StyledTableCell align="left">{Rend?.userID.phone}</StyledTableCell>
                    <StyledTableCell align="left">{Rend?.Daterd}/{Rend?.timerd}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </>
            ) : (<p>Aucun rendez-vous aujourd'hui</p>)}

          </TableBody>
        </Table>
      </TableContainer>
    </div>


  </div>
</table>



</> */}