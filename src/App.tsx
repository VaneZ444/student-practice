import './App.css';

import {Flex, Layout} from 'antd';
import React, {useEffect} from 'react';
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

    const [state] = React.useState(0);

    useEffect(() => {
        console.log(state);
    }, []);

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
