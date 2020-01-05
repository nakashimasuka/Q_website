import React from 'react';
import { Layout } from 'antd';
import Quincaillerie from '../assets/logo.png';
import './styles.css';

const { Header, Content, Footer } = Layout;

class Vote extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}><p>Header ici</p></Header>
                <Content>
                    <p>plop</p>
                </Content>
                <Footer style={{ position: 'sticky', bottom: '0', textAlign: 'center' }}>
                    <img width={200} height={50} src={Quincaillerie}/>
                </Footer>
            </Layout>
        );
    }
}

export default Vote;