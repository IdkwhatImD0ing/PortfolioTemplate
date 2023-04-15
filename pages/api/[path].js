import axios from 'axios';
import addressMap from '../../public/address.json';

const handleRequest  = async (req, res) => {
    const {path} = req.query;
    const address = addressMap[path];

    if(!address) {
        res.status(404).json({error: 'not found'});
        return;
    }

    try {
    const response = await axios({
      method: req.method,
      url: address,
      data: req.body,
      headers: {
        ...req.headers,
        host: new URL(address).host,
        cookie: req.headers.cookie,
      },
      params: req.query,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data)
    } else {
        console.log(error);
      res
        .status(500)
        .json({message: 'An error occurred while proxying the request.'})
    }
  }
}

export default handleRequest;