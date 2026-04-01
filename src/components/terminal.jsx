import { useEffect, useState } from "react";

const lines = [
  "> Hello World",
  "I'm ms2dwrld",
  "",
  "> role",
  "Full-Stack Web Developer",
  "",
  "> currently_building",
  "Modern web apps & digital tools",
  "",
  "> Availability",
  "Available for projects and Collaborations"

];

const TerminalHero = () => {

  const [displayedLines, setDisplayedLines] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (lineIndex >= lines.length) {
      setTimeout(() => {
        setDisplayedLines([""]);
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {

        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[updated.length - 1] += currentLine[charIndex];
          return updated;
        });

        setCharIndex(charIndex + 1);

      }, 40);

      return () => clearTimeout(timeout);
    }

    else {

      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, ""]);
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }

  }, [charIndex, lineIndex]);

  return (
    <div className="font-mono bg-black/30 rounded-xl shadow-lg overflow-hidden w-[500px] h-[380px]">

      {/* terminal header */}
      <div className="flex gap-2 p-3 bg-gray-800 items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <p className="ml-5 text-white/80">ms2dwrld.tsx</p>
      </div>

      {/* terminal body */}
      <div className="p-6 text-green-400 font-mono text-[xl] leading-relaxed">

        {displayedLines.map((line, i) => (
          <p key={i}>
            {line}
            {i === displayedLines.length - 1 && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        ))}

      </div>

    </div>
  );
};

export default TerminalHero;