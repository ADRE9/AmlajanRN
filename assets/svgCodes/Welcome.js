import * as React from "react"
import Svg, { Path, G, Ellipse, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <Path
        d="M93.92 440c85.68 39 224.58 39 310.26 0s85.67-102.31 0-141.33-224.58-39-310.26 0S8.24 401 93.92 440z"
        fill="#f5f5f5"
      />
      <G fill="#e0e0e0">
        <Ellipse cx={397.31} cy={362.53} rx={51.11} ry={24.36} />
        <Ellipse cx={97.78} cy={375.24} rx={51.11} ry={24.36} />
      </G>
      <Path
        fill="#b16668"
        d="M76.78 370.08h-9.37v-16.04h9.37zM105.72 357.94l9.37.32.47-16.97-9.84-.32v16.97z"
      />
      <Path
        d="M70.21 240.3c0 8.94.47 60.78.47 60.78-.22 2.57-2.69 7.15-2.89 16.42-.28 13.44-.78 44.57-.78 44.57a12.34 12.34 0 0010.43.2s9.93-44.27 11.61-57.55c1.46-11.62 4-43.17 4-43.17l7.16 39.26A53.34 53.34 0 0099 315.7c.44 6.15 6.14 37 6.14 37a12.81 12.81 0 0010.82.83s.56-48.4.66-54c.13-6.44-2.68-61.83-2.68-61.83z"
        fill="#37474f"
      />
      <Path
        d="M76.78 365.46v-1.34c.5 0 .81.49 1 1.69a25.5 25.5 0 00.54 2.65 32.19 32.19 0 001.64 4.8c1.32 3.26 2.43 4.48 5.47 8.29a36.74 36.74 0 012.91 3.35c.56 1 .76 3.81-.2 4.45-3.54 2.36-8.91 2.43-12.71 1.31a7.65 7.65 0 01-5.51-6.19c-.14-.87-.09-1.75-.19-2.62a12.39 12.39 0 00-2.34-5.44 15.82 15.82 0 01-1.8-3c-.79-1.93-.16-4.09.34-6 .44-1.66.91-3.48 1.47-3.32v1a7.43 7.43 0 004.69 1.58c1.38.11 4.7-.17 4.69-1.21zM115.19 355.37c.48 0 .88.71 2 1.87a20.69 20.69 0 005.51 4c3.51 1.76 10.33 4.46 13.41 5.85 1.93.87 1.84 3.2-.15 4.52s-6.81 2.28-12.58 1c-3.15-.7-7.25-3.61-9.84-3.45s-7.45.12-9.36-1.2-1.15-4.14-.61-6.56c.59-2.65 1.33-6.77 2.2-6.59v.91c1.13 1.71 6.94 2.4 9.42 1.15zM93 261.55a34.73 34.73 0 0013-7.48s-2.52 4.71-10 9.1l3.62 34.92z"
        fill="#263238"
      />
      <Path
        d="M107.89 218.9c-6.12-20.38-4.91-37.64-6.06-42.92l15.69 21.91a192.46 192.46 0 003.21 21.5c1.81 7.79 4.28 17.5 7.24 23.54a4.9 4.9 0 002.55 2.34c3 1.21 4.34 2.74 6.71 4.49 1.86 1.38 3.27 1.56 3.16 2.12a2.64 2.64 0 01-3.12 1.75 18.33 18.33 0 01-4.14-1.4 24.18 24.18 0 005 6c4.54 3.95 5.19 6.74-2.35 8.11-4.73.87-9-1.4-14.39-11.22a85.61 85.61 0 01-5.33-11.12c-3.6-10-6.32-18.93-8.17-25.1z"
        fill="#b16668"
      />
      <Path
        d="M100.56 170.91c4.87.86 9.69 2 12.68 6.68s7.31 26.77 7.31 26.77-6.28 4.41-13.48 4.22z"
        fill="#5a189a"
      />
      <Path
        d="M100.56 170.91c4.87.86 9.69 2 12.68 6.68s7.31 26.77 7.31 26.77-6.28 4.41-13.48 4.22z"
        opacity={0.1}
      />
      <Path
        d="M67 179.12c-3.27 2.33-20.52 41.29-21.18 44-.89 3.69-.48 7.82 1.33 9.16s5.8-.58 7.89-2.62c4-4 18-33.14 18-33.14z"
        fill="#9a4a4d"
      />
      <Path
        d="M84.15 171c-8 1.92-18 5.13-21.57 12.45s-9 19.21-9 19.21a32.27 32.27 0 0013.16 7.78l4-7-.59 37c6.45 4.7 30.14 7.26 43.72-2.66 0 0-1.66-44.36-1.66-51.27s-3.84-15.2-14.43-15.82z"
        fill="#5a189a"
      />
      <Path d="M70.8 203.35s4-6.91 4.85-8.58l-5 17z" opacity={0.1} />
      <Circle cx={99.31} cy={140.17} r={12.87} fill="#263238" />
      <Path
        d="M77.05 149.32s2.09 9.8 2.93 11.41a4.42 4.42 0 002.56 2.07l-.14-6.89zM79.67 135.28a4.85 4.85 0 00-4 1.41c-1.71 1.75-.75 7.25 1.38 12.63l3.93.45z"
        fill="#263238"
      />
      <Path
        d="M82.16 149.78c-.79.47-1.91-1.05-2.88-2.06s-4.15-2.41-5.73.92 1.4 7.89 3.9 8.68c4.3 1.35 5-1.41 5-1.41l.31 16c5.35 6.86 20.2 6.28 14-.88v-4.73a26.68 26.68 0 005.8.3c3.17-.49 5.16-3 6.12-6.41 1.54-5.5 2.13-10 .82-20.77-1.43-11.86-15.23-12-22.68-7.29s-4.66 17.65-4.66 17.65z"
        fill="#b16668"
      />
      <Path
        d="M82.16 151.1c-.4 0-1.9-2.49-2.88-3.38-1.36-1.24.39-12.44.39-12.44a5.42 5.42 0 01.94-6c1.86-2.05 4.46-4.56 12.9-3.56 6 .72 12.58 2.59 17.88 0a9 9 0 01-3.14 9.58s-1.92 1.23-7 1.85a74.46 74.46 0 01-14-.27c-1.46-.2-1.77 1.22-2.56 5.09-.62 3.35-1.2 9.11-2.53 9.13z"
        fill="#263238"
      />
      <Path
        d="M79.68 136.15l-4.76-2.56a2.63 2.63 0 013.6-1.19 2.84 2.84 0 011.16 3.75z"
        fill="#263238"
      />
      <Path
        d="M96.71 166.29s-7.06-1.42-9.53-2.73a8.17 8.17 0 01-3.42-3.38 11.21 11.21 0 001.94 4c1.81 2.31 11 4 11 4z"
        fill="#9a4a4d"
      />
      <Path
        d="M95 148a1.45 1.45 0 01-1.42 1.47 1.46 1.46 0 01-1.4-1.47 1.45 1.45 0 011.42-1.47A1.46 1.46 0 0195 148zM93.51 142.66l-3 1.68a1.82 1.82 0 01.7-2.42 1.68 1.68 0 012.3.74z"
        fill="#263238"
      />
      <Path
        d="M96.07 157.79l3.24 1.21a1.69 1.69 0 01-2.2 1.07 1.8 1.8 0 01-1.04-2.28z"
        fill="#9a4a4d"
      />
      <Path
        d="M107.64 143.84l-2.76-2.12a1.66 1.66 0 012.4-.37 1.83 1.83 0 01.36 2.49zM106.79 147.61a1.42 1.42 0 11-1.42-1.48 1.45 1.45 0 011.42 1.48z"
        fill="#263238"
      />
      <Path fill="#9a4a4d" d="M99.58 146.26l.46 8.52 4.45-1.52-4.91-7z" />
      <Path
        d="M61.89 246.87a.5.5 0 01-.5-.5V89.09a.5.5 0 011 0v157.28a.5.5 0 01-.5.5z"
        fill="#37474f"
      />
      <Path
        d="M65.69 102.78c0-1.61-3.33-6-4-6s-3.64 4.31-3.64 6a1.9 1.9 0 001.11 1.56 5.91 5.91 0 005.37 0 1.9 1.9 0 001.12-1.56z"
        fill="#5a189a"
      />
      <Path
        d="M65.69 102.78c0-1.61-3.33-6-4-6s-3.64 4.31-3.64 6a1.9 1.9 0 001.11 1.56 5.91 5.91 0 005.37 0 1.9 1.9 0 001.12-1.56z"
        opacity={0.1}
      />
      <Path
        d="M84 67.88c0 12.3-9.66 27.84-22.28 30.78C49 95.11 39.45 80.18 39.45 67.88s7.92-23.8 22.28-23.8S84 55.57 84 67.88z"
        fill="#5a189a"
      />
      <Path
        d="M40.27 61.13a27.54 27.54 0 00-.82 6.75c0 12.3 9.58 27.23 22.28 30.78 10.49-2.45 18.93-13.6 21.48-24.36s-3.32 11.81-17.93 12.76-26.4-15.75-25.01-25.93z"
        opacity={0.05}
      />
      <Path
        d="M47.65 232.52c-2.66-.76-5.39-8.72-5.19-13.82s7.06-27.16 8-31.4c1.07-4.68 1-8.24 1.95-10.67 1.4-3.59 6-5.56 6-5.56s6-2.87 8.16-3.3 3 1 2.76 2.13-1 4-1.2 5.56a13.52 13.52 0 01-1.71 5.68c-1.13 1.81-5.74 6.14-5.92 8.55s-1.51 15.49-2.27 25c-.63 7.78-1.41 11-3.1 13.06s-5.41 5.35-7.48 4.77z"
        fill="#b16668"
      />
      <G>
        <Path
          fill="#ffa8a7"
          d="M413.57 345.04h9.5v16.26h-9.5zM390.14 344.18l-9.49.32-.47-17.2 9.96-.33v17.21z"
        />
        <Path
          d="M420 224.05c0 9.07 1.42 63.54 1.42 63.54.22 2.61 2.73 7.25 2.93 16.65.28 13.63-.9 48.93-.9 48.93a12.51 12.51 0 01-10.57.21s-8.38-48.61-10.08-62.1c-1.48-11.77-4-43.76-4-43.76L393.67 286a54.06 54.06 0 011.18 15.09c-.45 6.24-4.1 37.8-4.1 37.8a13 13 0 01-11 .83s-4.8-48-4.91-53.72c-.12-6.53 3.16-73.16 3.16-73.16z"
          fill="#5a189a"
        />
        <Path
          d="M382.78 205.32c6.12-20.39 4.91-37.65 6.06-42.93l-15.69 21.91a192.83 192.83 0 01-3.21 21.51c-1.81 7.79-4.28 17.5-7.24 23.54a4.88 4.88 0 01-2.55 2.33c-3 1.21-4.34 2.74-6.71 4.5-1.86 1.37-3.27 1.55-3.16 2.11a2.64 2.64 0 003.12 1.71 18.49 18.49 0 004.14-1.4 24.31 24.31 0 01-5 6c-4.54 3.94-5.19 6.73 2.35 8.1 4.73.87 9-1.4 14.39-11.22a86.07 86.07 0 005.36-11.14c3.57-9.98 6.29-18.86 8.14-25.02z"
          fill="#ffa8a7"
        />
        <Path
          d="M390.1 157.32c-4.87.86-9.68 2-12.67 6.68s-7.31 26.77-7.31 26.77 6.28 4.41 13.48 4.22z"
          fill="#e0e0e0"
        />
        <Path
          d="M423.66 165.54c3.27 2.32 20.52 41.28 21.18 44 .88 3.69.48 7.83-1.33 9.16s-5.8-.58-7.89-2.62c-4-4-18.05-33.13-18.05-33.13z"
          fill="#f28f8f"
        />
        <Path
          d="M406.68 157.31c7.95 1.92 18 5.13 21.56 12.45s9 19.2 9 19.2a32.26 32.26 0 01-13.17 7.78l-4-7 .59 36.95c-6.45 4.7-30.14 7.25-43.72-2.66 0 0 1.67-44.37 1.67-51.27s3.83-15.2 14.43-15.82z"
          fill="#f0f0f0"
        />
        <Path d="M420 189.71s-4-6.92-4.85-8.58l5 17z" fill="#e0e0e0" />
        <Path
          d="M413.57 356.61v-1.36c-.91.4-3 8.45-6.79 11.89-3 2.73-7.08 5.89-8.12 8.93s5.69 4.92 8.49 4.42c3.25-.57 8.89-2.86 10.3-5s2.08-5.25 3.23-6.8 3.8-3.3 4.42-5.1c.34-1-.06-3.15-.54-5s-.92-3.53-1.49-3.37v1a7.53 7.53 0 01-4.75 1.6c-1.39.18-4.76-.15-4.75-1.21zM380.55 341.57c-.49 0-.89.72-2 1.89a20.48 20.48 0 01-5.58 4c-3.56 1.78-10.47 4.52-13.6 5.93-2 .88-1.86 3.24.16 4.58s6.89 2.32 12.75 1c3.19-.72 7.35-3.66 10-3.51s7.55.13 9.49-1.21 1.17-4.2.62-6.65c-.6-2.68-1.35-6.86-2.24-6.67v.92c-1.14 1.73-7 2.43-9.54 1.16z"
          fill="#263238"
        />
        <Path
          d="M398.82 247.52a35.27 35.27 0 01-13.23-7.58s2.56 4.78 10.14 9.22l-1.62 33.51z"
          opacity={0.1}
        />
        <Path
          d="M409.66 122a4.71 4.71 0 013.91 1.37c1.68 1.72 1.33 4.9 0 12.2l-5.19.6zM379.41 119.86a8.15 8.15 0 01-3.25-.66c-1.59-.92-2 .89-1.14 2.46a7.4 7.4 0 006 4c0-.22 1.49-4 1.49-4z"
          fill="#263238"
        />
        <Path
          d="M407.23 136.14c.77.46 1.87-1 2.82-2s4.05-2.36 5.59.9-2 7.74-4.1 9.2c-2.5 1.74-4.31.38-4.31.38l-.55 12.7s-2.76 6.74-10.22 7.75-5.92-5.13-3.47-8.15v-4.62s-3.85.76-5.67.29a8.37 8.37 0 01-5.53-5.68 45.14 45.14 0 01-1.25-20.91c1.9-11.53 14.9-11.72 22.18-7.14s4.51 17.28 4.51 17.28z"
          fill="#ffa8a7"
        />
        <Path
          d="M407.23 137.44c.38 0 1.86-2.44 2.82-3.31 1.33-1.21-.39-12.16-.39-12.16s1.35-4.15-1.28-6.91-7.72-2.29-11.44-2.42a33.38 33.38 0 01-13.3-2.67c-5.28-2.3-5.68-2.57-6.34-.25s-.9 7.64 2.26 11.2l2.62 1s1.42 1.25 6.35 1.85a72.23 72.23 0 0013.65-.26c1.43-.19 1.74 1.19 2.51 5 .67 3.27 1.23 8.9 2.54 8.93z"
          fill="#263238"
        />
        <Path
          d="M409.65 122.82l4.66-2.5a2.57 2.57 0 00-3.52-1.17 2.78 2.78 0 00-1.14 3.67z"
          fill="#263238"
        />
        <Path
          d="M393 152.29s6.91-1.39 9.32-2.67a7.92 7.92 0 003.34-3.31 10.84 10.84 0 01-1.9 3.9c-1.76 2.26-10.76 3.92-10.76 3.92z"
          fill="#f28f8f"
        />
        <Path
          d="M394.65 134.18a1.39 1.39 0 101.39-1.44 1.41 1.41 0 00-1.39 1.44zM396.37 128.45l3 1.64a1.77 1.77 0 00-.69-2.36 1.65 1.65 0 00-2.31.72z"
          fill="#263238"
        />
        <Path
          d="M394.76 143.8l-3.16 1.2a1.66 1.66 0 002.15 1.05 1.76 1.76 0 001.01-2.25z"
          fill="#f28f8f"
        />
        <Path
          d="M381.67 130.43l2.7-2.08A1.63 1.63 0 00382 128a1.79 1.79 0 00-.33 2.43zM383.22 133.79a1.39 1.39 0 101.38-1.44 1.42 1.42 0 00-1.38 1.44z"
          fill="#263238"
        />
        <Path fill="#f28f8f" d="M390.79 132.71l-.46 8.32-4.34-1.48 4.8-6.84z" />
        <Path
          d="M428.78 233.28a.5.5 0 01-.5-.5V75.5a.5.5 0 011 0v157.28a.5.5 0 01-.5.5z"
          fill="#37474f"
        />
        <Path
          d="M425 89.19c0-1.6 3.33-6 4-6s3.64 4.31 3.64 6a1.89 1.89 0 01-1.11 1.56 5.91 5.91 0 01-5.37 0 1.88 1.88 0 01-1.16-1.56z"
          fill="#5a189a"
        />
        <Path
          d="M425 89.19c0-1.6 3.33-6 4-6s3.64 4.31 3.64 6a1.89 1.89 0 01-1.11 1.56 5.91 5.91 0 01-5.37 0 1.88 1.88 0 01-1.16-1.56z"
          opacity={0.1}
        />
        <Path
          d="M406.66 54.29c0 12.3 9.65 27.84 22.28 30.78 12.7-3.55 22.28-18.48 22.28-30.78s-7.92-23.8-22.28-23.8-22.28 11.51-22.28 23.8z"
          fill="#5a189a"
        />
        <Path
          d="M450.26 60.72s-3.26 11.8-17.93 12.75c-14.08.91-25.53-14.55-25.1-24.79a27.52 27.52 0 00-.57 5.61c0 12.3 9.65 27.84 22.28 30.78 10.53-2.94 18.9-13.7 21.47-24.3z"
          opacity={0.05}
        />
        <Path
          d="M443 218.93c2.66-.76 5.39-8.71 5.19-13.82s-7.06-27.15-8-31.4c-1.07-4.68-1-8.24-1.95-10.67-1.4-3.58-6-5.55-6-5.55s-6-2.88-8.16-3.31-3 1-2.76 2.13 1 4 1.2 5.56a13.48 13.48 0 001.71 5.68c1.13 1.81 5.74 6.14 5.92 8.55s1.51 15.5 2.27 25c.63 7.78 1.41 11 3.1 13.06s5.48 5.36 7.48 4.77z"
          fill="#ffa8a7"
        />
      </G>
      <G>
        <Ellipse cx={184.77} cy={340.61} rx={51.11} ry={24.36} fill="#e0e0e0" />
        <Ellipse cx={293.37} cy={348.02} rx={51.11} ry={24.36} fill="#e0e0e0" />
        <Path
          d="M197.63 139.7c2.65-.38 4.89 0 9.52 6.32 4.14 5.66 12.39 15.16 12.39 15.16s7.46-19.55 7.24-22.18-1.87-4.25-2.95-9.09-1.39-5.76-2.2-7.17 2-1.75 3.13 0 1.27 4.22 2.06 3.78 1.33-5.76.66-9.58 1.07-4.68 1.86-3.46a6.4 6.4 0 01.95 2.25 4.72 4.72 0 014.5 1.52c2 2.18 3.66 5.53 3.65 11.2s-2.63 8.7-3 11.26-5 26.29-8.28 34.31c-2.06 5-4.91 6.52-8.39 3.59-4.69-3.95-17.56-19.77-17.56-19.77z"
          fill="#ffa8a7"
        />
        <Path
          d="M197.63 139.7c2.39-.71 5-.15 7.42 2.75s11.28 14.12 11.28 14.12-.26 5.74-7.67 11.06l-8.45-9.1z"
          fill="#5a189a"
        />
        <Path
          d="M210.15 324.86l-.08-1.33c.63 1.53 3.47 8.13 7.38 11.28 3.1 2.51 7.31 5.38 8.51 8.31s-5.34 4.5-8.12 4.17c-3.23-.37-7.48-1.94-9.9-4.57-1.7-1.85-2.84-4.09-4.06-5.55s-3.93-3-4.65-4.75c-.39-.95-.12-3.11.24-4.93s.9-3.68 1.47-3.56a10.16 10.16 0 01-.14 1.17 7.36 7.36 0 004.76 1.3c1.37-.03 4.67-.5 4.59-1.54z"
          fill="#263238"
        />
        <Path
          d="M220.26 337c-1-.76-1.93-1.5-2.81-2.21-2.73-2.21-4.94-6.1-6.24-8.76v-.05a14.05 14.05 0 01-1.26-6.89l.12-3.15-10 .2.73 8.94v.23h.05c.57 1.91 5.16 6.82 7.8 10 1.76 2.15 5 4.84 8.77 5.11 3.58.34 5.28-.88 2.84-3.42z"
          fill="#ffa8a7"
        />
        <Path
          d="M154.32 326c-.48-.28-1.27 1.35-2.1 2.59a9.2 9.2 0 00-1.22 5.09 18.67 18.67 0 01-.31 6c-.56 3.32-1.53 7.13 1.81 10.19 2.87 2.62 9.27 3.84 11.31 2a3.4 3.4 0 001.25-2.81 21.11 21.11 0 00-1.68-4.18 47.63 47.63 0 01-2.12-4.64z"
          fill="#263238"
        />
        <Path
          d="M163.34 320.38c-.44-.37-1.39 11.91-1.66 14.83s.24 4.45.72 7.56a3 3 0 01-.15 2.23 2.62 2.62 0 01-2.14 1c-2.12 0-3.8-.78-5.58-2.79-.88-1-.94-3.65-.89-4.61a34 34 0 00.09-4.84c-.16-1.71-.66-3.72-.44-5a10 10 0 011-2.84c.81-1.85 1.35-6.91 1.35-6.91z"
          fill="#ffa8a7"
        />
        <Path
          d="M167.53 190.19c-5.19 6.67-6.13 13.55-5 33s-.51 35.34-.8 36.43-3.58 11.83-5.13 19.06c-1.81 8.47-2.06 43.34-2.06 43.34s3.69 2 9.39.64c0 0 13.76-54.49 15.22-58.88s12.51-49.67 12.51-49.67l-1.41-26.07z"
          fill="#37474f"
        />
        <Path
          d="M207.22 212.61c-.79-9-2.72-24.59-2.72-24.59l-23-1.35c-3.73 5.81-2.11 15.47-1.09 24.2l13.16 51.52c-.27 2.47-2.54 7.7 0 21 2.83 14.82 6.3 34.41 6.3 34.41s5.4 2.2 10.36.11c0 0 1.9-46.92.69-59.73-1.33-13.91-3.16-39.41-3.7-45.57z"
          fill="#37474f"
        />
        <Path
          d="M187.64 234.47l3.75-18.9a40.79 40.79 0 009.39-4.79 28.53 28.53 0 01-6.57 6.05z"
          fill="#263238"
        />
        <Path
          d="M168.92 144.42c-2.58 1.49-6.85 2.85-8.63 7.87-2.43 7-8.88 25.18-11.36 31.71h11.92l8.25-16.9c6.38-5.48 5.52-20.71-.18-22.68z"
          fill="#ffa8a7"
        />
        <Path
          d="M203 173.41c.57 5.25 2.69 24.67 2.69 24.67-17.35 9.25-38.86 3.12-42.15-.69 3-9.82 6.19-15.41 8.64-18l-3.08-12.29s7.27-8.65-.18-22.68l9.67-3.18 13.24-1.15 5.8-.39c2.07 1.94 5.33 8.89 7.45 14.3 1.36 3.49 2.83 9.07-2.08 19.41z"
          fill="#f5f5f5"
        />
        <Path
          d="M168.92 144.42c-5.7 1.12-8.26 3.92-10.54 10.14-2.46 6.73-5.41 14-5.41 14a14.59 14.59 0 0014.62 6.05l3.69-10.29s4.95-9.08-2.36-19.9z"
          fill="#5a189a"
        />
        <Path
          d="M170.67 173.28c.15.6 4.21 6 6.2 7.24s-3.52 3-4.3 6.15C171 193 180.81 201.13 193 202.29c-13.79 2.26-26.92-2-29.43-4.9 3-9.82 6.19-15.41 8.64-18z"
          fill="#e6e6e6"
        />
        <Path
          d="M207.15 138.47h-18.53a22.67 22.67 0 01-22.68-22.68 20.6 20.6 0 0120.6-20.6 20.6 20.6 0 0120.61 20.6z"
          fill="#263238"
        />
        <Path
          d="M199.79 104.16c2.18 1.29 4.87 6.76 4.6 18.24-.23 9.72-3.38 12.13-5 12.82s-4.64.27-7.6-.23v5.84a4.72 4.72 0 01-1.85 3.09c-2.42 1.51-5.28.94-6.89.36-3.55-1.28-4.25-3-4.25-3l.06-13.43s-1.74 1.7-4.71-.89c-2.44-2.14-3.26-5.74-1.36-7.68a4.26 4.26 0 016.78 1.36s1.74.14 3.48-3.1c0 0-.06-8.78 1.9-9.92 6.25-3.62 10.67-3.46 14.84-3.46z"
          fill="#ffa8a7"
        />
        <Path
          d="M191.82 119.34a1.23 1.23 0 01-1.15 1.32 1.27 1.27 0 111.15-1.32z"
          fill="#263238"
        />
        <Path
          d="M193.86 128.2l2.84.9a1.46 1.46 0 01-1.85 1 1.56 1.56 0 01-.99-1.9z"
          fill="#f28f8f"
          opacity={0.5}
        />
        <Path
          d="M202.88 115.53l-2.47-1.71a1.43 1.43 0 012.05-.42 1.57 1.57 0 01.42 2.13zM190.12 115l-2.81 1.08a1.43 1.43 0 01.81-1.93 1.58 1.58 0 012 .85zM202.21 119.07a1.23 1.23 0 11-1.29-1.21 1.26 1.26 0 011.29 1.21z"
          fill="#263238"
        />
        <Path
          fill="#f28f8f"
          d="M196.34 118.37l.19 7.36 3.88-1.2-4.07-6.16zM191.83 135c-3.13-.41-9.57-2.25-10.57-4.8a6.55 6.55 0 002.26 3.25c1.92 1.65 8.31 3.5 8.31 3.5z"
          opacity={0.5}
        />
        <Path
          d="M183.56 96.29l-.47-5.4a2.62 2.62 0 013 2.36 2.85 2.85 0 01-2.53 3.04z"
          fill="#263238"
        />
        <Path
          d="M183.27 96.83l-4.37-3.2a2.63 2.63 0 013.75-.68 2.85 2.85 0 01.62 3.88zM179.61 120.62v5.11a3.48 3.48 0 003.48-3.48v-4.73zM193.53 96.4a17.3 17.3 0 0117.3 17.3v2.24h-8.46a7.88 7.88 0 01-7.81-6.81l-.31 6.81a6.26 6.26 0 01-6.24-5.71l-.1-1.12a7.42 7.42 0 01-7.39 6.83h-.76l-.86-12.22zM311.12 338.32V337c-.53 1.57-3 8.33-6.69 11.71-2.95 2.69-7 5.8-8 8.8s5.6 4.17 8.36 3.68c3.2-.56 7.35-2.38 9.6-5.15 1.59-1.95 2.6-4.26 3.73-5.79s3.74-3.25 4.35-5c.34-1-.06-3.11-.53-4.91s-.9-3.47-1.47-3.32v1a7.36 7.36 0 01-4.68 1.58c-1.36.04-4.68-.23-4.67-1.28z"
          fill="#263238"
        />
        <Path
          d="M301.76 351.06c.92-.82 1.84-1.61 2.67-2.38 2.6-2.36 4.57-6.37 5.71-9.11a13 13 0 001-4.92v-5.33h9.35v8.91h-.05c-.45 1.94-4.74 7.12-7.18 10.49-1.63 2.26-4.74 5.13-8.45 5.63-3.54.49-5.33-.62-3.05-3.29z"
          fill="#b16668"
        />
        <Path
          d="M274.63 329.1v-1.34c-.52 1.57-3 8.33-6.68 11.71-2.95 2.69-7 5.8-8 8.8s5.6 4.17 8.36 3.68c3.2-.57 7.34-2.38 9.6-5.15 1.58-1.95 2.59-4.26 3.73-5.79s3.74-3.25 4.35-5c.34-1-.06-3.11-.53-4.91-.44-1.65-.91-3.47-1.47-3.32v1a7.36 7.36 0 01-4.68 1.58c-1.37.06-4.69-.21-4.68-1.26z"
          fill="#263238"
        />
        <Path
          d="M265.28 341.84c.91-.82 1.83-1.61 2.67-2.38 2.59-2.36 4.57-6.37 5.7-9.11a12.78 12.78 0 001-4.92v-5.33H284v8.9h-.05c-.45 1.94-4.74 7.11-7.18 10.49-1.64 2.26-4.74 5.13-8.45 5.63-3.53.5-5.32-.61-3.04-3.28z"
          fill="#b16668"
        />
        <Path
          d="M318.61 193c7.25 15.84-.26 71.63-.26 71.63.22 2.57 3.15 7.63 4.25 18.94 1.29 13.36-2 46.92-2 46.92a10.13 10.13 0 01-9.45.38s-8.95-50.59-10.62-63.87c-1.47-11.59-4.27-37.09-4.27-37.09l-8 37a69.44 69.44 0 012.52 11.45c.76 7.82-6.81 44.21-6.81 44.21s-3.23 1.18-9.36.28c0 0-2.67-48.3-3.38-57.71-1.19-15.82 3-65.16 5.91-74.52z"
          fill="#37474f"
        />
        <Path
          d="M296.26 229.9l-2.36-14.71s-10-2.07-14.47-6.31c0 0 4.73 5.89 11.77 7.82l2.65 11.3-4.62 34.29z"
          fill="#263238"
        />
        <Path
          d="M291.38 137.51a12.26 12.26 0 00-11.95 4.94c-3.15 4.19-15.27 39.44-15.27 39.44h10.91L290 152.35z"
          fill="#b16668"
        />
        <Path
          d="M305.82 137.94c9.3.64 9.95 5.13 12.27 10a15.83 15.83 0 01.44 12l-6.47 18.74s3 7.33 6.55 14.26c-16.26 9.07-36.56 4.3-41.45-2.32-.2-1.4 1-12.38 1.83-19.55-2.87-7.19-3.62-11.74-2.41-16.49 2.24-8.81 10.94-17.4 14.8-17.09z"
          fill="#f5f5f5"
        />
        <Path
          d="M301.66 194.72a9.82 9.82 0 007.32-12 3 3 0 00-.17-.51 3.19 3.19 0 00-3.29-2.19 9.43 9.43 0 004.06-6.05l2-9.91s-3.67-11.64-3.3-15.63l9.33.54 1.21.84a16.23 16.23 0 01-.27 10.12l-6.47 18.74s3 7.33 6.55 14.26a42 42 0 01-34.74 2.3 47.41 47.41 0 0017.77-.51z"
          fill="#e6e6e6"
        />
        <Path
          d="M340.05 184.41s-9.23-18.16-15.33-32.06c-4.4-10-5.39-12.3-12.4-13.39l-2.47-.38c-3.32 10.91-1 15.86 3.34 23.33l15.19 28.8c3.44-.71 11.74-5.26 11.67-6.3z"
          fill="#b16668"
        />
        <Path
          d="M301.96 130.23h-6.59a17.53 17.53 0 01-17.53-17.53v-2.94a17.63 17.63 0 0117.63-17.63h6.34a17.63 17.63 0 0117.63 17.63v2.94a17.53 17.53 0 01-17.53 17.53z"
          fill="#263238"
        />
        <Path
          d="M284.72 100.54c-2.2 1.3-4.92 6.83-4.65 18.42.23 9.82 3.41 12.24 5 12.94s4.68.27 7.68-.22v5.89s-4.15 4.81-3.88 7.51 6 3.34 9.85.7a25 25 0 006.36-6.66v-14.24s2 2.7 5.33.5 3.44-7.63 1.52-9.59-6.08-1.33-6.85 1.37c0 0-4.78.17-11.14-3.33a17.84 17.84 0 01-9.22-13.29z"
          fill="#b16668"
        />
        <Path
          d="M292.13 116.49a1.24 1.24 0 101.3-1.22 1.26 1.26 0 00-1.3 1.22z"
          fill="#263238"
        />
        <Path
          d="M290.7 124.81l-2.86.92a1.47 1.47 0 001.86 1 1.59 1.59 0 001-1.92z"
          fill="#9a4a4d"
        />
        <Path
          d="M282 112.7l2.5-1.74a1.47 1.47 0 00-2.08-.42 1.59 1.59 0 00-.42 2.16zM282.58 115.6a1.24 1.24 0 101.3-1.23 1.28 1.28 0 00-1.3 1.23z"
          fill="#263238"
        />
        <Path
          fill="#9a4a4d"
          d="M288.62 114.89l-.2 7.43-3.91-1.21 4.11-6.22zM292.76 131.68c3.15-.42 9.65-2.29 10.66-4.85a6.58 6.58 0 01-2.27 3.27c-1.94 1.67-8.39 3.54-8.39 3.54z"
        />
        <Path
          d="M316.9 94.36c-4.06 1.69-3.15 5.17-1.45 9.23S319 110.74 323 109a8 8 0 10-6.14-14.68z"
          fill="#263238"
        />
        <Path
          d="M313.33 98l-1.42-6.77a3.35 3.35 0 014.09 2.53 3.62 3.62 0 01-2.67 4.24z"
          fill="#263238"
        />
        <Path fill="#5a189a" d="M134.7 181.89h211.95v48.53H134.7z" />
        <Path
          d="M163.53 217.35a1.33 1.33 0 01-.38-.63L158 200a.9.9 0 010-.31c0-.33.2-.49.61-.49h2.94a1 1 0 01.64.15.86.86 0 01.27.53l3.32 11.67 3.77-10a1.41 1.41 0 01.35-.55.86.86 0 01.61-.17h1.64a.93.93 0 01.59.15 1.45 1.45 0 01.32.57l3.74 10 3.35-11.67a1.36 1.36 0 01.27-.53 1 1 0 01.65-.15H184c.41 0 .61.16.61.49a1.3 1.3 0 010 .31l-5.23 16.7a1.29 1.29 0 01-.36.65 1.16 1.16 0 01-.67.15H176a.93.93 0 01-.61-.17 1.91 1.91 0 01-.38-.63l-3.81-10.26-3.82 10.26a1.63 1.63 0 01-.4.63 1 1 0 01-.63.17h-2.17a1.21 1.21 0 01-.65-.15zM190.34 217.08a8.47 8.47 0 01-3.83-3.13 9.17 9.17 0 01-1.43-5.28q0-4.92 2.63-7.47c1.75-1.7 4.24-2.56 7.47-2.56s5.63.83 7.27 2.48 2.46 4 2.46 7.17c0 .89-.41 1.34-1.22 1.34h-14a4.62 4.62 0 001.76 3.87 7.82 7.82 0 004.88 1.35 10.74 10.74 0 005.41-1.37 1 1 0 01.42-.16c.18 0 .32.12.42.35l.92 1.64a1 1 0 01.11.42.62.62 0 01-.34.49 12 12 0 01-3.38 1.41 16.89 16.89 0 01-4.17.46 13.79 13.79 0 01-5.38-1.01zm10.14-10.28a5.06 5.06 0 00-1.31-3.69 5.32 5.32 0 00-3.95-1.34 5.72 5.72 0 00-4.1 1.37 4.87 4.87 0 00-1.43 3.66zM209 217.18a1.45 1.45 0 01-.33-1V193a1.51 1.51 0 01.33-1.07 1.41 1.41 0 011.08-.34h2a1.52 1.52 0 011.11.34 1.46 1.46 0 01.34 1.07v23.15a1.45 1.45 0 01-.32 1 1.56 1.56 0 01-1.13.34h-2a1.45 1.45 0 01-1.08-.31zM220.1 215.59a9 9 0 01-2.84-7.15 9.88 9.88 0 011.3-5.11 8.92 8.92 0 013.71-3.45 12.4 12.4 0 015.67-1.24 15.93 15.93 0 014.08.46 9.75 9.75 0 013.12 1.49.63.63 0 01.35.49 1.13 1.13 0 01-.19.54l-1 1.79c-.16.25-.3.38-.42.38a1 1 0 01-.54-.23 10.59 10.59 0 00-2.34-1.08 9.11 9.11 0 00-2.77-.37 6 6 0 00-4.5 1.7 6.4 6.4 0 00-1.64 4.63 6.1 6.1 0 001.64 4.64 6.78 6.78 0 004.81 1.54 8.52 8.52 0 005.07-1.49 1.08 1.08 0 01.5-.19c.15 0 .3.13.45.38l1.11 1.87a.68.68 0 01.15.42c0 .18-.13.36-.38.54a11.36 11.36 0 01-3.28 1.46 15.7 15.7 0 01-4.12.48q-5.1 0-7.94-2.5zM241.49 215.48a10.74 10.74 0 010-14.22c1.79-1.74 4.34-2.62 7.65-2.62s5.86.88 7.66 2.62a10.68 10.68 0 010 14.22c-1.8 1.74-4.36 2.61-7.66 2.61s-5.86-.87-7.65-2.61zm11.76-2.54a6.55 6.55 0 001.42-4.57 6.43 6.43 0 00-1.42-4.52 6.21 6.21 0 00-8.21 0 6.39 6.39 0 00-1.43 4.52 6.52 6.52 0 001.43 4.55 6.12 6.12 0 008.21 0zM263.59 217.18a1.41 1.41 0 01-.35-1v-15.9a1.28 1.28 0 01.2-.81c.12-.15.39-.22.8-.22h2a.87.87 0 01.61.17.93.93 0 01.23.59l.11 1.6a8 8 0 012.54-2.17 7.13 7.13 0 013.41-.77 5.54 5.54 0 012.92.75 4.29 4.29 0 011.81 2.19 7 7 0 016.06-2.94 5.71 5.71 0 014.29 1.64 6.8 6.8 0 011.58 4.88v11a1.49 1.49 0 01-.32 1 1.56 1.56 0 01-1.13.34h-1.68a1.56 1.56 0 01-1.1-.34 1.41 1.41 0 01-.34-1v-10.76a3.51 3.51 0 00-.75-2.52 3 3 0 00-2.23-.76 3.33 3.33 0 00-2.53 1 3.9 3.9 0 00-1 2.78v10.19a1.41 1.41 0 01-.34 1 1.57 1.57 0 01-1.11.34h-1.56a1.52 1.52 0 01-1.1-.34 1.41 1.41 0 01-.35-1v-10.88a3.44 3.44 0 00-.66-2.34 2.72 2.72 0 00-2.12-.75 3.51 3.51 0 00-2.67 1.09 3.94 3.94 0 00-1 2.84v10.07a1.49 1.49 0 01-.32 1 1.56 1.56 0 01-1.13.34h-1.68a1.54 1.54 0 01-1.09-.31zM298.63 217.08a8.47 8.47 0 01-3.83-3.08 9.17 9.17 0 01-1.43-5.28q0-4.92 2.63-7.47c1.75-1.7 4.24-2.56 7.47-2.56s5.63.83 7.27 2.48 2.46 4 2.46 7.17c0 .89-.41 1.34-1.22 1.34H298a4.62 4.62 0 001.76 3.87 7.8 7.8 0 004.88 1.35 10.77 10.77 0 005.41-1.37 1 1 0 01.42-.16c.18 0 .32.12.42.35l.92 1.64a1 1 0 01.11.42.62.62 0 01-.34.49 12 12 0 01-3.38 1.41 16.89 16.89 0 01-4.17.46 13.79 13.79 0 01-5.4-1.06zm10.14-10.28a5.06 5.06 0 00-1.31-3.69 5.33 5.33 0 00-3.95-1.34 5.7 5.7 0 00-4.1 1.37 4.87 4.87 0 00-1.41 3.66zM316.17 216v-.81c0-1.06.75-1.6 2.25-1.6h1c1.5 0 2.25.54 2.25 1.6v.81q0 1.56-2.25 1.56h-1q-2.25-.04-2.25-1.56zm.82-6a1.59 1.59 0 01-.29-1.05l-.22-15.95a1.51 1.51 0 01.32-1.07 1.45 1.45 0 011.09-.34H320a1.45 1.45 0 011.09.34 1.51 1.51 0 01.32 1.07l-.26 15.94a1.59 1.59 0 01-.29 1.05 1.39 1.39 0 01-1 .32h-1.87a1.2 1.2 0 01-.99-.31z"
          fill="#fff"
        />
        <Path
          d="M134.7 190.65c-.62 1.73-2 2.55-3 4.27s-1.42 6.86-.29 9a10.78 10.78 0 008.37 5.37 6.87 6.87 0 004.08-1.14 6.22 6.22 0 001.47-1.38 6.58 6.58 0 00.84-1.87.32.32 0 01.08-.14.39.39 0 01.18-.06 2.39 2.39 0 001.19-.53 1.51 1.51 0 00.54-1.16 1.78 1.78 0 00-.91-1.35 7.43 7.43 0 00-1.59-.6c-1.33-.43-2.56-1.1-3.86-1.59a20.78 20.78 0 01-7.11-4.29z"
          fill="#ffa8a7"
        />
        <Path
          d="M346.66 192.21c.62 1.75 2 2.58 3 4.33s1.44 7 .3 9.13a10.93 10.93 0 01-8.5 5.45 6.44 6.44 0 01-6.49-4.2c-.91-3.15.66-4.34 4.44-5.77a21 21 0 007.22-4.35zM254 177.67c5.6.91 7.21 4.22 7.21 4.22h-4.58s-.58 1.54 1 7.31c.54 2-2.45 2.08-2.54 1.32-.54 1.24-4.48 3-7.42 1-2.7-1.79-3.9-4.53-3.3-9.66.99-5.71 8.63-4.35 9.63-4.19z"
          fill="#b16668"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
