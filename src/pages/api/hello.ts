// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { commentApi } from "./apiFunc";

const {data, error, } = useQuery("post", ()=> commentApi)

