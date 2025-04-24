import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
function MarketingCarousel() {
    const imageStyle = {
        height: '630px',
        objectFit: 'cover',
    };
    return (
        <div
            style={{
                // backgroundColor: '#CCE5FF',
                width: '100%',
                marginTop: '50px',
                height: '100vh',
                overflowY: 'scroll',
                position: 'fixed'
            }}
        >
            <div style={{ width: '100%', margin: '1px auto' }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            style={imageStyle}
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Digital Growth</h3>
                            <p>Boost your business through online strategies.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            style={imageStyle}
                            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Social Media Marketing</h3>
                            <p>Reach customers where they are most active.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            style={imageStyle}
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Analytics & Insights</h3>
                            <p>Track performance and fine-tune your campaigns.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Button></Button>
            <div
                style={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid black',
                    borderRadius: '8px',
                }}
            >
                <Container style={{ display: 'flex', gap: '30px', marginTop: '4px' }}>
                    <Row>
                        <Col >
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <div className="card-img-container">
                                    <Card.Img
                                        className="hover-zoom"
                                        variant="top"
                                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                                        alt="Tech workspace"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MarketingCarousel;
