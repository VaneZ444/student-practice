import './App.css';

import {Flex, Layout} from 'antd';
import React from 'react';
import {RouterProvider} from "react-router";
import {createBrowserRouter,} from "react-router-dom";

const {Header, Sider, Content} = Layout;

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
