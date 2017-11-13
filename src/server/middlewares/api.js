// API
let axios = require('axios');
const servers = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' }
];

module.exports = function setup(app) {
  app.get('/api/stats', (req, res) => {
    setTimeout(() => {
      res.json({
        // error: 'server error message',
        status: 'online',
        servers
      });
    }, 3000);
  });

  app.get('/api/book/:id', (req, res) => {
    // for example id: 1003078
    let id = req.params.id;
    axios.get('https://api.douban.com/v2/book/' + id).then(function (response) {
      res.json({ data: response.data });
    })
      .catch(function (error) {
        console.log(error);
      });
  });

  app.get('/api/red-packet', (req, res) => {
    // for example id: 1003078
    let userId = req.query.userId;
    let grabUserId = req.query.grabUserId;
    let redPacketId = req.query.redPacketId;
    console.log(userId);
    console.log(grabUserId);
    console.log(redPacketId);
    let reqObj = {
      userId: userId,
      grabUserId: grabUserId,
      redPacketId: redPacketId
    };
    // return;
    axios.post('http://192.168.16.37:8080/tyzz/redPacket/grab', JSON.stringify(reqObj), {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      console.log('response from server');
      console.log(response);
      res.json(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });
  });

  app.post('/api/servers', (req, res) => {
    if (!req.body.name) {
      return res.json({
        error: 'cannot add server with empty name'
      });
    }
    return setTimeout(() => {
      servers.push({
        id: servers[servers.length - 1].id + 1,
        name: req.body.name
      });
      res.json({
        success: true
      });
    }, 3000);
  });
};
