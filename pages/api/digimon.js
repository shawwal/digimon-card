// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import digimonList from "./../data/digimonList";
export default (req, res) => {

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalDigimon = digimonList.length;
  const Response = {};

  if (endIndex < totalDigimon)
    Response.next = {
      page: page + 1,
      limit: limit
    }
  if (startIndex > 0) {
    Response.prev = {
      page: page - 1,
      limit: limit
    }
  }

  Response.results = digimonList.slice(startIndex, endIndex);

  res.statusCode = 200
  res.json(Response)
}
