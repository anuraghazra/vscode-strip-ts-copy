import * as diff from "diff";

// https://github.com/microsoft/TypeScript/issues/843#issuecomment-555932858
function reconstructNewLines(oldText: string, newText: string) {
  const patch = diff.parsePatch(
    diff.createPatch("file", oldText, newText, "", "")
  );
  const hunks = patch[0].hunks;
  for (let i = 0; i < hunks.length; ++i) {
    let lineOffset = 0;
    const hunk = hunks[i];
    hunk.lines = hunk.lines.map((line) => {
      if (line === "-") {
        lineOffset++;
        return " ";
      }
      return line;
    });
    hunk.newLines += lineOffset;
    for (let j = i + 1; j < hunks.length; ++j) {
      hunks[j].newStart += lineOffset;
    }
  }

  // @ts-ignore
  return diff.applyPatch(oldText, patch);
}

export { reconstructNewLines };
