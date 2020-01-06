import React from 'react';
import { Layout, Button, Icon } from 'antd';
import { NavLink } from "react-router-dom";
import Quincaillerie from '../assets/logo.png';
import './styles.css';

const { Header, Content, Footer } = Layout;

class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 1 //classement de l'image entré en brut -> à changer lorsqu'il y aura un serveur
        };
    }

    render() {
        return (
            <Layout>
                {/* Header de la page de vote */}
                <Header className="Header">
                    <div style={{ paddingTop: 5 }}>
                        {/* Texte du header */}
                        <p>
                            <span style={{ fontSize: 55, fontWeight: "bold", color: "#97C93C" }}>
                                Le meilleur site de Q du monde.
                            </span>
                            <br />
                            <span className="Br">
                                On est un peu obsédés par les Q, du coup on a décidé de créer un site dédié à ça.
                                <br/>
                                On espère que vous aimerez tout autant que nous. Cliquez sur le bouton et découvrez
                                <br/>
                                des Q du monde entier, et votez pour vos préférés !
                            </span>
                        </p>
                    </div>
                </Header>

                <Content className="Content">
                    <div className="Content-body">
                        <Button className="Dislike">
                            <Icon type="dislike" style={{ marginLeft: 6, marginTop: 12 }}/>
                        </Button>
                        <div className="Img-Content">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank"># {this.state.image}</span>
                                <div className="Dislike-Count">109</div>
                                <div className="Like-Count">109</div>
                            </div>
                            <div style={{ height: 200 }}>
                            </div>
                        </div>
                        <Button className="Like">
                            <Icon type="like" style={{ marginLeft: 6, marginTop: 7 }}/>
                        </Button>
                    </div>
                    <Button className="Button-Send" icon="vertical-align-top">
                        Envoyez-nous votre Q à tulasvumonq@sitedeq.fr
                    </Button>
                    <br/>
                    <NavLink className="Button" style={{ textDecoration: 'none' }} to={'/rank'}>
                        <span style={{ marginTop: 13 }}>Le classement qui pue pas du Q</span>
                    </NavLink>
                </Content>

                <Footer style={{ marginTop: 0, textAlign: 'center' }}>
                    <img width={200} height={35} src={Quincaillerie} alt={'© La Quincaillerie'}/>
                </Footer>
            </Layout>
        );
    }
}

export default Vote;