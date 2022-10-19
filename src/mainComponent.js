import { useState } from "react";
import { useMetafi } from "@metafi/metafi-react-package";
import "./styles.css";

const MainComponent = (props) => {
  const {
    ShowWallet,
    TransferTokens,
    InitMetafi,
    Disconnect,
    assets
  } = useMetafi();
  const [userID, setUserID] = useState(null);
  const [isClickedSignIn, setIsClickedSignedIn] = useState(false);

  const handleChange = (event) => {
    setUserID(event.target.value);
  };

  const handleDisconnect = () => {
    Disconnect(userID);
    setUserID(null);
    setIsClickedSignedIn(false);
  };

  const clickSignIn = () => {
    setIsClickedSignedIn(true);
    InitMetafi(userID);
  };

  return (
    <div className="main-container">
      <h2>Your Game</h2>
      {!isClickedSignIn && (
        <>
          <input
            onChange={handleChange}
            value={userID}
            className="main-button"
            type="text"
            id="emailBox"
            placeholder="enter an email or random string"
          />
          <button className="main-button" onClick={clickSignIn}>
            Sign In
          </button>
        </>
      )}
      {isClickedSignIn && (
        <>
          <select
            className="main-button"
            id="themeList"
            onChange={() => props.selectTheme()}
          >
            <option> ------Choose theme------ </option>
            <option value={0}> Default </option>
            <option value={1}> Dark mode </option>
            <option value={2}> Sunrise </option>
            <option value={3}> Ultraviolet </option>
          </select>

          <label className="info-label">
            (P.S. You can also make your own theme in themes.js)
          </label>

          <button className="main-button" onClick={() => ShowWallet(userID)}>
            Show wallet
          </button>

          <button
            className="main-button"
            onClick={() =>
              TransferTokens({
                userIdentifier: userID,
                to: "0x40562Cf2E90f23b3969d782B5c8f134A77069b49",
                amount: "0.0001",
                currency: assets.goerli_eth
              })
            }
          >
            Send 0.01 ETH (testnet)
          </button>

          <button className="main-button" onClick={handleDisconnect}>
            Disconnect
          </button>
        </>
      )}
      <label className="info-label" style={{ marginTop: "3em" }}>
        test user: "test@gmail.com", password: "Test1234"
      </label>
    </div>
  );
};

export default MainComponent;
