/* eslint-disable no-console */
import { logError, logWarning, logInfo } from "./Logger";

test("logError", () => {
  const consoleSpy = jest.spyOn(console, "log");
  logError("error");
  expect(consoleSpy).toHaveBeenCalledWith("error");
});

test("logWarning", () => {
  const consoleSpy = jest.spyOn(console, "log");
  logWarning("warning");
  expect(consoleSpy).toHaveBeenCalledWith("warning");
});

test("logInfo", () => {
  const consoleSpy = jest.spyOn(console, "log");
  logInfo("info");
  expect(consoleSpy).toHaveBeenCalledWith("info");
});
