import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function OnlineCard(props) {
  return (
    <Card sx={{ maxWidth: 275, margin: "64px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "24px" }}>
          Online Mode
        </Typography>
        <Typography variant="body1">
          Is the application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          {...label}
          defaultChecked={props.isOnline}
          onChange={() => props.setIsOnline(!props.isOnline)}
        />
      </CardActions>
    </Card>
  );
}
