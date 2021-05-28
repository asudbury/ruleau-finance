export default function GetSelectedRuleWarningSelector(): string | null {
  return sessionStorage.getItem("selectedRuleWarning");
}
