import * as React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteRend, editRendA, editRendR, fetchRendM, fetchRendP } from '../../../../Services/RendServices';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TopDoctor from '../../topbarD/TopDoctor';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { pink, green } from '@mui/material/colors';
import moment from 'moment';


export default function Demadeur() {
  const { user } = useSelector((state) => state.auth);
  const id = user._id
  console.log(id)
  const [Rend, setRend] = React.useState([]);
  // console.log(Rend._id)

  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {
    await fetchRendM(id).then((res) => {
      const sortedRend = res.data.sort((a, b) => {
        const dateA = moment(a.Daterd + " " + a.timerd, 'YYYY-MM-DD HH:mm').valueOf();
        const dateB = moment(b.Daterd + " " + b.timerd, 'YYYY-MM-DD HH:mm').valueOf();

        if (dateA === dateB) {
          return moment(a.timerd, 'HH:mm').valueOf() - moment(b.timerd, 'HH:mm').valueOf();
        } else {
          return dateA - dateB;
        }
      });
      // Filter the sorted rendez-vous to remove those that have already passed

      const filteredRend = sortedRend.filter((rend) => {
        const dateRend = moment(rend.Daterd + " " + rend.timerd, 'YYYY-MM-DD HH:mm').valueOf();
        const currentDate = moment().valueOf();
        return dateRend > currentDate;
      });

      setRend(filteredRend);
    });
  };


  //   editRendA(Rend).then(res=>{
  //    console.log("Update OK",res);
  //   // navigate(`/Patient/medecin/${medecinId}`); 
  // })
  //   .catch(error=>{
  //   console.log(error)
  //   })

  const accredA = async (redID) => {
    const confirmed = window.confirm('Voulez-vous vraiment accepter cette Rendez vous ?');
    if (confirmed) {
      await editRendA(redID)
      var newRdv = Rend.filter((red) => {
        return red._id !== redID
      });

      window.location.reload();
      setRend(newRdv);
      console.log(newRdv);

      //     toast.success("Rendez vous sera accepté",
      //    {
      //       position: toast.POSITION.LEFT,
      //       autoClose: 3000,
      //     });
    }
  }

  //raporter
  const accredR = async (redID) => {
    // const confirmed = window.confirm('Voulez-vous vraiment raporter cette rendez_Vous ?');
    // if (confirmed) {
    editRendR(redID)
    var newRdv = Rend.filter((red) => {
      return red._id !== redID
    }
    );

    // window.location.reload();
    // setRend(newRdv);
    // console.log(newRdv);

    //   toast.success("Rendez-vous a été Retardé",
    //  {
    //     position: toast.POSITION.LEFT,
    //     autoClose: 3000,
    //   });
    // }
  }

  function renderEtat(etat) {
    if (etat === 'en attente') {
      return <span style={{ color: 'black' }}>{etat}</span>;
    }
    else if (etat === 'accepter') {
      return <span style={{ color: 'green' }}>{etat}</span>;
    } else if (etat === 'reporter') {
      return <span style={{ color: 'blue' }}>{etat}</span>;
    }
    // else if (etat === 'cancel') {
    //   return <span style={{ color: 'gray' }}>{etat}</span>;
    // }
    if (etat === 'contrôle') {
      return <span style={{ color: 'gray' }}>{etat}</span>;
    }
  }
  // delete rendez vous 
  // const delRend = async (_id) => {
  //   await deleteRend(_id)
  //   var newRend = Rend.filter((item) => {
  //     return item._id !== _id
  //   })
  //   setRend(newRend);
  // }
  return (
    <>

      <TopDoctor />

      <br />
      <Button
        // color="success"
        // startIcon={<AddCircleIcon />}
        size="large"

        variant="contained"

      > {<Link to={`/request/medecin/${id}/ajouter`}
        style={{
          textDecoration:
            "none", color: "white"
        }}>
        Ajouter Controlle
      </Link>
        }
      </Button>
      <div style={{ textAlign: 'center' }}>
        <br />
        <h1 style={{ fontSize: "30px" }} >  Liste Des demandeurs </h1>   <br />  <br />
      </div>
      <TableContainer component={Paper} sx={{ overflow: 'auto' }}>
        <Table sx={{ maxWidth: " 100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontSize: "20px" }} >Patient</TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }}>Phone </TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }}>Email </TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }}>Date</TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }} >Time</TableCell>
              {/* <TableCell align="left"  style={{fontSize:"20px"}} >Description</TableCell> */}
              <TableCell align="left" style={{ fontSize: "20px" }}  >Etat </TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }} >Accepter </TableCell>
              <TableCell align="left" style={{ fontSize: "20px" }} >Reporter </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Rend.map((red) => (
              <TableRow
                key={red.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ fontSize: "15px" }}>
                  {red?.userID?.firstName} {red?.userID?.lastName} {red?.firstName} {red?.lastName}
                </TableCell>
                {/* <TableCell align="left"></TableCell> */}
                <TableCell align="left" style={{ fontSize: "15px" }}>{red?.userID?.phone} {red?.phone}</TableCell>
                <TableCell align="left" style={{ fontSize: "15px" }}>{red?.userID?.email} {red?.email}</TableCell>

                <TableCell align="left" style={{ fontSize: "15px" }}>{red?.Daterd}</TableCell>
                <TableCell align="left" style={{ fontSize: "15px" }}>{red?.timerd}</TableCell>
                {/* <TableCell align="left"  style={{fontSize:"15px"}}>{red?.Descrd}</TableCell> */}
                <TableCell align="left" style={{ fontSize: "15px" }}> {renderEtat(red?.etatrend)}</TableCell>
                <TableCell align="left" style={{ fontSize: "15px" }}>


                  <IconButton onClick={
                    red.etatrend === 'en attente' ? () => accredA(red._id) :
                      null}>
                    <AddTaskIcon color='primary' fontSize='large' sx={{ color: green[500] }} />
                  </IconButton>


                </TableCell>

                <TableCell align="left">

                  {<Link to={`/Patient/${red._id}`}>

                    <IconButton onClick={
                      red.etatrend === 'en attente' ? () => accredR(red._id)
                        : red.etatrend === 'accepter' ? () => accredR(red._id)
                          : null}>
                      <PublishedWithChangesIcon color='primary' fontSize='large' />
                    </IconButton>
                  </Link>}


                </TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
