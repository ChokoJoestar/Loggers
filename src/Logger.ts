import chalk from "chalk";
import dayjs from "dayjs";
import { colorBgTag, colorTag } from "./types/color";

const format = "{timestamp} - {tag} {msg}\n";

export class Loggers {

   public error(content: string): void | string {
      return this.write(content, "black", "bgWhite", " ⛔ ", true);
   }
   public warn(content: string): void | string {
      return this.write(content, "black", "bgWhite", " ⚠️  ", false);
   }
   public command(content: string): void | string {
      return this.write(content, "black", "bgMagenta", " 🤖" , false);
   }
   public event(content: string): void | string {
      return this.write(content, "black", "bgGreen", " 🎉 ", false);
   }
   public client(content: string): void | string {
      return this.write(content, "black", "bgBlack", " 💻 ", false);
   }
   
   protected write(msg: string, tagColor: colorTag, bgTagColor: colorBgTag, tag: string, error: boolean = false): void{
      const timestamp = `[${dayjs().format("DD/MM - HH:mm")}]`;
      const logTag = `[${tag}]`;
      const steam = error ? process.stderr : process.stdout;

      const item = format
         .replace("{timestamp}", chalk.gray(timestamp))
         .replace("{tag}", chalk[bgTagColor][tagColor](`${logTag}`))
         .replace("{msg}", chalk.white(msg));   

      steam.write(item);
   }
}