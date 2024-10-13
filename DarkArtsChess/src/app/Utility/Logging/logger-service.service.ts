import { Injectable } from '@angular/core';

export enum LogLevel {
  DEBUG = 1,
  INFO,
  WARN,
  ERROR,
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logLevel: LogLevel = LogLevel.DEBUG; // Set the default log level

  constructor() {}

  debug(message: string, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug('DEBUG: ' + message, ...optionalParams);
    }
  }

  info(message: string, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevel.INFO) {
      console.info('INFO: ' + message, ...optionalParams);
    }
  }

  warn(message: string, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn('WARN: ' + message, ...optionalParams);
    }
  }

  error(message: string, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error('ERROR: ' + message, ...optionalParams);
    }
  }

  setLogLevel(level: LogLevel) {
    this.logLevel = level;
  }
}
