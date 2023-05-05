export default async function handler(req, res) {
  const response = await fetch("https://api.nookipedia.com/villagers", {
    headers: {
      "X-API-KEY": process.env.API_KEY,
      "Accept-Version": "1.6.0",
    },
  });
  if (!response.ok) {
    const error = new Error(`Error requesting ${JSON.stringify(args)}`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  console.log("data in /api/", data);

  res.status(200).json(data);
}
