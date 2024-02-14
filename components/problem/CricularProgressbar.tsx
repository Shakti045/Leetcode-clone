'use client'

import React, { useState, useEffect } from 'react';
type CircularProgressBarProps = {
    radius: number;
    strokeWidth: number;
    progress: number;
    };
const CircularProgressBar = ({ radius, strokeWidth, progress }:CircularProgressBarProps) => {

  const circumference = 2 * Math.PI * radius;
  
  const progressPercentage = progress * 100;

  return (
    <svg className="progress-bar" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-bar-background"
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress-bar-progress"
        stroke="#00cc66"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference - (progressPercentage / 100) * circumference
        }}
      />
      <text    x={radius} y={radius} textAnchor="middle" dy=".3em" className="progress-text">
        {`${progressPercentage}%`}
      </text>
      
    </svg>
  );
};

export default CircularProgressBar;
