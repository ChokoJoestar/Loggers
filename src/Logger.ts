import chalk from "chalk";
import dayjs from "dayjs";
import { colorBgTag, colorTag } from "./types/color";
import { appendFileSync, existsSync, mkdirSync } from "fs";

const format = "{timestamp} - {tag} {msg}\n";

type LogParms = {
   tagColor: colorTag;
   bgTagColor: colorBgTag;
   tag: string;
   error: boolean;
};

export class Loggers {
   public warn(content: string): void {
      const parms: LogParms = {
         tagColor: "whiteBright",
         bgTagColor: "bgYellowBright",
         tag: "WARN",
         error: false,
      };

      this.writeToConsole(content, parms);
      this.writeToFile(content, parms.tag);
   }
   public error(content: string): void {
      const parms: LogParms = {
         tagColor: "black",
         bgTagColor: "bgRedBright",
         tag: "ERROR",
         error: true,
      };

      this.writeToConsole(content, parms);
      this.writeToFile(content, parms.tag);
   }
   public event(content: string): void {
      const parms: LogParms = {
         tagColor: "black",
         bgTagColor: "bgGreen",
         tag: "EVENT",
         error: false,
      };

      this.writeToConsole(content, parms);
      this.writeToFile(content, parms.tag);
   }
   public client(content: string): void {
      const parms: LogParms = {
         tagColor: "black",
         bgTagColor: "bgBlack",
         tag: "CLIENT",
         error: false,
      };

      this.writeToConsole(content, parms);
      this.writeToFile(content, parms.tag);
   }

   private writeToConsole(
      msg: string,
      parms: {
         tagColor: colorTag;
         bgTagColor: colorBgTag;
         tag: string;
         error: boolean;
      }
   ): void {
      const steam = parms.error ? process.stderr : process.stdout;
      const timestamp = `[${dayjs().format("DD/MM - HH:mm")}]`
      const tag = `[${parms.tag}]`;

      const item = format
         .replace("{timestamp}", chalk.gray(timestamp))
         .replace(
            "{tag}",
            chalk[parms.bgTagColor][parms.tagColor](`${tag}`)
         )
         .replace("{msg}", chalk.white(msg));

      steam.write(item);
   }

   private writeToFile(content: string, tag: string) {
      const logsDir: string = "./logs";
      const timestamp = `[${dayjs().format("DD/MM - HH:mm")}]`
      const getTag = `[${tag}]`;

      if (!existsSync(logsDir)) {
         mkdirSync(logsDir);
      }

      const logsContent = `${timestamp} - ${getTag}: ${content}`;

      appendFileSync(`${logsDir}/lasted.log`, `${logsContent}\n`);
   }

   private getTag(tag: string): string {
      return `[${tag}]`;
   }
}
