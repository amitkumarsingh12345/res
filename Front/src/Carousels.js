import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel data-bs-theme="light" className='mx-2' style={{ marginTop: '70px', marginBottom: '-90px' }}>
            <Carousel.Item className='h-25' style={{ height: '300px' }}>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-psd/web-banner-template-restaurant-memphis-style_23-2148168804.jpg?size=626&ext=jpg&ga=GA1.1.995600195.1729188956&semt=ais_hybrid"
                    alt="First slide"
                    style={{ height: '300px' }}
                />
                {/* <Carousel.Caption className='text-white'>
                    <h5>Metro Delicious System</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className='h-25' style={{ height: '400px' }}>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/premium-psd/creative-food-banner-design-template-free-psd-download_839034-262.jpg?size=626&ext=jpg&ga=GA1.1.995600195.1729188956&semt=ais_hybrid
"
                    alt="First slide"
                    style={{ height: '400px' }}
                />
                {/* <Carousel.Caption className='text-white'>
                    <h5>Metro Delicious System</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px' }}>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/premium-psd/creative-food-banner-design-template-free-psd-download_839034-263.jpg?size=626&ext=jpg&ga=GA1.1.995600195.1729188956&semt=ais_hybrid"
                    alt="Second slide"
                    style={{ height: '400px' }}
                />
                {/* <Carousel.Caption >
                    <h5>Metro Delicious System</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px' }}>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/flat-design-food-landing-page_23-2149126180.jpg?size=626&ext=jpg&ga=GA1.1.995600195.1729188956&semt=ais_hybrid"
                    alt="Third slide"
                    style={{ height: '400px' }}
                />
                <Carousel.Caption className='text-light'>
                    {/* <h5>Metro Delicious System</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;