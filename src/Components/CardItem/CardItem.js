import React from "react";
import './CardItem.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardItem = (props) => {
  const { cardItemList } = props;
  console.log(cardItemList)

  // Slice the first 5 items
  const firstItems = cardItemList.slice(10, 16);

  // Chunk the first 5 card items into rows of 3
  const chunkedCardItems = [];
  for (let i = 0; i < firstItems.length; i += 8) {
    chunkedCardItems.push(firstItems.slice(i, i + 8));
  }

  return (
    <>

    <div className="heading">
      <h5>Featured Category</h5>
      <h6>Get Your Desired Product from Featured Category!</h6>
    </div>
    
    <div className="card-list-container">
      {chunkedCardItems.map((row, rowIndex) => (
        <Row key={rowIndex} className="card-row-container">
          {row.map((item, itemIndex) => (
            <Col key={itemIndex} md={2}>
              <Card className="mr-3 card-base">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title><span className="pdCatagory" style={{textAlign:'center'}}>{item.seller}</span></Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
    </>
    
  );
}

export default CardItem;
