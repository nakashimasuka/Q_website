import React from 'react';
import { Layout } from 'antd';
import Quincaillerie from '../assets/logo.png';
import './styles.css';

const { Header, Content, Footer } = Layout;

class Vote extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="Header">
                    <div style={{ paddingTop: 5 }}>
                        <p>
                            <span style={{ fontSize: 45, fontWeight: "bold", color: "#97C93C" }}>
                                Le meilleur site de Q du monde.
                            </span>
                            <br />
                            <span className={"Br"}>
                                On est un peu obsédés par les Q, du coup on a décidé de créer un site dédié à ça.
                                <br/>
                                On espère que vous aimerez tout autant que nous. Cliquez sur le bouton et découvrez
                                <br/>
                                des Q du monde entier, et votez pour vos préférés !
                            </span>
                        </p>
                    </div>
                </Header>
                <Content style={{ display: "flex", justifyContent: "center", maxHeight: 550, marginTop: 20, paddingBottom: 300 }}>
                    <div className="Img-Content">
                    </div>
                </Content>
                <Footer style={{ marginTop: 0, textAlign: 'center' }}>
                    <img width={200} height={35} src={Quincaillerie} alt={'© La Quincaillerie'}/>
                </Footer>
            </Layout>
        );
    }
}

export default Vote;