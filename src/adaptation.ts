import type { SeqJson } from "@nasa-jpl/seq-json-schema/types.js";
import {
  seqJsonLanguage,
  seqnLanguage,
  type OutputLanguage,
  type PhoenixAdaptation,
  type PhoenixContext,
  seqJsonToSeqn,
  seqnToSeqJson,
  seqnParser,
} from "@nasa-jpl/aerie-sequence-languages";

function toInputFormat(output: string) {
  const seqJson = JSON.parse(output) as SeqJson;
  return seqJsonToSeqn(seqJson);
}

function toOutputFormat(input: string, context: PhoenixContext, name: string) {
  const tree = seqnParser.parse(input);
  const seqJson = seqnToSeqJson(tree, input, context.commandDictionary, name);
  return JSON.stringify(seqJson, null, 2);
}

const seqJsonOutputLanguage: OutputLanguage = {
  ...seqJsonLanguage,
  toOutputFormat,
  toInputFormat,
};

((): PhoenixAdaptation => {
  return {
    input: seqnLanguage,
    outputs: [seqJsonOutputLanguage],
  };
})();
