import { Col, Grid, Row } from "rsuite"



const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-10 text-center bottom-0  w-full">
                <Grid fluid>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                            <div>LOGO</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                            <div>Quick Links</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                            <div>Social Links</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className="text-center">
                            <div>Contact</div>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        </>
    )
}

export default Footer