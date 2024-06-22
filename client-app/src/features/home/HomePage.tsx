import { Link } from "react-router-dom";
import { Form, Container, Header, Segment, Image, Button} from "semantic-ui-react";

export default function HomePage() {

    return(
        <>
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom:12}}/>
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities!'/>
            </Container>
        </Segment>
        <Segment clearing>
        <Form>
                <Form.Input placeholder='Login' name='title' />
                <Form.Input type="password" placeholder='Password' name='category'/>
                <Button as={Link} to='/register' color="red" floated='right' content='Register'/>
                <Button color='green' as={Link} to='/activities' floated='right' type='button' content='Login'/>
            </Form>
        </Segment>
        </>
    )
}