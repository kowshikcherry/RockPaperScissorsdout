import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div>
            <img
              alt="rules"
              className="rulesimage"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
