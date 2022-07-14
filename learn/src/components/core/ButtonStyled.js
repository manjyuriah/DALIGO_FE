import React from "react";
import styled, { css } from 'styled-components';
import { darken, lighten } from "polished";

const colorStyles = css`
    ${({theme, color}) =>{
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover{
                background: ${lighten(0.1, selected)};
            }
            &:active{
                background: ${darken(0.1, selected)};
            }
            ${props => props.outline && css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `}
        `;
    }}
`;

const sizes = {
    large: {
        padding: '1.5rem 2rem',
        fontSize: '1.5rem'
    },
    medium: {
        padding: '1rem 1.5rem',
        fontSize: '1.25rem'
    },
    small: {
        padding: '0.7rem 1rem',
        fontSize: '1rem'
    },
};

const sizeStyles = css`
    ${({size}) => css`
        padding: ${sizes[size].padding};
        font-size: ${sizes[size].fontSize};
    `}
`;

const fullWidthStyle = css`
    ${props => props.fullWidth && css`
        width: 100%;
        justify-content: center;
        &:not(:first-child) {
            margin-left: 0;
            margin-top: 1rem;
        }
    `}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 0 2px; // 화면상 보여주기위한 마진값(없애도됩니다)
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${sizeStyles}
    /* 색상 */
    ${colorStyles}
    /* 풀 사이즈(화면꽉차게) */
    ${fullWidthStyle}
`;

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default function Button({children, color, size, outline,fullWidth, ...rest }) {
    return(
        <StyledButton
        color={color}
        size={size}
        outline={outline}
        fullWidth={fullWidth}
        {...rest}>
            {children}
        </StyledButton>
    )
}
