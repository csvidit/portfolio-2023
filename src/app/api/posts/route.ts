import { NextRequest, NextResponse } from "next/server";
import contentfulClient from "@/contentful.config";

// export async function GET()
// {
//     try {
//         const response = await contentfulClient.getEntries({
//             content_type: "post",
//         })
//         return NextResponse.json({ posts: response.items, status: 200 });
//     }
//     catch (err) { 
//         return NextResponse.json({ error: err, status: 500 });
//     }
    
// }