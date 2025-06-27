/*You submit DockerFile and README.md that has the instructions for how to get the site up and running on localhost:8083 (127.0.0.1:8083)
All components will have at least 2 tests
A test that checks that the component is visible
A test that checks that the background color changed when the component is in the ‘disabled’ state*/

import React, { useState } from "react";
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Label } from './components/Label';
import { Table } from './components/Table';
import { Dropdown } from './components/Dropdown';
import { Radio } from './components/Radio';
import { Hero } from './components/Hero';
import { Image } from './components/Image';
import { Card } from './components/Card';
import { Generic } from './Generic.styles.js';
import fog from './images/fog.jpg';
import hero from './images/hero.jpg';
import doubt from './images/doubt.jpg';

function App() {
  const options = [
    { value: 'going to click', label: 'Click' },
    { value: 'not going to click', label: "Don't click" },
  ];

  function handleDropdownChange(value: string): void {
    console.log('Selected option:', value);
  }

  const [selectedValue, setSelectedValue] = useState("");

  const header: [string, string] = ["If you do:", "If you don't:"]
  const body = [{ ifYouDo: "100% chance", ifYouDont: "0% chance" },];
  const footer = "The decision should be obvious.";

  const message = "Do you dare click the mystery button? Without guidance, it can take you anymore, leaving you lost in the web.";

  return (
    <div>
      <Generic>
        <Hero src={hero} alt={"A hero image"} disabled={true}/>
        <Button label="Mystery Button" disabled={true}/>
        <Text message={message} disabled={true}/>
        <Label disabled={true}>Hmm... what are the chances of you getting lost if you click the mystery button?</Label>
        <Table headers={header} rows={body} footer={footer} disabled={true}/>
        <Image src={doubt} alt="doubt" disabled={true}/>
        <Dropdown options={options} onChange={handleDropdownChange} disabled={true}/>
        <Radio selectedValue={selectedValue} onChange={setSelectedValue} disabled={true}/>
        <Card imageSrc={fog} imageAlt="Fog" title="You Now Know What To Do" description="Move forward with confidence in your decision. I hope you do not regret it." disabled={true}/>
      </Generic>
    </div>
  );
}

export default App;