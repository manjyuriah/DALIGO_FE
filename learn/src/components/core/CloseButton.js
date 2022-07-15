import React from "react";
import styled from "styled-components";


const CloseButton = () => {
    return(
        <>
            <div className="close-modal">
                <Closewrap>닫기</Closewrap>
            </div>
        </>
    )
}

const Closewrap = styled.button`
    display: flex;
    width: 100px;
    height: 30px;
    border: 1px solid gray;
    background-color: skyblue;
    color: #fff;
`;

export default CloseButton;