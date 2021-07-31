// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
export const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'Universe'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
