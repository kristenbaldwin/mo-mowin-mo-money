import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Login.css';

class AllLots extends Component {
    render() {
        return (
            <Grid>
                <div className="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 className="display-4">Neighborhood Mow-Down Program</h1>
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                 </div>
                </div>
                <Row>
                <Col xs={12}>
                    <div class="card lotcard">
                      <img class="card-img-top lotimage" src={require("../../images/overgrown3.jpeg")} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">123 Talshire</h5>
                        <p class="card-text">This yard needs mowed.</p>
                        <a href="#" class="btn btn-primary btn-all">View Lot</a>
                      </div>
                    </div>
                  <div class="card lotcard">
                    <img class="card-img-top lotimage" src={require("../../images/overgrown1.jpg")} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">777 Boeing</h5>
                      <p class="card-text">This yard needs mowed.</p>
                      <a href="#" class="btn btn-primary btn-all">View Lot</a>
                    </div>
                  </div>
                  <div class="card">
                    <img class="card-img-top lotimage" src={require("../../images/overgrown2.jpeg")} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">151 Georgia</h5>
                      <p class="card-text">This yard needs mowed.</p>
                      <a href="#" class="btn btn-primary btn-all">View Lot</a>
                    </div>
                  </div>
                  </Col>
                  <Col xs={12}>
                     <div class="card">
                       <img class="card-img-top" src={require("../../images/pseudo-map.JPG")} alt="Card image cap" />
                     </div>
                   </Col>
                </Row>
            </Grid>
        )
    }
}

export default AllLots;