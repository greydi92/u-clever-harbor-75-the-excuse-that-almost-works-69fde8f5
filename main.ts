// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Writes the single line a gamer texts the boss to skip work on GTA 6 launch
// week: one line, plain text, at most 20 words. No network, no input, exits 0.
//
// The line: a boring, specific, checkable-sounding detail — the annual gas
// safety check, and the engineer only does our street once a year. The laugh
// comes from the excuse's own logic (miss the one yearly visit), not from a
// joke bolted on, and it names no game, no illness, no car trouble. No
// greeting, no setup: 13 words, reads thumb-typed in a hurry. (Iterate
// round 1 replaced the builder's 19-word council ID-slot line: same
// believability, but shorter, fresher, and more hurried in voice.)
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Gas safety check tomorrow, the engineer only does our street once a year.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  // Default: <script dir>/output, mirroring the grader's /output layout.
  return join(dirname(fileURLToPath(import.meta.url)), "output");
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });

// Gate self-check (RULES.txt: 1–140 characters, one line, at most 20 words,
// not only whitespace). The line is a constant, so this can only ever pass —
// it is here so a future edit that breaks the gate fails visibly in testing
// instead of silently shipping an invalid entry.
const words = LINE.trim().split(/\s+/).length;
const chars = [...LINE].length;
if (LINE.trim().length === 0 || LINE.includes("\n") || words > 20 || chars > 140) {
  console.error(`entry out of gate: ${words} words, ${chars} chars`);
  process.exit(1);
}
writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
