import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fefefe;
    text-align: center;
    padding: 20px;
    
    h1, p {
        margin: 20px 0 20px 0;
    }
`;

export const StyledLink = styled(Link)`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fada0a;
    border-radius: 8px;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.2s ease;
    width: 300px;
    height: 40px;

    &:hover {
        background-color: #ffe74a;
    }
`
