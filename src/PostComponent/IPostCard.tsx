import React from "react";
import { useState } from "react";
import { Avatar, Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";
import DrawerAppBar from "@/AppBarComponents/appBar";
import { IPost } from "@/Interface/postInterface";

interface Props extends IPost {}

export function PostComponent(props: Props) {
  console.log("Props ==>",props)
  const [count, setCount] = useState(props)

  // function handleCount (){
  //   let newData
  //   setCount(prevData => {
  //     return prevData.map(item =>{
  //       return item.
  //     })
  // })

  return (
    <Stack
      sx={{
        // width: "100%",
        borderRadius: "8px",
        border: "1px solid rgba(52, 64, 84, 0.25)",
        background: " #FFF",
        // maxWidth: {sm: "",md:"827px"}
      }}
      key={props.id}
    >
      <Box
        sx={{
          // width: "827px",
          display: "flex",
          justifyContent: "space-between",
          // flexDirection: {xs: "column", md:"row"},
          alignItems: "center",
          padding: "24px 32px 0px 32px",
          border: "red 2px solid",
        }}
        >
        <Box
          sx={{
            // width: "210px",
            height: "46px",
            border: "red 2px solid",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Avatar
            src={props.avatarBadge}
            alt="user avatar"
            // width={40}
            // height={40}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flexStart",
              gap: "2px",
              // width: "158px",
              height: "46px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Circular Pro",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                color: "#252A31",
              }}
            >
              {props.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Circular Pro",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "450",
                lineHeight: "20px",
                color: "#697D95",
              }}
            >
              {props.date}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // flexDirection:{  md:"row",},
            alignItems: "flex-start",
            gap: "24px",
            // width: "158px",
            // height: "46px",
            border: "red solid 2px",
          }}
        >
          <Image
            src={props.reactions.loveEmoji1}
            alt="reactions"
            width={24}
            height={24}
          />
          <Image
            src={props.repliesIcon}
            width={24}
            height={24}
            alt="reply icon"
          />
          <Image
            src={props.shareIcon}
            width={24}
            height={24}
            alt="share Icon"
          />
        </Box>
      </Box>

      {/* Post title and Post */}
      <Box
        sx={{
          display: "flex",
          padding: "24px 32px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Circular Pro",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "28px",
            color: "#252A31",
            // marginTop: "24px",
          }}
          variant="h4"
        >
          {props.messageTitle}
        </Typography>
        <Typography
          sx={{
            // width: "763px",
            fontFamily: "Circular Pro",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "24px",
            color: "#4F5E71",
          }}
        >
          {props.message}
        </Typography>
      </Box>

      {/* Post Image */}

      {/* {userInfo.length===2 ?   */}
      {/* <Image
                src={item.images.post_image_semi}
                alt="Post Image"
                height={202}
                width={763}
                />
                : */}
      <div
        style={{
          width: "100%",
          // height: "100%",
          background: "blue",
          // display: "block",
        }}
      >
        <Image
          src={props.images.post_image_half}
          alt="Post Image"
          height={0}
          width={0}
          objectFit="cover"
          layout="responsive"
          // style={{ marginLeft: "32px", marginBottom: "24px", }}
        />
      </div>
      {/* Message count and view replies */}
      <Box
        sx={{
          display: "flex",
          padding: "0px 32px 24px 32px",
          justifyContent: "space-between",
          alignItems: " center",
          alignSelf: "stretch",
          // marginBottom: "5px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Image
            src={props.commentIcon}
            width={18}
            height={18}
            alt="comment icon"
          />
          <Typography>{props.commentCount} Replies</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Typography>view replies</Typography>
          <Image
            src={props.viewRepliesIcon}
            width={18}
            height={18}
            alt="views icon"
          />
        </Box>
      </Box>
    </Stack>
  );
}
