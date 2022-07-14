
//total header - title
import { useState } from "react";
import styled,{ ThemeProvider } from 'styled-components';
import Button from "./ButtonStyled";

const Block = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;
const ButtonGroup = styled.div`
    &:not(:first-child) {
        margin-top: 1rem;
    }
`;

export function Styled({props}) {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    }
    const onConfirm = () => {
        setDialog(false);
    }
    const onCancel = () => {
        setDialog(false);
    }
    return(
        <>
            <main>
                <ThemeProvider
                    theme={{
                        palette:{
                            //색상리스트입니다
                            blue: '#2C80FF',
                            gray: '#495057',
                            pink: '#f06595',
                        }
                    }}
                >
                    <Block>
                        <ButtonGroup>
                            <Button variant='mainbtn-large' size='large'>L-Button1</Button>
                            <Button>Button2</Button>
                            <Button size='small'>S-Button3</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button color='gray' size='large'>Button4</Button>
                            <Button color='gray'>Button5</Button>
                            <Button color='gray' size='small'>Button6</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button color='pink' size='large'>Button7</Button>
                            <Button color='pink'>Button8</Button>
                            <Button color='pink' size='small'>Button9</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button size='large' outline>Button10</Button>
                            <Button color='gray' outline>Button11</Button>
                            <Button color='pink' size='small' outline>Button12</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button size='large' fullWidth>Button13</Button>
                            <Button color='gray' size='large' fullWidth>Button14</Button>
                            <Button color='pink' size='large' fullWidth onClick={onClick}>Button15</Button>
                        </ButtonGroup>
                    </Block>
                </ThemeProvider>
            </main>
        </>
    );
}


// const Footer = () => {
//     return(
//      <>
//         <Styled></Styled>
//      </>   
//     )
// }
// export default Footer;