import React from 'react';
import { Button, Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Header, Content } = Layout;

class Rank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 1
        };
    }

    render() {
        return (
            <Layout>
                <Header className="Header-Rank">
                    <div style={{paddingTop: 5}}>
                        <p>
                            <span style={{fontSize: 55, fontWeight: "bold", color: "#97C93C"}}>
                                Le classement des meilleurs Q.
                            </span>
                            <br />
                            <span className="Br">
                                Des gros Q, des petits Q, des Q colorés, des Q bizarres... Tous les Q, sur un seul site.
                                <br/>
                                Voici le classement. On espère que vous aimez car on s'est vraiment cassé le Q pour le faire. Enjoy !
                            </span>
                        </p>
                    </div>
                </Header>

                <Content style={{maxHeight: 460, marginTop: 10, paddingBottom: 200}}>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank-Small"># {this.state.image}</span>
                                <div className="Dislike-Count-Small">109</div>
                                <div className="Like-Count-Small">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                    </div>
                    <Button className="Button-Rank">
                        Je veux plus de Q
                    </Button>
                    <br/>
                    <NavLink className="Button-Rank" style={{ textDecoration: 'none' }} to={'/'}>
                        <span style={{ marginTop: 13 }}>Je veux voter</span>
                    </NavLink>
                </Content>
            </Layout>
        );
    }
}

export default Rank;