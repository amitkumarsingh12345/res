import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const Logo = () => {
  return (
    <>
      
      <Card className='mx-1 mx-md-5' style={{marginTop: '100px'}}>
        <Card.Img variant="top" className='m-auto' src="./metro-logo.jpg" style={{maxHeight:'45%',maxWidth:'45%'}}/>
        <Card.Body>
        <Card.Title className='text-center'>ENJOY THE TASTE</Card.Title>
          <Card.Text className='text-center'>
          प्रयाग कुम्भ मेला प्रयाग में प्रति १२ वर्ष बाद लगने वाला कुम्भ मेला है जिसमें लाखों हिन्दू एकत्र होकर गंगा , यमुना और सरस्वती के संगम पर स्नान करते हैं। सन २०१९ के अर्ध कुम्भ में लगभग ५ करोड़ लोग आये जबकि सन
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Logo;