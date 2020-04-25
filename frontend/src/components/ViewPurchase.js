import React from 'react';

function ViewPurchase(){
    return (
        <div className = "ViewPurchase">
            <div className="row">
                <div className="col s12 m12">
                  <div className="card light-green">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="col s7 m7">
                                <span className="card-title">Apples - Farmer Joe</span>
                                <span className="card-title">$0.68/each</span>
                                <p>Crab Apples grown from my farm in Riverside, California.</p>
                            </div>
                            <div className="col s5 m5 right-align" style={{paddingRight: "40px"}}>
                                <a className="btn-floating waves-effect waves-light green darken-4" style={{display: "inline-block"}}><i className="material-icons">remove</i></a>
                                <h5 style={{display: "inline-block"}}>10</h5>
                                <a className="btn-floating waves-effect waves-light green darken-4" style={{display: "inline-block"}}><i className="material-icons">add</i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card-action green darken-3">
                      <a href="#" className="white-text">Remove</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPurchase;