import React from 'react';
import BlogList from './blogList'
import User from './UserItem'
import {Container} from '@material-ui/core'


function App() {
  return (
    <Container maxWidth="md">
      <BlogList />
      {/* <User /> */}
    </Container>
  );
}

export default App;
