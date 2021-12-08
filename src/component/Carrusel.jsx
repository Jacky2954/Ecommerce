import {ArrowLefOutlined,ArrowRightOutlined} from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height:100vh;
    diplay:flex;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #fff;
    border-radius: 50%;
`

const Slider = () => {
    return (
        <Container>
            <Arrow>
                <ArrowLefOutlined/>
            </Arrow>
            <Arrow>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}