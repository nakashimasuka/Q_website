import React from 'react';
import { Layout } from 'antd';
import Quincaillerie from '../assets/logo.png';
import './styles.css';

const { Header, Content, Footer } = Layout;

class Vote extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: '#F00000', padding: 0, width: "80%" }}>
                    <p>Header ici</p>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div style={{ padding: 100, minHeight: 550 }}>
                        <p>plop</p>
                    </div>
                </Content>
                <Footer style={{ marginBottom: '1', textAlign: 'center' }}>
                    <img width={200} height={45} src={Quincaillerie} alt={'© La Quincaillerie'}/>
                </Footer>
            </Layout>
        );
    }
}

export default Vote;