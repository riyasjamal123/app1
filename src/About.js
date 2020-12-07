import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Fade cascade>
      <Card raised={true} style={{maxWidth:"500px",margin:"auto"}}>
        <CardContent>
          <Row>
              <Col>
                <Row style={{alignItems:"center"}}>
                  <Col>
              <Typography variant="h2">Team</Typography>
                  </Col>
                  <Col>
                    <Button size="large" style={{float:"right"}} onClick={()=>window.open("xxxxxxxxxxx")}>
                    <i className="fab fa-github"/>&nbsp;Source
                    </Button>
                  </Col>
                </Row>
              <br />
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{ width: "100px", height: "100px", marginRight:"12px" }}
                      src="./images/devs/ccc.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">vvvvvvvv</Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography variant="subtitle2">
                          Deep Learning Practitioner
                        </Typography>
                        <Tooltip title="Github:gggggggggg">
                        <IconButton onClick={()=>window.open("eeeeeee")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Linkedin: dddfd">
                        <IconButton onClick={()=>window.open("https:/ ")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram:">
                        <IconButton onClick={()=>window.open("http")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: ">
                        <IconButton onClick={()=>window.open("")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/a" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">defefefe</Typography>
                    }
                    secondary={
                      <React.Fragment>
                      <Typography variant="subtitle2">
                          Deep Learning Practitioner
                      </Typography>
                        <Tooltip title="Github:">
                      <IconButton  onClick={()=>window.open("deefefe")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Linkedin:">
                        <IconButton onClick={()=>window.open("https:")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram:">
                        <IconButton onClick={()=>window.open("https:")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: ">
                        <IconButton onClick={()=>window.open("mailto:")}>
                        <i className="fas fa-en"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h5">ddeded</Typography>}
                    secondary={
                      <React.Fragment>
                      <Typography variant="subtitle2">
                          Full Stack Developer
                      </Typography>
                        <Tooltip title="Github:">
                      <IconButton onClick={()=>window.open("https:")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Linkedin: /in/joelfintan">
                        <IconButton onClick={()=>window.open("https://")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram: ">
                        <IconButton onClick={()=>window.open("https:")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: ">
                        <IconButton onClick={()=>window.open("mailto:")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/anay.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">wdqdqwdwd</Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography variant="subtitle2">Domain Expert</Typography>
                        <Tooltip title="Linkedin:">
                        <IconButton onClick={()=>window.open("https://www.linkedin.com/")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: ">
                        <IconButton onClick={()=>window.open("mailto:ddwd")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
            <br/>
              </List>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* TODO */}
            </Col>
          </Row>
        </CardContent>
        </Card>
        </Fade>
    </div>
  );
};
export default About;
