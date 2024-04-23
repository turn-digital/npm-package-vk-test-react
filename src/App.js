import "./App.css";

import "@doofiss/web-components-test-vk/es/components/button/index.js";
import "@doofiss/web-components-test-vk/es/components/tooltip/index.js";
import "@doofiss/web-components-test-vk/es/components/turn-status-indicator/index.js";
import "@doofiss/web-components-test-vk/es/components/turn-section-title/index.js";

function App() {
  return (
    <div className="App">
      <cds-section-title
        title="Propsed Title"
        tooltipText="Propsed Tooltip Text"
        showTooltip={true}
      ></cds-section-title>
      <br />
      <br />
      <br />
      <br />
      <br />
      <cds-button>Button</cds-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <cds-status-indicator
        statusIcon="checkmark--filled-green"
        statusText="Gaida parakstu no klienta"
        date="01.01.2024"
      ></cds-status-indicator>
      <cds-status-indicator
        statusIcon="checkmark--filled-blue"
        statusText="Gaida parakstu no klienta"
      ></cds-status-indicator>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
