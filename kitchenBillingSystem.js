import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container'
import { Paper,Grid,Box,IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import './custom.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const dataHandler=()=>{
    console.log("hellocodesoftuc")
  }  

const KitchenBillingSystem =()=>{
     const [fooodContainer, setfooodContainer] = useState([ { id: uuidv4(), menuItemId: '', menuName: '', quantity:'',Amount:''},]);
     const [foodqty,setfoodqty] =useState(1)
     const [foodCode,setFoodCode] =useState(null)
     const [foodData,setfoodData]=useState([])
     const [showtableForm,setshowtableForm] =useState(false)
     const [amount,setamount] =useState()

   
     const handleAddFields =()=>{
        setfooodContainer([...fooodContainer,{ id: uuidv4(), menuItemId: '', menuName: '', quantity:'',Amount:''}])
        setfoodqty(1)
        setshowtableForm(false)
       
     }

    

console.log(amount,"vikkkkkkk")
     const handleRemoveFields =(id)=>{
        console.log(id)
         const value =[...fooodContainer]
          value.splice(value.findIndex(value=>value.id===id),1)
          setfooodContainer(value)
          
     }

     const foodquantityHandler = (e)=>{
        debugger
     }

useEffect(()=>{
   const foodApi =()=>{
        axios.get(`http://localhost:7700/api/v1/searchItem?MenuItemId=${foodCode}`)
        .then((res)=>{
            setfoodData([...foodData,res.data.food])
            setshowtableForm(true)
        })
   }
   foodApi()
},[foodCode])


    return(
       <> 
           <div className="Container">
               <div className='main-container'>
                   <h5 className='main-container-heading'>Kitchen Bill generate</h5>
               </div>

               <Container>
                    <Form>
                        <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={8}>
                                            <Grid item xs={6}>
                                            <Form.Group className="mb-3">
                                                  <Form.Label>Date</Form.Label>
                                                  <Form.Control type="Date"name='Date' onChange={dataHandler} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                    <Form.Label>Table Number</Form.Label>
                                                    <Form.Control type="text"name='TableNumber' onChange={dataHandler}  />
                                           </Form.Group>

                                           <Form.Group className="mb-3" >
                                                <Form.Label>Waiter Name</Form.Label>
                                                <Form.Control type="text"name='WaiterName' onChange={dataHandler}   />
                                           </Form.Group>

                                           <Form.Group className="mb-3">
                                                    <Form.Label>Discount</Form.Label>
                                                    <Form.Control type="text"name='DisCount'  onChange={dataHandler} />
                                          </Form.Group>
                                          <Grid container spacing={2}>
                                                <Grid item xs={6}>       
                                                    <Form.Group className="mb-3">
                                                                <Form.Label>Reason</Form.Label>
                                                                <Form.Control type="text"name='DisCount'  onChange={dataHandler} />
                                                    </Form.Group>
                                             </Grid>   
                                                <Grid item xs={4}>
                                                   <Button variant='Seconday' style={{'marginTop':'40px'}}>Cancle</Button>
                                                   <Button  variant='Seconday' style={{'marginTop':'40px'}} type='submit'>Save</Button>
                                                </Grid>
                                          </Grid>
                                          <Form.Group className="mb-3">
                                                    <Form.Label>Kot Details</Form.Label>
                                                    <Form.Control type="text"name='DisCount'  onChange={dataHandler} />
                                          </Form.Group>
                                            </Grid>
                                            <Grid item xs={4}>
                                                    <Form.Group className="mb-3" >
                                                                <Form.Label>Customer Mobile Number</Form.Label>
                                                                <Form.Control type="text"name='CustomerMobileNumber' onChange={dataHandler}  />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" >
                                                        <Form.Label>Customer Name</Form.Label>
                                                        <Form.Control type="text"name='CustomerName'  />
                                                  </Form.Group>
                                                  
                                                  <Form.Group className="mb-3" >
                                                        <Form.Label>Gst No:</Form.Label>
                                                        <Form.Control type="text"name='gstNumber' onChange={dataHandler}  />
                                                </Form.Group>
                                                  
                                            </Grid>
                                    </Grid>
                                    <Container>
                                             <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                          <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="right">Sr</TableCell>
                                                                    <TableCell align="right">Code</TableCell>
                                                                    <TableCell align="right">Item Name</TableCell>
                                                                    <TableCell align="right">Quantity</TableCell>
                                                                    <TableCell align="right">Price</TableCell>
                                                                    <TableCell align="right">#</TableCell>
                                                                </TableRow>   
                                                          </TableHead>
                                                          <TableBody>
                                                               {!showtableForm ?(
                                                                  
                                                                  
                                                                    fooodContainer.map((inputField,id)=>(
                                                                        <TableRow key={inputField.id}> 
                                                                                        <TableCell align="right">{id+1}</TableCell>
                                                                                        <TableCell align="right">  
                                                                                                <Form.Control 
                                                                                                    type="text"
                                                                                                    name='MenuItemId' 
                                                                                                    value={foodData.menuItemId}
                                                                                                    onChange={(e)=>setFoodCode(e.target.value)}
                                                                                                />
                                                                                        </TableCell>
                                                                                        <TableCell align="right">
                                                                                             <Form.Control 
                                                                                                type="text"
                                                                                                name='MenuName' 
                                                                                                value={foodData.menuName}
                                                                                                disabled
                                                                                              />
                                                                                        </TableCell>    
                                                                                               <TableCell align="right"> 
                                                                                                      <Form.Control 
                                                                                                            type="text"
                                                                                                            name='quantity' 
                                                                                                            value={foodqty}
                                                                                                            onChange={(event)=>setfoodqty(event.target.value)}
                                                                                                        />
                                                                                                </TableCell>
                                                                                                <TableCell align="right"> <Form.Control type="text"name='Amount'   disabled/></TableCell>  
                                                                                                <TableCell  align="right"><IconButton variant='primary' onClick={handleAddFields}><AddIcon /></IconButton></TableCell>
                                                                                
                                                                        </TableRow>
                                                                    ))
                                                                   
                                                               ):(
                                                                
                                                                    fooodContainer.map((inputField,id)=>(
                                                                        <TableRow key={inputField.id}> 
                                                                                        <TableCell align="right">{id+1}</TableCell>
                                                                                        <TableCell align="right">  
                                                                                                <Form.Control 
                                                                                                    type="text"
                                                                                                    name='MenuItemId' 
                                                                                                    value={foodData[id].menuItemId}
                                                                                                    onChange={(e)=>setFoodCode(e.target.value)}
                                                                                                />
                                                                                        </TableCell>
                                                                                        <TableCell align="right">
                                                                                             <Form.Control 
                                                                                                type="text"
                                                                                                name='MenuName' 
                                                                                                value={foodData[id].menuName}
                                                                                                disabled
                                                                                              />
                                                                                        </TableCell>    
                                                                                               <TableCell align="right"> 
                                                                                                      <Form.Control 
                                                                                                            type="text"
                                                                                                            name='quantity' 
                                                                                                            value={foodqty}
                                                                                                            onChange={(event)=>foodquantityHandler(event)}
                                                                                                        />
                                                                                                </TableCell>
                                                                                                <TableCell align="right"> <Form.Control type="text"name='Amount' value={foodqty*1*foodData[id].totalAmount} onChange={(event)=>{setamount(event.currentTarget)}}  disabled/></TableCell>  
                                                                                                <TableCell align='right'><IconButton disabled={fooodContainer.length === 1} onClick={() => handleRemoveFields(inputField.id)}> 
                                                                                                      <RemoveIcon />
                                                                                                    </IconButton>
                                                                                                </TableCell>
                                                                                                <TableCell  align="right"><IconButton variant='primary' onClick={handleAddFields}><AddIcon /></IconButton></TableCell>
                                                                                
                                                                        </TableRow>
                                                                    ))
                                                                  
                                                               )
                                                                 
                                                               }
                                                        </TableBody>
                                                    </Table>   
                                             </TableContainer>
                                    </Container>
                                    <br/> <br/> <br/>
                                    <Container>
                                            <Grid container spacing={8}>
                                                <Grid item xs={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>Room Service Charge</Form.Label>
                                                    <Form.Control type="text"name='roomserviceCharge' onChange={dataHandler}  />
                                               </Form.Group>

                                               <Form.Group className="mb-3" >
                                                    <Form.Label>No. of Person</Form.Label>
                                                    <Form.Control type="text"name='roomserviceCharge' onChange={dataHandler}  />
                                               </Form.Group>
                                                </Grid>
                                                <Grid item xs={6}>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control type="text"name='TotalAmount'value={amount}  onChange={dataHandler}  disabled />
                                               </Form.Group>
                                               <Form.Group className="mb-3" >
                                                    <Form.Label>ADD CGST</Form.Label>
                                                    <Form.Control type="text"name='CGST' onChange={dataHandler}  disabled  />
                                              </Form.Group>
                                              <Form.Group className="mb-3" >
                                                    <Form.Label>ADD SGST</Form.Label>
                                                    <Form.Control type="text"name='SGST' onChange={dataHandler} disabled />
                                             </Form.Group>

                                             <Form.Group className="mb-3" >
                                                <Form.Label>Discount</Form.Label>
                                                <Form.Control type="text"name='SGST' onChange={dataHandler} disabled  />
                                            </Form.Group>

                                             <Form.Group className="mb-3" >
                                                    <Form.Label>Net Bill Amount</Form.Label>
                                                    <Form.Control type="text"name='FinalBillAmount' onChange={dataHandler} disabled  />
                                            </Form.Group>
                                                </Grid>
                                            </Grid>
                                    </Container>

                        </Box>
                    </Form>
               </Container>
          </div>
       </>
    )
}

export default KitchenBillingSystem