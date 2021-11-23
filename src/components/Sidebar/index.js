import React from 'react'
import { SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarRoute, 
    SideBtnWrap, 
    SideBarMenu, 
    SideBarLink 
} from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                    About
                    </SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to="discover" onClick={toggle}>
                        Discover
                    </SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin">
                        Sign In
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default Sidebar;
