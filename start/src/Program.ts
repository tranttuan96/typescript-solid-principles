import FileStore from "./FileStore";
const readLineSync = require('readline-sync')

export default class Program {
  private readonly fileStore: FileStore;
  private selection: number;

  constructor() {
    this.fileStore = new FileStore('../../store');
    this.selection = -1;
  }

  private async invokeSaveFile(): Promise<void> {
    const fileId = readLineSync.question("Please input the file id:");
    const fileMessage = readLineSync.question("Please input the file message:");
    await this.fileStore.save(fileId, fileMessage);
  }

  private invokeReadFile(): void {
    const fileId = readLineSync.question("Please input the file id:");
    const message = this.fileStore.read(fileId);
    console.log("🚀 ~ file: Program.ts:22 ~ Program ~ invokeReadFile ~ message:", message);
  }

  public async run(): Promise<void> {
    while(this.selection !== 0){
        console.log("0. Quit")
        console.log("1. Save file")
        console.log("2. Read file")

        this.selection = readLineSync.question("Pick an option");
        if (this.selection == 1){
            await this.invokeSaveFile();
        } else if (this.selection == 2){
            this.invokeReadFile()
        }
    }
  }
}