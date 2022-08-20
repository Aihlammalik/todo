import React from 'react' 
import Card from  '../card/card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function section1() {
        const data = [{title:"Tummy Trimmer for Home Gym Belly Trimmer Yoga Training Accessories Single SPRING",
        img:"https://static-01.daraz.pk/p/58dbcbec42eb70b0b34dd72c8ba2f3db.jpg",price:"350"},{title:"Tummy Trimmer for Home Gym Belly Trimmer Yoga Training Accessories Single SPRING",
        img:"https://static-01.daraz.pk/p/58dbcbec42eb70b0b34dd72c8ba2f3db.jpg",price:"350"},{title:"Tummy Trimmer for Home Gym Belly Trimmer Yoga Training Accessories Single SPRING",
        img:"https://static-01.daraz.pk/p/58dbcbec42eb70b0b34dd72c8ba2f3db.jpg",price:"350"}];
        return (

    <div>
        {console.log(data)}
        {data.map((item) => {
            return(
<div>
<Container>
<Row>
<Col xs lg="2"  md="auto">

<Card data={item}/>
</Col>
</Row>
</Container>
</div>
            )
        })}

    </div>
  )
}
