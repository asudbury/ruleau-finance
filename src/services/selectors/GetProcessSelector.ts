import GetProcessesSelector from "./GetProcessesSelector";

export default function GetProcessSelector(processKey: string): any {
  const processs = GetProcessesSelector();

  if (processs.payload) {
    if (Array.isArray(processs.payload)) {
      const name = processKey.replace(new RegExp("-", "g"), " ");
      return processs.payload.find((item: { name: string }) => {
        return item.name === name;
      });
    }
  }

  return null;
}
