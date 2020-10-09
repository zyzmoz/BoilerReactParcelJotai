import { useAtom } from 'jotai';
import { Container, Button } from '@material-ui/core';
import React from 'react';
import { countAtom } from '~atoms';
import Helmet  from 'react-helmet';

export const App: React.FC = () => {
    const [count, setCount] = useAtom(countAtom);

    return (
        <Container
            style={{height: "100vh", display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column"}} 
        >
            <Helmet title="App"/>
            <div>
                <b>{count}</b>
            </div>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Click</Button>
        </Container>
    )
}