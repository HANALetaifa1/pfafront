import React from 'react'
import { fetchRendPA } from '../../../Services/RendServices';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./EnterCode.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IconButton } from "@mui/material";
import moment from 'moment';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import TopPA from '../principale/top/TopPA';
function MesMedDoss() {
    const { userId } = useParams();
    console.log(userId);
    // const [code, setCode] = useState("");
    // const [submitted, setSubmitted] = useState(false);
    // const [showCode, setShowCode] = useState(false);
    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setCode(e.target.value);
    // };

    // const handleToggleCode = () => {
    //     setShowCode(!showCode);
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSubmitted(true);
    //     // Envoyer le code au serveur ou effectuer d'autres actions

    
    // // Vous pouvez ajouter votre logique ici pour traiter le code entré par le patient
    // };


    const [Rend, setRend] = React.useState([]);
  console.log(Rend)
  
  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {
    await fetchRendPA(userId)
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
        setRend(sortedRend);
      });
    
  }
  return (
    <>
            <TopPA/>


    <div>
       <Table striped bordered hover>

<thead>
  <tr>
 
    <th>Medecin Avec rendez-Vous</th>
    {/* <th>Entrez votre code </th> */}
    <th>Medecin Sans rendez-Vous</th>

  </tr>

</thead>
<tbody>
{Rend.map((red, index) => (
    <tr key={red._id}>
      <td>Dr {red?.medecinID.firstName} {red?.medecinID.lastName}

    
      
        {<Link to= {`/CodePa/med/${red?.medecinID?._id}`}>
        <Button type="submit" variant="contained" className="submit-btn">
                            Entrez Votre code 
                        </Button>  
                              </Link>
        }
    
    </td>
      <td>
  

  {<Link to= {`/CodePa/med/${red?.medecinID?._id}`}>
  <Button type="submit" variant="contained" className="submit-btn">
                      Entrez Votre code 
                  </Button>  
                        </Link>
  }
</td>

    </tr>
  ))}




</tbody>


</Table>
    </div>
    </>
  )
}

export default MesMedDoss
