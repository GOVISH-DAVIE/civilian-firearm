"use client"
import React from "react";
import AppAppBar from "../components/AppAppBar";
import { Box } from "@mui/material";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <React.Fragment>
        <AppAppBar />
        
        <Box mt={10}>
        {
            children
        }
        </Box>
    </React.Fragment>
}