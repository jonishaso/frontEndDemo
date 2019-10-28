import React from 'react';
import BlogContainer from './BlogContainer'
import User from './UserItem'
import {Container} from '@material-ui/core'


function App() {
  return (
    <Container maxWidth="md">
      <BlogContainer />
      {/* <User /> */}
    </Container>
  );
}

export default App;
