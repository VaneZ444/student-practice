import React from 'react';
import './App.css';
import {createBrowserRouter,} from "react-router-dom";
import {Flex, Layout} from 'antd';
import {RouterProvider} from "react-router";

const {Header, Footer, Sider, Content} = Layout;

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
]);

function App() {
    return (
        <Flex>
            <Layout>
                <Sider width="25%">
                    <Layout>
                        <Header>CyberSportsPortal</Header>
                    </Layout>
                </Sider>
                <Layout>
                    <Content><RouterProvider router={router}/></Content>
                </Layout>
            </Layout>
        </Flex>
    );
}

export default App;
