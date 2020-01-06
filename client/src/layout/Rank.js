import React from 'react';
import { Button, Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Header, Content } = Layout;

class Rank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 1 //classement de l'image entré en brut -> à changer lorsqu'il y aura un serveur
        };
    }

    render() {
        return (
            <Layout>
                {/* Header de la page Rank */}
                <Header className="Header-Rank">
                    <div style={{paddingTop: 5}}>
                        {/* Texte du header */}
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

                <Content className="Content-rank">
                    <div className="Content-body-rank">
                        {/*
                            Duplication de code x4 correspondant aux 4 images de la 1ère ligne de la page
                            -> à simplifier / créer une autre classe
                        */}
                        <div className="Img-Score">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                {/*
                                    3 choses:
                                    - classement de l'image
                                    - compte de dislike
                                    - compte de like
                                */}
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
                        {/*
                            Duplication de code x4 correspondant aux 4 images de la 2ème ligne de la page
                            -> à simplifier / créer une autre classe
                        */}
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
                        {/* Fin de la duplication de code */}
                    </div>
                    {/* 1er boutton qui n'execute aucune action */}
                    <Button className="Button-Rank">
                        Je veux plus de Q
                    </Button>
                    <br/>
                    {/* 2ème boutton qui permet de naviguer vers la page de vote */}
                    <NavLink className="Button-Rank" style={{ textDecoration: 'none' }} to={'/'}>
                        <span style={{ marginTop: 13 }}>Je veux voter</span>
                    </NavLink>
                </Content>
            </Layout>
        );
    }
}

export default Rank;