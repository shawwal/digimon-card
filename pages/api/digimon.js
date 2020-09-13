// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import digimonList from "./../../components/digimonList";
export default (req, res) => {
  const Response = {};
  if (req.query.page) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalDigimon = digimonList.length;
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
  } else if(req.query.search) {
    const searchResult = digimonList.filter(obj => obj.name.toLowerCase().indexOf(req.query.search.toLowerCase()) > -1);
    // const searchResult = digimonList.find(obj => obj.name.toLowerCase()  == req.query.search.toLowerCase() );
    Response.results = searchResult;
  } else {
    Response.results = digimonList;
  }
  res.statusCode = 200
  res.json(Response)
}
