export default function (text) {
  return text
    .split(" ")
    .reduce((acc, val) => `${acc} ${val.replace(/^[a-zA-Z]/, val[0].toUpperCase())}`, "");
}
