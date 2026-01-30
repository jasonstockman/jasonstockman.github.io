export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="160"
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        js
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><text x="50%" y="50%" fill="${color}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="80" font-weight="700" text-anchor="middle" dominant-baseline="middle">js</text></svg>`;
}
