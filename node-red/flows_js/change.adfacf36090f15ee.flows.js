const Node = {
  "id": "adfacf36090f15ee",
  "type": "change",
  "z": "31641b084096a0df",
  "name": "Set headers og data fra flow til msg",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.Authorization",
      "pt": "msg",
      "to": "'Bearer ' & $globalContext('access_token')",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "headers.Signature",
      "pt": "msg",
      "to": "Signature",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-Nordea-Originating-Date",
      "pt": "msg",
      "to": "X-Nordea-Originating-Date",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-Nordea-Originating-Host",
      "pt": "msg",
      "to": "X-Nordea-Originating-Host",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-IBM-Client-Id",
      "pt": "msg",
      "to": "X-IBM-Client-Id",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "headers.X-IBM-Client-Secret",
      "pt": "msg",
      "to": "X-IBM-Client-Secret",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "url",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 700,
  "wires": [
    [
      "bc712702feffe499"
    ]
  ],
  "_order": 72
}

module.exports = Node;