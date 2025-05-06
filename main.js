const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    const headers = [
      "Sec-CH-UA-Bitness",
      "Sec-CH-UA-Arch",
      "Sec-CH-UA-Full-Version",
      "Sec-CH-UA-Mobile",
      "Sec-CH-UA-Model",
      "Sec-CH-UA-Platform-Version",
      "Sec-CH-UA-Full-Version-List",
      "Sec-CH-UA-Platform",
      "Sec-CH-UA",
      "UA-Bitness",
      "UA-Arch",
      "UA-Full-Version",
      "UA-Mobile",
      "UA-Model",
      "UA-Platform-Version",
      "UA-Platform",
      "UA",
    ];

    res.set("Accept-CH", headers.join(", "));
    res.set("Critical-CH", headers.join(", "));
    res.status(200).json(req.headers);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
