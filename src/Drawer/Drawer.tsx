import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Post_4_CommentInfo } from "@/Interface/post_4CommentInterface";

const drawerWidth = 240;

// handle dropDown types

interface dropDown {
  classroom: boolean;
  community: boolean;
  project: boolean;
}
export default function PermanentDrawerLeft() {
  // const [dropDown, setDropDown] = React.useState<dropDown>({
  //   classroom:false,
  //   community: true,
  //   project: true
  // });

  // State and callback for community tab
  const [dropDownCommunity, setDropDown] = React.useState(false);
  const handleDropCommunity = () => {
    setDropDown((prevState) => !prevState);
  };

  // State and callback for ClassRoom
  const [dropDownClassroom, setDropDownClassroom] = React.useState(false);
  const handleDropDownClassroom = () => {
    setDropDownClassroom((prevState) => !prevState);
  };

  // State and callback for Project
  const [dropDownProject, setDropDownProject] = React.useState(false);
  const handleDropDownProject = () => {
    setDropDownProject((prevState) => !prevState);
  };
  const [dropDownDirectMessage, setDropDownDirectMessage] = React.useState(false);
  const handleDropDownDirectMessage = () => {
    setDropDownDirectMessage((prevState) => !prevState);
  };

  // const handleDropDown = ()=> {
  //   setDropDown(prevState =>  !prevState)
  // }
  // const handleDropDown = ()=> {
  //   setDropDown(prevState =>  !prevState)
  // }
  // const handleDropDown = () => {
  //   setDropDown(prevState => ({...prevState, classroom: !prevState.classroom}));
  // };
  const [mobileWidth, setMobileWidth] = React.useState(500);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        // background="#ccc"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "72px",
            padding: "0px 24px",
            alignItems: "center",
            alignSelf: "stretch",
            background: "#fff",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={{ color: "#000" }}
          >
            General Announcement
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              marginRight: "24px",
              border: "red 2px solid",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                flexShrink: "0",
                color: "#000000",
              }}
            >
              <FontAwesomeIcon icon={faBell} />
            </span>
            <Stack
              sx={{
                display: "flex",
                padding: "12px 16px",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Avatar alt="Remy Sharp" src="/images/Avatar.png" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  style={{
                    fontFamily: "Circular Pro",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "#344054",
                  }}
                >
                  Olivia Rhye
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Circular Pro",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "450",
                    lineHeight: "16px",
                    color: "#667085",
                  }}
                >
                  FL 23343
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      {
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "500",
              // lineHeight: "28px",
              color: "#00A58E",
              // textAlign: "center",
              margin: "16px 16px 20px 20px",
            }}
          >
            Future HQ
          </Typography>
          <Divider />
          <Box>
            <Stack
              sx={{
                display: "flex",
                padding: "8px",

                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <Typography
                sx={{
                  padding: "8px",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px",
                  // gap: "8px",
                  color: "#BA5D00",
                }}
              >
                Announcement
              </Typography>
            </Stack>
            <Stack
              sx={{
                backgroundColor: "#00A58E",
                display: "flex",
                alignItems: "flex-start",
                alignSelf: "stretch",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  // padding: "8px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "450",
                  lineHeight: "20px",
                  padding: " 12px 8px",
                  color: "#FFF",
                }}
              >
                General Announcement
              </Typography>
            </Stack>
            <Typography
              sx={{
                padding: "8px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "450",
                lineHeight: "20px",
                // gap: "8px",
                color: "#697D95",
              }}
            >
              Class Room Announcement
            </Typography>

            {/* Classroom */}
            {/* {dropDownClassroom && ( */}
            <>
              <Box
                sx={{
                  display: "flex",
                  padding: "4px 8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <Image
                    src="/images/class_icon.png"
                    alt="classroom icon"
                    width={18}
                    height={18}
                    style={{
                      color: "#BA5D00",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "20px",
                      color: "#BA5D00",
                    }}
                  >
                    Classroom
                  </Typography>
                </Stack>
                <Image
                  src={
                    dropDownClassroom
                      ? "/images/keyboard_arrow_up.png"
                      : "/images/keyboard_arrow_down.png"
                  }
                  alt="keyboard arrow down"
                  width={18}
                  height={18}
                  style={{
                    color: "#4F5E71",
                  }}
                  onClick={handleDropDownClassroom}
                />
              </Box>
              {dropDownClassroom && (
                <Stack>
                  {[
                    "Course outline",
                    "Class Schedule",
                    "Assignments",
                    "My Grades",
                    "Class Resources",
                  ].map((item, index) => {
                    return (
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "8px",
                          // alignItems: "center",
                          // gap: "8px",
                        }}
                        key={index}
                      >
                        <Typography
                          sx={{
                            paddingLeft: "8px",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "450",
                            // gap: "8px",
                            // border: "2px solid red",
                            color: "#697D95",
                          }}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              )}
            </>
          </Box>

          {/* Community  */}
          <Stack>
            <Box
              sx={{
                display: "flex",
                padding: "4px 8px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                border: "2px solid red",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "row"
                  gap: "10px",
                }}
              >
                <Image
                  src="/images/community_icon.png"
                  alt="classroom icon"
                  width={18}
                  height={18}
                  style={{
                    color: "#BA5D00",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "#BA5D00",
                  }}
                >
                  Community
                </Typography>
              </Box>
              <Image
                src={
                  dropDownCommunity
                    ? "/images/keyboard_arrow_up.png"
                    : "/images/keyboard_arrow_down.png"
                }
                alt="keyboard arrow down"
                width={18}
                height={18}
                style={{
                  color: "#4F5E71",
                }}
                onClick={handleDropCommunity}
              />
            </Box>
            {dropDownCommunity && (
              <Box>
                {["FutureLabs HQ", "Design 2023"].map((item, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "8px",
                        // alignItems: "center",
                        // gap: "8px",
                      }}
                      key={index}
                    >
                      <Typography
                        sx={{
                          padding: "8px",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "450",
                          // lineHeight: "20px",
                          // gap: "8px",
                          // border: "2px solid red",
                          color: "#697D95",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Stack>

          {/*Create Community  */}
          <Box
            sx={{
              display: "flex",
              padding: "4px 8px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "row"
                  gap: "10px",
                }}
              >
                <Image
                  src="/images/add_icon.png"
                  alt="add icon"
                  width={18}
                  height={18}
                  style={{
                    color: "#BA5D00",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "#4F5E71",
                  }}
                >
                  Create a Community
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Projects */}
          <Box
            sx={{
              display: "flex",
              padding: "4px 8px",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              // border: "2px solid red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // flexDirection: "row"
                gap: "10px",
                border: "2px red solid",
              }}
            >
              <Image
                src="/images/portfolio_icon.png"
                alt="add icon"
                width={18}
                height={18}
                style={{
                  color: "#BA5D00",
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "20px",
                  color: "#BA5D00",
                }}
              >
                Projects
              </Typography>
            </Box>
            <Image
              src={
                dropDownProject
                  ? "/images/keyboard_arrow_up.png"
                  : "/images/keyboard_arrow_down.png"
              }
              alt="keyboard arrow down"
              width={18}
              height={18}
              style={{
                color: "#BA5D00",
              }}
              onClick={handleDropDownProject}
            />
          </Box>

          {/* Direct Message */}
          <Box
            sx={{
              display: "flex",
              padding: "4px 8px",
              justifyContent: "space-between",
              flexDirection: "column",
              // alignItems: "center",
              alignSelf: "stretch",
              // border: "2px solid red",
            }}
          >

            <Box
              sx={{
                display: "flex",
                // flexDirection: "row",
                gap: "10px",
                justifyContent: "space-between",
                border: "2px red solid",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Image
                  src="/images/mail_icon.png"
                  alt="add icon"
                  width={18}
                  height={18}
                  style={{
                    color: "#BA5D00",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "#BA5D00",
                  }}
                >
                  Direct Messages
                </Typography>
              </Box>
              <Image
                src={
                  dropDownDirectMessage
                    ? "/images/keyboard_arrow_up.png"
                    : "/images/keyboard_arrow_down.png"
                }
                alt="keyboard arrow down"
                width={18}
                height={18}
                style={{
                  color: "#4F5E71",
                }}
                onClick={handleDropDownDirectMessage}
              />
            </Box>


           { dropDownDirectMessage 
           && <>
            {Post_4_CommentInfo.map((item, index) => {
              return (
                <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "4px"
                }}
                key={index}
                >
                  <Image
                    src={item.avatarBadge}
                    alt="image avatar"
                    height={32}
                    width={32}
                    />
                  <Typography 
                  sx={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#4F5E71"
                  }}
                  >{item.name}</Typography>
                </Stack>
              );
            })}
            </>
            }
          </Box>
        </Drawer>
      }
    </Box>
  );
}
