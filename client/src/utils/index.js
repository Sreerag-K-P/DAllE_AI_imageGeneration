import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  //   to not get same propmpt again and again
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
