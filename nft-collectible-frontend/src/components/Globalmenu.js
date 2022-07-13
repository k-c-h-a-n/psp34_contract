import React,{useState} from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as S from "./style";

const Globalmenu = () => {
    return (
        <S.Container_G>
            <Navbar expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand ><S.TextBrand_G>ASTAR PSP34 NFT Minting</S.TextBrand_G></Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </S.Container_G>
    )
}

export default Globalmenu;