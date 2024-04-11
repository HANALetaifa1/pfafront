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
import TopPA from '../../principale/top/TopPA';
import { deleteRend, editRendC, fetchRendP } from '../../../../Services/RendServices';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';

 import moment from 'moment';

function MesRend() {

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

  const { userId } = useParams();
  console.log(userId);

  // const [rend, setRend] = useState([]);

  const [Rend, setRend] = React.useState([]);
  console.log(Rend)

  function renderEtat(etat) {
    if (etat === 'en attente') {
      return <span style={{ color: 'black' }}>{etat}</span>;
  }
  else  if (etat === 'accepter') {
        return <span style={{ color: 'green' }}>{etat}</span>;
      } else if (etat === 'reporter') {
        return <span style={{ color: 'blue' }}>{etat}</span>;
    } 
  //   else if (etat === 'cancel') {
  //   return <span style={{ color: 'gray' }}>{etat}</span>;
  // }
  }
 //cancel
  // const accredC= async (redID) => {
  //   const confirmed = window.confirm('Voulez-vous vraiment cancel Votre rendez_Vous ?');
  //   if (confirmed) {
  //     await editRendC (redID)
  //     var newRdv = Rend.filter((red) => {
  //       return red._id !== redID
  //     });
  
  //     window.location.reload();
  //     setRend(newRdv);
  //     console.log(newRdv);
      
  
  //   }}

  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {
    await fetchRendP(userId)
      .then((res) => {
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
  
        // const filteredRend = sortedRend.filter((rend) => {
        //   const dateRend = moment(rend.Daterd + " " + rend.timerd, 'YYYY-MM-DD HH:mm').valueOf();
        //   const currentDate = moment().valueOf();
        //   return dateRend > currentDate;
        // });
  
        setRend(sortedRend);
      });
    
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
      <TopPA />
      <div style={{ textAlign: 'center' }}>
        <br />
        <h1>  Liste Mes Rendez vous  </h1>   <br />  <br />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nom Médecin</StyledTableCell>
              <StyledTableCell align="left"> Num telephone </StyledTableCell>
              <StyledTableCell align="left">	Adresse Medecin</StyledTableCell>
              <StyledTableCell align="left"> Date/Heure </StyledTableCell>
              <StyledTableCell align="left">	Etat </StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {Rend.map((red, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">Dr {red?.medecinID?.firstName} {red?.medecinID?.lastName}</StyledTableCell>
                <StyledTableCell align="left">{red?.medecinID?.phone}</StyledTableCell>
                <StyledTableCell align="left">{red?.medecinID?.adresse}</StyledTableCell>
                <StyledTableCell align="left">{red?.Daterd}/{red?.timerd}</StyledTableCell>
                <StyledTableCell align="left">
                  {renderEtat(red?.etatrend)}
                </StyledTableCell>
                {/* <StyledTableCell align="left">
               
                </StyledTableCell> */}
                {/* <TableCell align="left">
                <IconButton onClick={
                  red.etatrend === 'en attente' ? () => accredC(red._id) : null}>
                    <DoDisturbAltIcon  sx={{ color: pink[500] }}  fontSize='large'/>
                  </IconButton>
//delete
<IconButton onClick={() => {delRend(red._id) }}><DeleteIcon   fontSize='large' sx={{ color: pink[500] }} /></IconButton>

</TableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MesRend
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }