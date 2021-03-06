import styled from "styled-components";
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
    position: absolute;
    top: 20px;
    left: 1rem;

    svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: ${ (({ theme }) => theme.color.text) };
    }
`;

const SettingsButton = styled(Link)`
    position: absolute;
    top: 20px;
    right: 1rem;
    
    svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: ${ (({ theme }) => theme.color.text) };
    }
`;

export { BackButton, SettingsButton };