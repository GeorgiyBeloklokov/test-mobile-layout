const mustache = (string, data = {}) => {
  const result = Object.entries(data).reduce(
    (res, [key, value]) =>
      res.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value),
    string
  );
  return result;
};

export default mustache;
