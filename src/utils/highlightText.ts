export function parseHighlightedText(text: string) {
  const regex = /\{([^}]+)\}/;
  const match = text.match(regex);

  if (!match) {
    return {
      normal: text,
      highlighted: "",
    };
  }

  const highlighted = match[1];
  const normal = text.replace(regex, "").trim();

  return {
    normal,
    highlighted,
  };
}

export function parseMultipleHighlights(text: string) {
  const regex = /\{([^}]+)\}/g;
  const parts: Array<{ type: "normal" | "highlighted"; content: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add normal text before the highlight
    if (match.index > lastIndex) {
      parts.push({
        type: "normal",
        content: text.substring(lastIndex, match.index),
      });
    }

    // Add highlighted text
    parts.push({
      type: "highlighted",
      content: match[1],
    });

    lastIndex = regex.lastIndex;
  }

  // Add any remaining normal text after the last highlight
  if (lastIndex < text.length) {
    parts.push({
      type: "normal",
      content: text.substring(lastIndex),
    });
  }

  return parts.length > 0 ? parts : [{ type: "normal", content: text }];
}
