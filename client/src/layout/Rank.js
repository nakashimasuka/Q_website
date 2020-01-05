import React from 'react';
import {Button, Layout} from "antd";
import Quincaillerie from "../assets/logo.png";

const { Header, Content, Footer } = Layout;

class Rank extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="Header">
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
                    <div className="Img-Score">
                    </div>
                    <div className="Img-Score">
                    </div>
                    <Button className="Button-Send" icon="vertical-align-top">
                        Envoyez-nous votre Q à tulasvumonq@sitedeq.fr
                    </Button>
                </Content>

                <Footer style={{marginTop: 0, textAlign: 'center'}}>
                    <img width={200} height={35} src={Quincaillerie} alt={'© La Quincaillerie'}/>
                </Footer>
            </Layout>
        );
    }
}

export default Rank;