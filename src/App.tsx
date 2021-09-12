import React, { useState } from "react";
import "./App.scss";
import { Button, Container, Header } from "nhsuk-react-components";
import { Form } from "./Components/Form/Form";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { testSchema } from "./EXAMPLE_SCHEMA";
import ReactJson from "react-json-view";
import { Schema } from "./types";

function App() {
  const history = useHistory();

  // Schema as state so can be edited.
  const [schema, setSchema] = useState(testSchema);
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo
            onClick={() => {
              history.push("/");
            }}
          />
          <Header.ServiceName>Data Driven Form</Header.ServiceName>
          <Header.Content>
            <Header.MenuToggle />
          </Header.Content>
        </Header.Container>
      </Header>
      <Container>
        <Switch>
          <Route path='/:pagePath'>
            <Form schema={schema} />
          </Route>
          <Route path='/'>
            <h1>Schema used</h1>
            This JSON tree is interactive. <br />
            Edit/Add/Remove values, click Go to form to see your changes. <br />
            <br />
            <Button
              onClick={() => {
                history.push(schema.pages[0].path);
              }}
            >
              Go to form
            </Button>
            <ReactJson
              src={schema}
              onEdit={(e) => {
                const newSchema = e.updated_src as Schema;
                if (newSchema) {
                  setSchema({ ...newSchema });
                }
              }}
              onAdd={(e) => {
                const newSchema = e.updated_src as Schema;
                if (newSchema) {
                  setSchema({ ...newSchema });
                }
              }}
              onDelete={(e) => {
                const newSchema = e.updated_src as Schema;
                if (newSchema) {
                  setSchema({ ...newSchema });
                }
              }}
            />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
