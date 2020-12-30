import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 38px;
    color: #3a3a3a;
    margin-top: 55px;
    max-width: 460px;
    line-height: 56px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 35px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${props =>
        props.hasError &&
        css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3
        }
    }

    button {
        width: 210px;
        height: 60px;
        background: #04d361;
        border-radius: 0px 5px 5px 0;
        border: 0;
        font-weight: bold;
        color: #fff;
        transition: background-color 0.4s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.4s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(20px)
        }
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%
        }

        div {
            margin-left: 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }

        }
        svg {
            margin-left: auto;
        }

    }       
`;