import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function CustomCard(props) {
  return (
    <Card sx={{ maxWidth: 275, margin: "64px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "24px" }}>
          {props.title}
        </Typography>
        <Typography variant="body1">{props.body}</Typography>
      </CardContent>
      <CardActions>{props.children}</CardActions>
    </Card>
  );
}
