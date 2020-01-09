import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import { chartConfigs, dataSource, pieSource, dSource } from '../chartconfigs/data';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Card from 'react-bootstrap/Card'
import ReactFusioncharts from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class View extends Component {

render() {
	return (
			<div>
			 <div className="container-fluid">
                    <div className="row flex-xl-nowrap">
                   
                        <div id="content-body" className="col-12">
                            {/* <!-- heading row --> */}
                            <div className="row">
                                <div className="col-md-12 courier tc "><h2>Web And Mobile App Dashboard</h2></div>
                            </div>
                          
                            <div className="row mt-3 ">
                                <div id="parent1" className="col-lg-6 tc">
                        	    	<Card style={{ width: '100%' }}>
							  		<Card.Body>
									    <ReactFusioncharts
									        type="column2d"
									        width="500"
									        height="400"
									        dataFormat="JSON"
									        dataSource={chartConfigs}
								      	/>
							 		 </Card.Body>
									 </Card>
                                </div>

                                <div id="parent2" className="col-lg-6 tc">
                        	    	<Card style={{ width: '100%' }}>
							  		<Card.Body>
									    <ReactFusioncharts
									        type="line"
									        width="500"
									        height="400"
									        dataFormat="JSON"
									        dataSource={dataSource}
								      	/>
								      	
							 		 </Card.Body>
									 </Card>
								 </div>
                                
                                <div id="parent3" className="col-lg-6 tc">
                                    <Card style={{ width: '100%' }}>
								  		<Card.Body>
										    <ReactFusioncharts
										        type="pie2d"
										        width="500"
										        height="400"
										        dataFormat="JSON"
										        dataSource={pieSource}
									      	/>
								 		 </Card.Body>
									 </Card>
                                </div>

                                <div id="parent4" className="col-lg-6 tc">
                                <Card style={{ width: '100%' }}>
							  		<Card.Body>
									    <ReactFusioncharts
									        type="doughnut2d"
									        width="500"
									        height="400"
									        dataFormat="JSON"
									        dataSource={dSource}
								      />	
							 		 </Card.Body>
									 </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	)
}
}

export default View;