import React from "react";
import "./App.scss";
import { Button, Container, Header } from "nhsuk-react-components";
import { Form, Schema } from "./Components/Form/Form";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { testSchema } from "./EXAMPLE_SCHEMA";

function App() {
  const history = useHistory();
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo href='/' />
          <Header.ServiceName>Data Driven Form</Header.ServiceName>
          <Header.Content>
            <Header.MenuToggle />
          </Header.Content>
        </Header.Container>
      </Header>
      <Container>
        <Switch>
          <Route path='/:pagePath'>
            <Form schema={testSchema} />
          </Route>
          <Route path='/'>
            <Button
              onClick={() => {
                history.push(testSchema.pages[0].path);
              }}
            >
              Go to form
            </Button>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
