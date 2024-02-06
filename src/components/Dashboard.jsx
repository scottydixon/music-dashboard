import React, { useState, useEffect } from "react";
import OnlineCard from "./OnlineCard";
import CustomCard from "./Card";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, SetQuality] = useState(1);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!isOnline) {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        "Your application is offline. You won't be able to share or stream music to other devices.",
      ]);
    }
  }, [isOnline]);

  useEffect(() => {
    if (volume > 80) {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        "Listening to music at a high volume could cause long-term hearing loss.",
      ]);
    }
  }, [volume]);

  useEffect(() => {
    if (quality === 1) {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        "Music quality is degraded. Increase quality if your connection allows it.",
      ]);
    }
  }, [quality]);

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleQualityChange = (event) => {
    SetQuality(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <OnlineCard isOnline={isOnline} setIsOnline={setIsOnline} />
        <CustomCard
          title="Master Volume"
          body="Overrides all other sound settings in this application  "
        >
          <Slider
            value={volume}
            onChange={(event, newValue) => setVolume(newValue)}
            min={0}
            max={100}
            step={10}
          />
        </CustomCard>
        <CustomCard
          title="Sound Quality"
          body="Manually control the music quality in the event of a poor connection"
        >
          <Select
            value={quality}
            onChange={(event) => SetQuality(event.target.value)}
          >
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </CustomCard>
      </div>
      <Typography variant="h5">System Preferences</Typography>
      {notifications.length > 0 && (
        <div>
          <Typography variant="h6">System Notifications</Typography>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
