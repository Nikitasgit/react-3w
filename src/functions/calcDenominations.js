export const calculateDenominations = (denominations, input) => {
  const sortedDenominations = denominations.sort((a, b) => b - a);
  const result = [];

  let rest = input;

  for (const denomination of sortedDenominations) {
    const count = Math.floor(rest / denomination);
    if (count > 0) {
      result.push({ denomination, count });
      rest -= count * denomination;
    }
  }

  return { result, rest };
};
