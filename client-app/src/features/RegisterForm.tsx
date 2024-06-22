import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";


export default observer ( function RegisterForm(){


    return(
        <Segment clearing>
            <Form autocomplete='off'>
                <Form.Input placeholder='Username' name='Username'/>
                <Form.Input placeholder='Email' name='Email' />
                <Form.Input placeholder='Password' name='Password' />
                <Form.Input placeholder='Confirm password' name='Confirm password' />
                <Button floated='right' positive type='submit' content='Register'/>
                <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
    

})