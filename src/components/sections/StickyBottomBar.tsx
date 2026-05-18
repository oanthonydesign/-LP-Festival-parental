"use client";

import React from "react";
import { useCountdown, TARGET_DATE } from "@/hooks/useCountdown";

function HourglassIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
        >
            <path
                d="M5 2H19M5 22H19M5 2C5 2 5 9 12 12M19 2C19 2 19 9 12 12M5 22C5 22 5 15 12 12M19 22C19 22 19 15 12 12"
                stroke="#191919"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 12L8 17H16L12 12Z"
                fill="#191919"
            />
            <path
                d="M12 12L8 7H16L12 12Z"
                fill="#191919"
                fillOpacity="0.3"
            />
        </svg>
    );
}

export default function StickyBottomBar() {
    return null;
}
