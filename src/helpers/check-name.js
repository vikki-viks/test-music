module.exports = (name) => {
  if (
    name.toLowerCase().includes("монеточка") ||
    name.toLowerCase().includes("monetochka")
  ) {
    throw new Error("Нет такого исполнителя");
  }
};
