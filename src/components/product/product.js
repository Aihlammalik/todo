import React ,{useState} from "react";
import data from '../../hooks/data'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  },
};




export default function Product() {
    const [products , setProducts] = useState(data)
    const [modalVisible, setModalVisible] = useState(false)

    //form control
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setdescription] = useState("")
    const [image , setImage] = useState("")


  //   const onClickSubmitHandler = () =>{
  


  // //   let newProduct = {
  // //   //  id: Math.random*122222,
  // //       title: title,
  // //       // price: price,
  // //       description: description,
  // //       category: category,
  // //     //  image: image,
  // //   }

  // // console.log(newProduct);
  // //  setProducts([...products,newProduct])
 
  //  console.log("aihlam malik")

  //   }



  const addProduct = () => {
console.log("aihlam");
  }

   const onDeleteHandler = (id) => {

const filteredProduct = products.filter((item) => item.id !== id)
setProducts(filteredProduct)
   }

  return (
    <div>

<Button variant="success" onClick={()=>setModalVisible(true)}>Add product</Button>



  
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
     
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {products.map((item,index) =>{
            return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td style={{maxWidth: 300}}>{item.description}</td>
                <td>{item.price}</td>
                <td><img style={{width : 35}} src={item.image} alt="img"/></td>
                <td>
                <Button variant="outline-danger" style={{margin : "10px"}} onClick={() =>onDeleteHandler(item.id)}>Delete</Button>
                <Button variant="outline-warning">Edit</Button>
               

               

                </td>

             
      
              </tr>
            )
        }
        )}
    
       
      </tbody>
    </Table>




    <Modal
        isOpen={modalVisible}
        onAfterOpen={() => null}
        onRequestClose={() => setModalVisible(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <Container>
      <Row>
        <Col xs={9}>    <h2 >Add a Product</h2></Col>
        <Col> <CloseButton onClick={()=>setModalVisible(false)}/></Col>
      </Row>
      </Container>
    
     
        <form>
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)}/>

        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"  onChange={(e)=> setdescription(e.target.value)} />


        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category"  onChange={(e)=> setCategory(e.target.value)} />

        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price"  onChange={(e)=>parseInt( setPrice(e.target.value))} />

        {/* <Form.Label>Image</Form.Label> */}
        {/* <Form.Control type="url" placeholder="Enter image url"  onChange={(e)=> setImage(e.target.value)} /> */}

      </Form.Group>



      <Button variant="success" onClick={addProduct()}>Add</Button>
        </form>
      </Modal>

    </div>

  )
}
