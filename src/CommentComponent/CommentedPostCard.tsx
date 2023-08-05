import React from "react";
import { Stack, Box, Avatar, Typography } from "@mui/material";
import { IPost } from "@/Interface/postInterface";
import {
  IPost_4_Comment,
  Post_4_CommentInfo,
} from "@/Interface/post_4CommentInterface";
import Image from "next/image";

interface Props extends IPost_4_Comment {}

export function CommentedPostCard(props: Props) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
          // border: "2px solid red",
        maxWidth: "827px",
        borderRadius: "8px",
        border: "1px solid rgba(52, 64, 84, 0.25)",
      }}
    >
      {/* Avatar, name and reaction Icon, count */}
      <Box
        sx={{
          display: "flex",
          padding: "8px 16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Avatar and name */}
        <Box
          sx={{
            // width: "210px",
            // height: "46px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Avatar src={props.avatarBadge} alt="user avatar" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Circular Pro",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "20px",
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

        {/* reaction and count */}
      </Box>

      <Box
        sx={{
          display: "flex",

          padding: " 4px 16px 12px 16px",
          flexDirection: " column",
          alignItems: "flexStart",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Circular Pro",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "20px",
            color: "#252A31",
            // marginTop: "24px",
          }}
          variant="h4"
        >
          {props.messageTitle}
        </Typography>

        {/* <div
          style={{
            width: "100%",
            background: "blue",
          }}
        >
          <Image
            src={props.images.post_image_half}
            alt="Post Image"
            height={0}
            width={0}
            objectFit="cover"
            layout="responsive"
          />
        </div> */}

        <Typography
          sx={{
            // width: "763px",
            fontFamily: "Circular Pro",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "20px",
            color: "#4F5E71",
          }}
        >
          {props.message}
        </Typography>
      </Box>
    </Stack>
  );
}
