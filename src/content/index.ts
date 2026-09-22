import source from "./copy.json";
export type Block = { type: string; text?: string; items?: string[] };
export const copy = source as { label: string; blocks: Block[] }[];
export const textAt = (section: number, block: number) =>
  copy[section].blocks[block].text || "";
export const plain = (text: string) =>
  text.replace(/\*\*/g, "").replace(/📍\s*/g, "").replace(/\s+/g, " ").trim();

export const faqs = copy[10].blocks.reduce<
  { question: string; answers: Block[] }[]
>((items, block) => {
  if (block.type === "h3") items.push({ question: block.text!, answers: [] });
  else if (block.type === "p" && items.length)
    items[items.length - 1].answers.push(block);
  return items;
}, []);
export const reviews = [5, 8, 11, 14, 17, 20].map((index) => ({
  quote: textAt(7, index),
  name: plain(textAt(7, index + 1)),
}));
