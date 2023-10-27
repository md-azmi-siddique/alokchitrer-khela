import React from "react";
import './FeatureProducts.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardItem = (props) => {
  const { featureItem } = props;
  console.log(featureItem)

  // Slice the first 5 items
  const firstItems = featureItem.slice(0, 15);

  // Chunk the first 5 card items into rows of 3
  const chunkedCardItems = [];
  for (let i = 0; i < firstItems.length; i += 3) {
    chunkedCardItems.push(firstItems.slice(i, i + 3));
  }

  return (
    <div className="container">
    
    <div className="card-list-container">
      {chunkedCardItems.map((row, rowIndex) => (
        <Row key={rowIndex} className="card-row-container">
          {row.map((item, itemIndex) => (
            <Col key={itemIndex} md={4}>
              <Card className="mr-3 card-base card-list-container">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><span id="price">Price: {item.price} BDT</span></small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
    </div>
    
  );
}

export default CardItem;
