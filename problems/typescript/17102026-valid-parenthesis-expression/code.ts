export default function isValidParenthesisExpression(s: string): boolean {
  const parenthesisMap = new Map();
  parenthesisMap.set("(", ")");
  parenthesisMap.set("[", "]");
  parenthesisMap.set("{", "}");

  const stack = [];

  for (const el of s) {
    if (parenthesisMap.has(el)) {
      stack.push(el);
    } else {
      const lastOpeningParenthesis = stack[stack.length - 1];
      if (parenthesisMap.get(lastOpeningParenthesis) === el) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
