/**
 * The page reads the same facts the chat assistant does.
 *
 * Single source lives in api/_facts.js because the serverless function cannot
 * import TypeScript. This re-export is the frontend's door to it, so a number
 * updated once is updated everywhere.
 */
// @ts-ignore — plain JS module shared with the serverless API
export * from "../../api/_facts.js";
