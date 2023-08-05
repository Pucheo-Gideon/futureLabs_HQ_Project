import React, { useState } from "react";
import { Avatar, Box, Typography, Stack, Container, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";

import add_circle from "/images/add_circle.png";
import text_format from "public/images/text_format.png";
import emoji_satisfied from "/images/emoji_satisfied.png";
import at_sign from "at-sign.png";
import voice_chat from "/images/voice_chat.png";
import keyboard_voice from "/images/keyboard_voice.png";

import { IPost } from "@/Interface/postInterface";
import { postArrays } from "@/Interface/postInterface";
import { Post_4_CommentInfo } from "@/Interface/post_4CommentInterface";
import { CommentCard } from "./CommentCards";
import { CommentedPostCard } from "./CommentedPostCard";

interface user {
  text?: string,
  file?: string
}
export function PostWithComment() {

  // state for comment message 

  const [comment, setComment] = useState<user>({
    text: "",
    file: ""
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = event.target
    setComment(prevState => ({...prevState, [name]:value}))
    }

  const handleOnSubmit = (event:React.FormEvent)=> {
    event.preventDefault()
    console.log(comment.text)
    console.log(comment.file)
  }

  return (
    // Post and comment wrapper
    <Stack
      sx={{
        display: " flex",
        // width: "100%",
        maxWidth: {sm: "none",md:"320px"},
        padding: " 14px 15px",
        flexDirection: "column",
        gap: "20px",
        border: "red 2px solid",
      }}
    >
      {Post_4_CommentInfo.map((item) => (
        <CommentedPostCard {...item} />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            // fontFamily: Circular Pro,
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "450",
            lineHeight: "20px",
            marginRight: "210px",
          }}
        >
          Comment
        </Typography>
        {/* Post to comment on */}
        {postArrays.map((item) => {
          return <CommentCard {...item} />;
        })}
      </Box>
      {/* input field and icons */}
      <Box
        sx={{
          display: "flex",
          padding: "14px 15px",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          flexShrink: "0",
          borderRadius: "9px",
          border: "1.5px solid var(--gray-400, #98A2B3)",
          background: "var(--gray-50, #F9FAFB)",
        }}
      >
        <form onSubmit={handleOnSubmit}>
          <TextField

            // defaultValue="Reply...."
            // variant="filled"
            // fullWidth
            sx={{
              width: "100%",
              outline: "none",
            }}
            // value={comment.text}
            onChange={handleChange}
            name="text"
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "50px",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexDirection: "row",
                // marginRight: "auto"
              }}
            >
              <Image
                src="/images/add_circle.png"
                alt="add_circle"
                height={18}
                width={18}
              />
              <Image
                src={text_format}
                alt="text_format"
                height={18}
                width={18}
              />
              <Image
                src="/images/emoji_satisfied.png"
                alt="emoji_satisfied"
                height={18}
                width={18}
              />
              <Image
                src="/images/at-sign.png"
                alt="add-sign"
                height={18}
                width={18}
              />
              <Image
                src="/images/voice_chat.png"
                alt="voice_chat"
                height={18}
                width={18}
              />
              <Image
                src="/images/keyboard_voice.png"
                alt="keyboard_voice"
                height={18}
                width={18}
              />
            </Box>
            <Button type="submit">
              <Image
                src="/images/Send.png"
                alt="keyboard_voice"
                height={18}
                width={18}
              />
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  );
}
