const express = require('express');
const app = express();

const nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), () => {
  console.log(`Server started at http://localhost:${app.get('port')}`);
});
