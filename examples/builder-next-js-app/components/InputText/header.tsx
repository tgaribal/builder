'use client'
import React, { useState } from "react";
export default async function Header({initialValue ="Hello"} :{initialValue?: string}) {

    async function getContentName() {
        const response = await fetch("https://cdn.builder.io/api/v3/content/page?apiKey=271bdcf584e24ca896dede7a91dfb1cb&query.id=712e67f50b6a45f49c00c69566c91046&fields=name");
        return await response.json();
    }

    const name = await getContentName();
    console.log('this is data: ', name)
    // Copilot translate this to:tsx
    // return (React.createElement("input", {type: "text", value, onChange})
    return (
        <h1 className="flex flex-col gap-2">
            {initialValue}
        </h1>
    )
}