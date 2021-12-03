import React from 'react';
import {Image,Container,Row,Col} from 'react-bootstrap'

const ProfilePhoto = () => {
    return (
    <div>
        <Container>
        <Row>
        
                <Col xs={6} md={4}>
                <Image style={{height:'300px'}} className="img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7aa9d1c-f754-40ec-bab9-af705b19ca02/del39zw-af5e1c57-39a0-4e9a-a948-c061f52a958f.jpg/v1/fill/w_828,h_828,q_75,strp/gdfgdhhdf_by_meowsticthemagicscat_del39zw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI4IiwicGF0aCI6IlwvZlwvYzdhYTlkMWMtZjc1NC00MGVjLWJhYjktYWY3MDViMTljYTAyXC9kZWwzOXp3LWFmNWUxYzU3LTM5YTAtNGU5YS1hOTQ4LWMwNjFmNTJhOTU4Zi5qcGciLCJ3aWR0aCI6Ijw9ODI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oDUEm2ypPGs5S4lN-pFs1Kviiom5KHT8RR8VMQAJgjA" roundedCircle />
                </Col>
                
        </Row>
        </Container>
        <br/>



    </div>
    )
}

export default ProfilePhoto