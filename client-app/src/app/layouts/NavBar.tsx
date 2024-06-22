import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";





export default function NavBar() {
    const {activityStore} = useStore();


    return(
    <Menu inverted fixed="top">
        <Container>
            <Menu.Item as={NavLink} to='/' header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name="Activities"/>
            <Menu.Item><Button as={NavLink} to='/createActivity' positive content="Create activity"/></Menu.Item>
            <Menu.Item><Button onClick={() => activityStore.openForm()} positive content="Logout"/></Menu.Item>
        </Container>
    </Menu>)

}