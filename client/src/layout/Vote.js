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
            image: 1
        };
    }

    render() {
        return (
            <Layout>
                <Header className="Header">
                    <div style={{ paddingTop: 5 }}>
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

                <Content style={{ maxHeight: 460, marginTop: 30, paddingBottom: 200 }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Button className="Dislike">
                            <Icon type="dislike" style={{ marginLeft: 6, marginTop: 12 }}/>
                        </Button>
                        <div className="Img-Content">
                            <div style={{ display: "flex", flexDirection: "flex-start"}}>
                                <span className="Rank"># {this.state.image}</span>
                                <div className="Dislike-Count">ici</div>
                                <div className="Like-Count">ici</div>
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