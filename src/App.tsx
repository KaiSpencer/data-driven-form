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

const testSchema: Schema = {
  title: "My first form",
  pages: [
    {
      title: "Page 1",
      path: "page-1",
      nextPath: "/page-2",
      backlink: undefined,
      components: [
        {
          id: "hereAreSomeRadios",
          type: "Radios",
          title: "Here are some Radios",
          options: [
            { displayText: "Option 1", id: "1" },
            { displayText: "Option 2", id: "2" },
            { displayText: "Option 3", id: "3" },
            { displayText: "Option 4", id: "4" },
            { displayText: "Option 5", id: "5" },
            { displayText: "Option 6", id: "6" },
          ],
        },
      ],
    },
    {
      title: "Page 2",
      path: "page-2",
      nextPath: undefined,
      backlink: { displayText: "Back to page 1", route: "/page-1" },
      components: [
        {
          id: "hereAreSomeCheckboxes",
          type: "Checkbox",
          title: "Here are some Checkboxes",
          hint: "You can have hints too",
          options: [
            { displayText: "Checkbox ", id: "1" },
            { displayText: "Disabled by default", id: "2" },
            { displayText: "Checked by default", id: "3" },
          ],
        },
      ],
    },
  ],
};
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
