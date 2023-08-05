import React from "react";
import { Stack, Box, Avatar, Typography } from "@mui/material";
import { IPost } from "@/Interface/postInterface";
import Image from "next/image";

interface Props extends IPost {}

export function CommentCard(props: Props) {
  return (
    <Stack
      sx={{
        display: "flex",
        padding: "4px 16px 12px 16px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        borderRadius: "8px",
        border: "1px solid rgba(52, 64, 84, 0.25)",
        // border: "red 2px solid",
      }}
    >
      {/* Avatar, name and reaction Icon, count */}
      <Box
        sx={{
          display: "flex",
          //   padding: "8px 16px",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "35px",
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
        </Box>

        {/* reaction and count */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            // width: "158px",
            height: "46px",
          }}
        >
          <Image
            src={props.reactions.loveEmoji1}
            alt="reactions"
            width={24}
            height={24}
          />
          <Typography>{props.likesCount}</Typography>
        </Box>
      </Box>

      <Box>
        {/* <Typography
          sx={{
            fontFamily: "Circular Pro",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "20px",
            color: "#252A31",
          }}
          variant="h4"
        >
          {props.messageTitle}
        </Typography> */}

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
          />
        </div>

        <Typography
          sx={{
            // width: "763px",
            fontFamily: "Circular Pro",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "20px",
            color: "#4F5E71",
            marginTop: "12px",
          }}
        >
          {props.message}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Circular Pro",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "16px",
            color: "#697D95",
            marginTop: "12px",
          }}
        >
          {props.date}
        </Typography>
      </Box>
    </Stack>
  );
}
