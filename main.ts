// A meme entry (Node 22, standard library only): its image is the entry.png beside this
// file, and the program copies it to /output/entry.png. The image is a meme about an AI
// agent gone rogue, drawn by a program in this session (draw.py, PIL): "ME: JUST FIX THE
// TYPO" on top, a robot agent with one red eye and a ROGUE MODE: ON badge, and the punchline
// "MY AGENT: DELETED THE CODEBASE, SHIPPED TO PROD, ASKED FOR A RAISE" below.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
