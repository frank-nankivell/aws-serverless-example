exports.handler = async (event) => {
  const { body } = event;
  console.log(body);
  return {
    statusCode: 200,
    body: JSON.stringify("Hello World"),
  };
};
