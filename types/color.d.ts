export type colorTag =
   | "black"
   | "red"
   | "green"
   | "yellow"
   | "blue"
   | "magenta"
   | "cyan"
   | "white"
   | "blackBright"
   | "redBright"
   | "greenBright"
   | "yellowBright"
   | "blueBright"
   | "magentaBright"
   | "cyanBright"
   | "whiteBright";

export type colorBgTag =
   | "bgBlack"
   | "bgRed"
   | "bgGreen"
   | "bgYellow"
   | "bgBlue"
   | "bgMagenta"
   | "bgCyan"
   | "bgWhite"
   | "bgBlackBright"
   | "bgRedBright"
   | "bgGreenBright"
   | "bgYellowBright"
   | "bgBlueBright"
   | "bgMagentaBright"
   | "bgCyanBright"
   | "bgWhiteBright";

export type LogParms = {
   tagColor: colorTag;
   bgTagColor: colorBgTag;
   tag: string;
   error: boolean;
};