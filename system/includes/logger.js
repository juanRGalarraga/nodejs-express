const DEFAULT_PATH = __dirname + ' ../../../logs/';
const DEFAULT_FILENAME = 'debug.log';

let fsPromise = require('fs/promises');
let fs = require('fs');
let util = require('util');

class Logger {

  path;
  filename = DEFAULT_FILENAME;
  logFile;
  logStdout;

  init(){

    try {

      this.setFilename(this.getFullDate() + '.log');

      this.makePath();

      this.logFile = fs.createWriteStream(this.getPathFilename(), {flags : 'a'})
      // this.logStdout = process.stdout;

    } catch(err) {

      console.error(`Cant init log`);

    }

  }

  async makePath(){
    try {

      this.setPath();

      await fsPromise.mkdir(this.getPath(), { recursive: true });
      
    } catch (error) {

        console.error('Error makePath');

    }
  }

  write(message){

    this.init();

    let format = `%s %s`;
    let timeLog = `[${this.getFullDate()} ${this.getFullTime()}]`;

    this.logFile.write(util.format(format, timeLog, message) + '\n');
    // this.logStdout.write(util.format(format, timeLog, message) + '\n');
  }

  setPath(path = null){
    
    if( (path.length == 0 || typeof path == null) && this.path.length == 0){
      let date = new Date(),
          subfolder = `${date.getFullYear()}-${date.getMonth()}/`;

      this.path = DEFAULT_PATH + subfolder;

      return this;

    }
    
    this.path = path;
    return this;
  }
  
  setFilename(filename){
    this.filename = filename;
    return this;
  }
  
  getPath(){
    return this.path;
  }
  
  getFilename(){
    return this.filename;
  }

  getPathFilename(){
    return this.getPath() + this.getFilename();
  }

  getFullTime(){
    let date = new Date(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        fulltime = `${hour}:${minutes}:${seconds}`;

    return fulltime;
  }

  getFullDate(){
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDay();

    return `${year}-${month}-${day}`;
  }

}


module.exports = Logger;