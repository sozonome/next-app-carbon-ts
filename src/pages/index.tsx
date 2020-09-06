import {
  CodeSnippet,
  Grid,
  Row,
  DatePicker,
  DatePickerInput,
  Column,
} from "carbon-components-react";
import * as clipboardy from "clipboardy";
import { useState } from "react";

export default function Home() {
  const [codeText] = useState<string>("Hello Guys");

  return (
    <>
      <Row>
        <Column>
          <CodeSnippet
            type="single"
            feedback="Copied"
            onClick={() => clipboardy.write(codeText)}
          >
            {codeText}
          </CodeSnippet>
        </Column>
      </Row>
      <Row>
        <Column>
          <DatePicker datePickerType="single">
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Date"
              id="Date"
            />
          </DatePicker>
        </Column>
      </Row>
    </>
  );
}
