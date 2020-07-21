import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,  
  LocationIcon, 
  CakeIcon, 
  Followage, } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />

      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Edidar perfil</EditButton> */}

        <h1>Gustavo Farias</h1>
        <h2>@gustavofars</h2>

        <p>
          Bankrupt Developer at <a href="https://www.linkedin.com/in/gustavofsa">@Home</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Sergipe, Brasil 
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de julho de 2001 
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>123</strong>
          </span>
          <span>
            <strong>101</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;