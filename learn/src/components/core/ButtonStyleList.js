
//total header - title
import { useState } from "react";
import styled,{css, ThemeProvider} from 'styled-components';
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
                            blue: '#2C80FF',
                            gray: '#495057',
                            pink: '#f06595',
                        }
                    }}
                >
                    <Block>
                        <ButtonGroup>
                            <Button variant='mainbtn-large' size='large'>L-Button</Button>
                            <Button>Button</Button>
                            <Button size='small'>S-Button</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button color='gray' size='large'>Button</Button>
                            <Button color='gray'>Button</Button>
                            <Button color='gray' size='small'>Button</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button color='pink' size='large'>Button</Button>
                            <Button color='pink'>Button</Button>
                            <Button color='pink' size='small'>Button</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button size='large' outline>Button</Button>
                            <Button color='gray' outline>Button</Button>
                            <Button color='pink' size='small' outline>Button</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button size='large' fullWidth>Button</Button>
                            <Button color='gray' size='large' fullWidth>Button</Button>
                            <Button color='pink' size='large' fullWidth onClick={onClick}>Button</Button>
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